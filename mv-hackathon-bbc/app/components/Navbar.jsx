"use client";
import Link from 'next/link';
import { auth, logoutUser } from '../models/userModels';
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import `onAuthStateChanged`

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(null); // State to store the user

  useEffect(() => {
    const auth = getAuth();
    
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // Set the user in state if available
      } else {
        setCurrentUser(null); // Clear the user state if not logged in
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setCurrentUser(null); // Clear the user state after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="navbar bg-base-100 custom-container">
      <div className="navbar-start">
        <span className="text-xl font-bold">UPV Ganaps</span>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/events/create">Create</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {currentUser ? (
          <div className="flex gap-2">
            <button className="btn btn-primary btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login/" className="btn btn-primary btn-outline btn-sm">
              Sign in
            </Link>
            <Link href="/register/" className="btn btn-primary btn-sm">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
