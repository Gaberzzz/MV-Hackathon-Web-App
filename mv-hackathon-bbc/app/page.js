import React from 'react';
import Link from 'next/link';
import EventList from './events/EventList';
import { getEvents } from './models/eventModels';

export default async function Home() {
  const events = await getEvents();

  return (
    <>
      <div className="flex">
        <h1 className="me-auto">Events</h1>
        <Link className="btn btn-primary" href="/events/create/">
          Create
        </Link>
      </div>
      <EventList events={events} />
    </>
  );
}
