const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const EventData = require("./mongodb");
const contactDta = require("./contactdb")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/api/events/details", async(req, res) => {
  try {
    const evenfind =await EventData.find();
    res.status(200).json(evenfind);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/api/events/details/:id", async(req, res) => {
  try {
    const id = req.params.id
    const evenfind =await EventData.findById({_id:id});
    res.status(200).json(evenfind);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/events/details", cors(), async (req, res) => {
  try {
    const { title, start, end, location, note } = req.body;
    const eventSchema = new EventData({ title, start, end, location, note });
    await eventSchema.save();
    res.status(201).json(eventSchema);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.put("/api/events/details/:id", cors(), async (req, res) => {
  try {
    const eventUpdate = await EventData.findByIdAndUpdate(req.params.id , req.body)
    res.status(200).json(eventUpdate)
  } catch (err) {
    res.status(500).json(err);
  }
});

app.delete("/api/events/details/:id", cors(), async (req, res) => {
  try {
    const eventDelete = await EventData.findByIdAndDelete(req.params.id)
    res.status(200).json(eventDelete)
  } catch (err) {
    res.status(500).json(err);
  }
});


app.get("/api/contact/details", async(req, res) => {
  try {
    const contactFind =await contactDta.find();
    res.status(200).json(contactFind);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/contact/details", cors(), async (req, res) => {
  try {
    const {fullName , email , message} = req.body
    const contactSchema = new contactDta({fullName , email , message})
    await contactSchema.save()
    res.status(201).json(contactSchema);
  } catch (err) {
    res.status(500).json(err);
  }
});


app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
