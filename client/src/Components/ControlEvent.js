import React, { useState } from "react";
import DateTime from "react-datetime";
import moment from "moment";
import axios from "axios"
import { Link } from "react-router-dom";

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
    <div className="All_event">
      
    <div className="event_container">
    <h2>Add Events</h2>
      <div>
        
        <input className="input_content" placeholder="Event Name"
          type="text"
          name="title"
          value={eventInput.title}
          onChange={InputChange}
        />
        </div>
        <div>
        <label>Start Date and Time:</label>
        <DateTime className="dataFix"
          name="start"
          onChange={StartDateChange}
          value={eventInput.start}
        />
        </div>
        
      
      <div>
        <label>End Date and Time:</label>
        <DateTime className="dataFix" name="end" onChange={EndDateChange} value={eventInput.end} />
      </div>
      <div>
        
        <input className="input_content" placeholder="Location"
          type="text"
          name="location"
          value={eventInput.location}
          onChange={InputChange}
        />
      </div>
      <div>
        
        <input className="input_content" placeholder="Event Description"
          type="text"
          name="note"
          value={eventInput.note}
          onChange={InputChange}
        />
      </div>
      <button class="btn btn-success rounded-pill px-3 button_containe" onClick={AddEvent}>Add Event</button>
      <div>
        <Link className="deco_link" to="/Control/Admin/Page/ControlEvant/List">List Events</Link>
      </div>
    </div>
    </div>
  );
}

export default ControlEvent;
