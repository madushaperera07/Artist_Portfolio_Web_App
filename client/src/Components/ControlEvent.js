import React, { useState } from "react";
import DateTime from "react-datetime";
import moment from "moment";
import axios from "axios"

function ControlEvent() {
  const [eventInput, setEventInput] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    location: "",
    note: "",
  });

  const InputChange = (e) => {
    const { name, value } = e.target;
    setEventInput({ ...eventInput, [name]: value });
  };
  const StartDateChange = (start) => {
    setEventInput({ ...eventInput, start });
  };
  const EndDateChange = (end) => {
    setEventInput({ ...eventInput, end });
  };
  const AddEvent = async (e) => {
    e.preventDefault();
    try {
          await axios.post("http://localhost:5000/api/events/details", {
            title: eventInput.title,
            start: moment(eventInput.start).toDate(),
            end: moment(eventInput.end).toDate(),
            location: eventInput.location,
            note: eventInput.note,
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <label>Event Name:</label>
        <input
          type="text"
          name="title"
          value={eventInput.title}
          onChange={InputChange}
        />
        <label>Start Date and Time:</label>
        <DateTime
          name="start"
          onChange={StartDateChange}
          value={eventInput.start}
        />
      </div>
      <div>
        <label>End Date and Time:</label>
        <DateTime name="end" onChange={EndDateChange} value={eventInput.end} />
      </div>
      <div></div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={eventInput.location}
          onChange={InputChange}
        />
        <label>Event Description:</label>
        <input
          type="text"
          name="note"
          value={eventInput.note}
          onChange={InputChange}
        />
      </div>
      <button onClick={AddEvent}>Add Event</button>
    </div>
  );
}

export default ControlEvent;
