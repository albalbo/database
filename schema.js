let mongoose  = require("./mongoconfig");
mongoose = mongoose.mongoose

const MenuSchema = new mongoose.Schema({ProductId : Number, ProductName : String, Units : Number, Description : String, Price : Number});
const tvs = mongoose.model('tvs', MenuSchema);



// const orderSchema = new mongoose.Schema({ table:Number, order:Array});
// const tvs = mongoose.model('orders', orderSchema);


 //module.exports.Menu = Menu;
 module.exports.tvs = tvs;
