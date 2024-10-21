import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import db from './database';

const userDetailsCol = collection(db, 'userDetails');

async function getUserDetails() {
// user details = UD
  const UDSnapshot = await getDocs(userDetailsCol);
  const UDList = UDSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return UDList;
}

async function createUserDetails(uid, fullname, studentNumber) {
    const userDetails = await addDoc(userDetailsCol, {
        uid: uid,
        fullname: fullname,
        studentNumber: studentNumber,
        // organizations: organizations.filter((org) => org.trim() !== ''),
    });
    return userDetails;
}

export { getUserDetails, createUserDetails };