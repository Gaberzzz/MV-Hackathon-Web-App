import React from 'react';
import { getEvent } from '@/app/models/eventModels';
import { FaClock, FaMapPin, FaUser, FaUsers } from 'react-icons/fa';

export default async function EventPage({ params }) {
  console.log(params.id);
  const event = await getEvent(params.id);

  return (
    <div>
      <div className="flex mb-1">
        <h1 className="me-auto">{event.eventName}</h1>
        <div>
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
      <div className="flex flex-col text-xs mb-2">
        <span className="flex items-center gap-1">
          <FaUser /> {event.creator}
        </span>
        <span className="flex items-center gap-1">
          <FaUsers /> {event.capacity}
        </span>
        <span className="flex items-center gap-1">
          <FaClock /> {event.location}
        </span>
        <span className="flex items-center gap-1">
          <FaMapPin /> {event.time} {event.date}
        </span>
      </div>
      <p>{event.description}</p>
    </div>
  );
}
