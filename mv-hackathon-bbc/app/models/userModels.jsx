import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';
import db from "./database";  // Assuming your Firestore instance is correctly initialized in this file

// Initialize Firebase Auth
const auth = getAuth();

// Function to create a new user with email and password
async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User registered:", user);
    return user;
  } catch (error) {
    console.error("Error registering user:", error.code, error.message);
    throw error; // Re-throwing the error to be handled by the calling code
  }
}

// Function to log in a user with email and password
async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("Error signing in:", error.code, error.message);
    throw error;
  }
}

// Function to log out the current user
async function logoutUser() {
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

export default { registerUser, loginUser, logoutUser };