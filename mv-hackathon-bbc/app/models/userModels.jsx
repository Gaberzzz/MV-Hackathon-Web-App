"use client";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';
import db from "./database";  // Assuming your Firestore instance is correctly initialized in this file
import { useState, useEffect, useContext, createContext } from 'react';

// Initialize Firebase Auth
export const auth = getAuth();

// Create an Auth Context
const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

// Create an AuthProvider to wrap the app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);  // Set the user in state when the auth state changes
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
};

// Function to create a new user with email and password
export async function registerUser(email, password) {
  console.log("inside register");
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
export async function loginUser(email, password) {
  console.log("inside login");
  try {
    console.log("Email:", email, "Password:", password);  // Check if email and password are correct
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;  // Pass the error up to be handled by the calling code
  }
}


// Function to log out the current user
export async function logoutUser() {
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
    window.location.href = "/";
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

export default { registerUser, loginUser, logoutUser };