import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 custom-container">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TBD</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/events/">Events</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
