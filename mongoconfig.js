const mongoose = require('mongoose');

//mongodb+srv://username:pass@clusterurl/database
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0-5eye0.mongodb.net/tvs?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    dbName: "SpareParts"
   // useUnifiedTopology: true
}).then(()=>{
    console.log("Connected sucessfully...");

}).catch((err)=>{
    console.log(err);
});

module.exports.mongoose = mongoose;
