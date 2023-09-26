import React, { useEffect, useState } from "react";
import DateTime from "react-datetime";
import moment from "moment";
import axios from "axios";
import { useParams } from "react-router-dom";

function CurdEvents() {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [location, setLocation] = useState();
  const [note, setNote] = useState();

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/events/details/${id}`).then(res => {
      setTitle(res.data.title)
      setStart(res.data.start)
      setEnd(res.data.end)
      setLocation(res.data.location)
      setNote(res.data.note)
    })
    .catch(err=> console.log(err))

    // eslint-disable-next-line
  },[])


  const dateStart=(start)=>{
    setStart(start)
  }
  const dateEnd=(end)=>{
    setEnd(end)
  }

const updateData=(e)=>{
  e.preventDefault();
  axios.put(`http://localhost:5000/api/events/details/${id}` , {
    title:title,
    start : moment(start).toDate(),
    end : moment(end).toDate(),
    location : location,
    note : note
  }).then(
    res=> console.log(res)
  ).catch(err=>console.log(err))
}

  return (
    <div className="All_event">
      <div className="event_container">
        <h2>Update Events</h2>
        <div>
          <input
            className="input_content"
            placeholder="Event Name"
            type="text"
            name="title"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Start Date and Time:</label>
          <DateTime className="dataFix" name="start" value={start} onChange={dateStart}/>
        </div>

        <div>
          <label>End Date and Time:</label>
          <DateTime className="dataFix" name="end" value={end} onChange={dateEnd}/>
        </div>
        <div>
          <input
            className="input_content"
            placeholder="Location"
            type="text"
            name="location"
            value={location}
            onChange={(e)=> setLocation(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input_content"
            placeholder="Event Description"
            type="text"
            name="note"
            value={note}
            onChange={(e)=> setNote(e.target.value)}
          />
        </div>
        <button class="btn btn-success rounded-pill px-3 button_containe" onClick={updateData}>
          Update Event
        </button>
      </div>
    </div>
  );
}

export default CurdEvents;
