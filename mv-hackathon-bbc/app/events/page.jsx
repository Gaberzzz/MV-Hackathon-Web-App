import React from 'react';
import EventList from './EventList';
import { getEvents } from '../models/eventModels';

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <h1>Events</h1>
      <EventList events={events} />
    </>
  );
}
