const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/saveData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("Database Connected 02"))
.catch(()=>console.log("error"))

const contactSchema = new mongoose.Schema({
  fullName : String,
  email : String,
  message : String,
});

const contactData = mongoose.model("contactData", contactSchema);
module.exports = contactData;
