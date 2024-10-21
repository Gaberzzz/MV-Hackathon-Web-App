import React from 'react';
import { getEvent } from '@/app/models/eventModels';
import { FaClock, FaMapPin, FaUser, FaUsers } from 'react-icons/fa';
import db from '@/app/models/database';
import { doc, getDoc } from 'firebase/firestore';

export default async function EventPage({ params }) {
  const event = await getEvent(params.id);
  console.log(event.participants);

  return (
    <div>
      <div className="flex mb-1">
        <h1 className="me-auto">{event.eventName}</h1>
        <div>
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
      <div className="flex text-xs mb-2 gap-1">
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
      <p>{event.description}</p>
      <div className="my-3">
        <h3 className="mb-1">Participants</h3>
        <ul>
          {event.participants ? (
            event.participants.map(async (participant) => {
              console.log('Participant', participant);
              const userRef = doc(db, 'userDetails', participant);
              const userSnapshot = await getDoc(userRef);
              const user = { ...userSnapshot.data(), id: userSnapshot.id };
              console.log(user);
              return <li>{user.fullname}</li>;
            })
          ) : (
            <li>No participants</li>
          )}
        </ul>
      </div>
    </div>
  );
}
