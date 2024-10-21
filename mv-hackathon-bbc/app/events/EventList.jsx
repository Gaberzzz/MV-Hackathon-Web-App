import React from 'react';
import EventListItem from './EventListItem';

export default function EventList({ events }) {
  return (
    <div className="flex justify-center items-center">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {events.map((event) => (
          <li key={event.id}>
            <EventListItem event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
