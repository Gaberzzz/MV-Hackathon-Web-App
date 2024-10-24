import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import db from './database';

const eventsCol = collection(db, 'events');

async function getEvents() {
  const eventSnapshot = await getDocs(eventsCol);
  const eventList = eventSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return eventList;
}

// async function createEvent(eventDetails) {
//     const event = await addDoc(eventsCol, {
//         eventName: eventDetails.eventName,
//         creator: 'Creator',
//         date: eventDetails.date,
//         location: eventDetails.location,
//         time: eventDetails.time,
//         capacity: parseInt(eventDetails.capacity, 10),
//         organizations: organizations.filter((org) => org.trim() !== ''),
//     });
//     return event;
// }

async function getEvent(id) {
  const eventDoc = doc(db, 'events', id);
  const eventSnapshot = await getDoc(eventDoc);
  if (!eventSnapshot.exists()) {
    throw new Error(`Event with ID ${id} does not exist.`);
  }
  const post = { ...eventSnapshot.data(), id: eventSnapshot.id };
  return post;
}

getEvents()
  .then((eventList) => {
    // console.log('Event List:', eventList);
  })
  .catch((error) => {
    console.error('Error fetching events:', error);
  });

export { getEvents, getEvent };
