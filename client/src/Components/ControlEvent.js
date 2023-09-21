
import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

function ControlEvent() {
  const [evant, setEvant] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      evant,
      start,
      end
    })
  };


  return (
    <div>
      <form action=" POST" onSubmit={onSubmit}>
        <input
          placeholder="Evant Name"
          value={evant}
          onChange={(e) => setEvant(e.target.value)}
        />
        <div>
          <Datetime value={start} onChange={(Date) => setStart(Date)} />
        </div>
        <div>
          <Datetime value={end} onChange={(Date) => setEnd(Date)} />
        </div>

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="Submit">Add Evant</button>
      </form>
    </div>
  );
}

export default ControlEvent;
