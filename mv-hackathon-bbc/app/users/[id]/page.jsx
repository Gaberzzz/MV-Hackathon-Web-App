'use client';
import React, { useState } from 'react';

export default function UserPage({ params }) {
  const [activeTab, setActiveTab] = useState('created');

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    image: 'https://via.placeholder.com/150',
    eventsCreated: [
      { id: 1, title: 'Event 1' },
      { id: 2, title: 'Event 2' },
    ],
    eventsJoined: [
      { id: 3, title: 'Event 3' },
      { id: 4, title: 'Event 4' },
    ],
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-300 p-6 rounded-lg w-1/2 h-3/4 flex flex-col">
        <div className="text-center mb-4">
          <img
            src={user.image}
            alt="Profile"
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 ${
              activeTab === 'created' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveTab('created')}
          >
            Events Created
          </button>
          <button
            className={`px-4 py-2 mx-2 ${
              activeTab === 'joined' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveTab('joined')}
          >
            Events Joined
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {activeTab === 'created' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Events Created</h2>
              {user.eventsCreated.map((event) => (
                <div
                  key={event.id}
                  className="border p-4 mb-4 rounded shadow-sm"
                >
                  {event.title}
                </div>
              ))}
            </div>
          )}
          {activeTab === 'joined' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Events Joined</h2>
              {user.eventsJoined.map((event) => (
                <div
                  key={event.id}
                  className="border p-4 mb-4 rounded shadow-sm"
                >
                  {event.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
