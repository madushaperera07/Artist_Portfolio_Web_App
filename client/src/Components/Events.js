import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios"

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


function Events() {

  const [events , setEvents] = useState([])

  useEffect(()=>{
    async function displayEvent(){
      try{
        const response = await axios.get("http://localhost:5000/api/events/details")
        setEvents(response.data)
      }catch(err){
        console.log(err)
      }
    }
    displayEvent()
  },[])




  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events.map((event)=>({
            titel : event.titel,
            start : event.start,
            end : event.end,
            location : event.location,
            note : event.note
          }))}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Events;
