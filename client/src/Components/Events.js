import React from 'react'
import Header from './Header'
import Footer from './Footer'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Events() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Events