const mongoose = require("mongoose");
/* const mongouri =
  "mongodb+srv://result_project:Avtar123@geturresult.jiq2aiw.mongodb.net/geturresult?retryWrites=true&w=majority"; */
const mongouri =
  "mongodb://result_project:00000000@ac-linxd66-shard-00-00.jiq2aiw.mongodb.net:27017,ac-linxd66-shard-00-01.jiq2aiw.mongodb.net:27017,ac-linxd66-shard-00-02.jiq2aiw.mongodb.net:27017/geturresult?ssl=true&replicaSet=atlas-zqua33-shard-0&authSource=admin&retryWrites=true&w=majority";
 /* const mongouri =
  "mongodb://localhost:27017"; */ 



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
