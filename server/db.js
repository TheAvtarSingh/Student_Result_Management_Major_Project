const mongoose = require("mongoose");

const mongouri= "Your Url";


const mongodb = async () => {
// Setting checking of query to false to avoid errors
  mongoose.set("strictQuery", false);
// Conenct method
  await mongoose.connect(mongouri, { useNewUrlParser: true ,
    useUnifiedTopology: true,}, (err) => {
    if (err) console.log("---", err);

    else {
      console.log("Connected Successfully");
      const fetched_data = mongoose.connection.collection("student");
       fetched_data.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        else console.log();
      }); 

      
    }
  });
};

module.exports = mongodb;
