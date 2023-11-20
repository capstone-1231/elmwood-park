import React from 'react';

const CalendarEvents = ({ events }) => {
  if (!events || events.length === 0) {
    return <div>No upcoming events found.</div>;
  }

  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          <strong>{event.summary}</strong>
          <br />
          {new Date(event.start.dateTime || event.start.date).toLocaleString()}
        </li>
      ))}
    </ul>
  );
};

export default CalendarEvents;