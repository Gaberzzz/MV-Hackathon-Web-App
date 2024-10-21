import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import db from './database';

async function getEvents() {
  const eventsCol = collection(db, 'events');
  const eventSnapshot = await getDocs(eventsCol);
  const eventList = eventSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return eventList;
}

async function getEvent(id) {
  const eventDoc = doc(db, 'events', id);
  const eventSnapshot = await getDoc(eventDoc);
  if (!eventSnapshot.exists()) {
    throw new Error(`Event with ID ${id} does not exist.`);
  }
  const post = { ...eventSnapshot.data(), id: eventSnapshot.id };
  return post;
}

export { getEvents, getEvent };
