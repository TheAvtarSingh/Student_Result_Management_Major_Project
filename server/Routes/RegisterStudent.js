const express = require("express");
const router = express.Router();
const Student = require("../models/Students");
const { body, validationResult } = require('express-validator');

// Add A Student From An Admin

router.post("/registerStudent", 
body('Email',"Check Your Email Address").isEmail(),
// password must be at least 5 chars long
body('Password',"Minimum Length Should be 8").isLength({ min: 8 }),
body('RollNumber',"Follow Format YYDEPTROLLNO - XXXXXXXX").isLength({ min: 8 })

,async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await Student.create({
      StudentName: req.body.StudentName,
      RollNumber: req.body.RollNumber,
      Email: req.body.Email,
      Password: req.body.Password,
      Field: req.body.Field,
      Department: req.body.Department,
      Class: req.body.Class,
      Marks: {
        Physics: req.body.Marks.Physics,
        Chemistry: req.body.Marks.Chemistry,
        Maths: req.body.Marks.Maths,
      },
    });
    console.log(req.body.Marks.Physics);
    
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
}
);


// Login Student From HomePage


router.post("/loginStudent" , 
body('RollNumber',"Follow Format YYDEPTROLLNO - XXXXXXXX").isLength({ min: 8 }),
// password must be at least 5 chars long
body('Password',"Minimum Length Should be 8").isLength({ min: 8 })


,async (req, res) => {
let RollNumber = req.body.RollNumber;

const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}

  try {
    let studentData = await Student.findOne({RollNumber});
    if(!studentData){
      return res.status(400).json({ errors: "Check Your Roll Number or Student Not Registered ! !" });
    }

    if(req.body.Password !== studentData.Password){
      return res.status(400).json({ errors: "Check Your Password !!" });
    }
    res.json({ success: true });

  } catch (error) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;
