const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/saveData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("Database Connected"))
.catch(()=>console.log("error"))

const eventSchema = new mongoose.Schema({
    title: String,  
    start: Date,
    end: Date,
    location: String,
    note : String
  });

const EventData = mongoose.model('saveAllData', eventSchema);
module.exports = EventData