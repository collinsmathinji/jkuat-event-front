// src/pages/EventCalendar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function EventCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(response => {
        setEvents(response.data.map(event => ({
          title: event.title,
          date: event.date,
          extendedProps: {
            time: event.time,
            location: event.location,
            description: event.description,
            category: event.category,
          },
        })));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          JKUAT Event Calendar
        </h2>
      </div>
      <div className="border-t border-gray-200">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={(info) => {
            alert(`Event: ${info.event.title}\nTime: ${info.event.extendedProps.time}\nLocation: ${info.event.extendedProps.location}\nDescription: ${info.event.extendedProps.description}`);
          }}
        />
      </div>
    </div>
  );
}

export default EventCalendar;