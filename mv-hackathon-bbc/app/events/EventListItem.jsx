import React from 'react';
import Link from 'next/link';
import { FaClock, FaMapPin, FaUser, FaUsers } from 'react-icons/fa';

export default function EventListItem({ event }) {
  return (
    <div className="card card-compact border-2 border-base-200 bg-base-100 w-full">
      <figure>
        <img src="https://placehold.jp/300x150.png" alt="Preview" />
      </figure>
      <div className="card-body">
        <h2 className="card-title link link-hover text-primary mb-0">
          <Link href={`/events/${event.id}`}>{event.eventName}</Link>
        </h2>
        <p className="mb-1">{event.description}</p>
        <div className="flex flex-col text-xs mb-2 gap-1">
          <span className="flex items-center gap-1">
            <FaUser /> {event.creator}
          </span>
          <span className="flex items-center gap-1">
            <FaUsers /> {event.capacity}
          </span>
          <span className="flex items-center gap-1">
            <FaMapPin /> {event.location}
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> {event.time} {event.date}
          </span>
          <div className="flex gap-1">
            {event.organizations.map((org) => (
              <span className="badge badge-neutral">{org}</span>
            ))}
          </div>
        </div>
        <div className="card-actions flex">
          <button className="btn btn-primary w-full">Join</button>
        </div>
      </div>
    </div>
  );
}
