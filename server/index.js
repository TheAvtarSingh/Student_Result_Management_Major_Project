const express = require('express')
const app = express()
const port = 5000
const mongodb = require('./db');
const cors=require("cors");
const RegisterStudent = require("./Routes/RegisterStudent")


mongodb();

/* app.use((req, res,next)=>( |
  res. setheader("Access-Control-Allow-Origin®, "http: //localhost: 000"); |
  res-header] |
  Access-Control-ALLow-Headers*, |
  “origin, X Requested With, Cofent-Type, Accept™ 3
  
  » g | */

/*  app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  )
}) */


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api',RegisterStudent)

app.listen(port, () => {
  console.log(`Result app listening on port ${port}`)
})