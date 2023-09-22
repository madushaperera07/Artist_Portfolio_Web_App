const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const EventData = require("./mongodb");

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

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
