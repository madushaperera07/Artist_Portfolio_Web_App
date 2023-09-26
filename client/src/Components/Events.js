
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios"


import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Events() {

  const [allEvents , setAllEvents] = useState([])

  useEffect(()=>{
    async function displayEvent(){
      try{
        const response = await axios.get("http://localhost:5000/api/events/details")
        setAllEvents(response.data.map((event) => ({
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
          location: event.location,
          note: event.note,
        })))
      }catch(err){
        console.log(err)
      }
    }
    displayEvent()
  },[])

const eventContent=({event})=>{
  return(
    <div>
      <strong>{event.title}</strong>
      <br/>
      <span>
        Start Time : {event.start.toLocaleTimeString()}
        <br/>
        End Time : {event.end.toLocaleTimeString()}
        <br/>
       <p>{event.extendedProps.location}</p>
       <p>{event.extendedProps.note}</p>
      </span>
    </div>
  )
}


  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>

        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventColor="Green"
          eventDisplay="block"
          editable = {true}
          events={allEvents}
          eventContent={eventContent}
        />
      </div>
      <div>
        <Footer/>

      </div>
    </div>
  )

}

export default Events