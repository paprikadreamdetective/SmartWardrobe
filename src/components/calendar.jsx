import React from "react";
import Fullcalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from '@fullcalendar/list'

function Calendar () {
  
  return(
    <Fullcalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      initialView = {'listWeek'}
      height={250}
      themeSystem= {'bootstrap5'}
      headerToolbar={{
        start: '', // will normally be on the left. if RTL, will be on the right
        center: '',
        end: '' // will normally be on the right. if RTL, will be on the left
      }}
      events={[
        {title:'event 1', date:'2024-01-17'},
        {title:'event 4', date:'2024-01-19'},
        {title:'event 6', date:'2024-01-19'},
        {title:'event 8', date:'2024-01-20'},
        {title:'event 2', date:'2024-01-26'},
        {title:'event 3', date:'2024-01-30'},
        {title:'event 4', date:'2024-02-10'},
        {title:'event 5', date:'2024-02-20'},
        { // this object will be "parsed" into an Event Object
          title: 'The Title', // a property!
          start: '2024-01-16', // a property!
          end: '2024-01-17' // a property! ** see important note below about 'end' **
        }
      ]}
      
    ></Fullcalendar>
  )
}

export default Calendar;