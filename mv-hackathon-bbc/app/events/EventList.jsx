import React from 'react';
import EventListItem from './EventListItem';

export default function EventList({ events }) {
  return (
    <div className="flex justify-center items-center">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        <li className="">
          <EventListItem />
        </li>
        <li>
          <EventListItem />
        </li>
        <li>
          <EventListItem />
        </li>
      </ul>
    </div>
  );
}
