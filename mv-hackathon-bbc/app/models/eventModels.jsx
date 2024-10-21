import { collection, getDocs } from 'firebase/firestore';
import db from "./database";

async function getEvents() {
    const eventsCol = collection(db, 'events');  // Ensure db is a Firestore instance
    const eventSnapshot = await getDocs(eventsCol);
    const eventList = eventSnapshot.docs.map(doc => doc.data());
    return eventList;
}

// Call the function and print the results
getEvents()
    .then(eventList => {
        console.log('Event List:', eventList);
    })
    .catch(error => {
        console.error('Error fetching events:', error);
    });

export { getEvents };
