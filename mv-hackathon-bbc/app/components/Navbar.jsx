import React from 'react';
import Link from 'next/link';

export default function Navbar() {
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
        <div className="flex gap-2">
          <Link href="/login/" className="btn btn-primary btn-outline btn-sm">
            Sign in
          </Link>
          <Link href="/register/" className="btn btn-primary btn-sm">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
