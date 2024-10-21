import React from 'react';

export default function EventPage({ params }) {
  return (
    <div>
      <div className="flex mb-1">
        <h1 className="me-auto">Title</h1>
        <div>
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
      <div className="flex justify-between text-xs mb-2">
        <span className="">Uploader</span>
        <span>Location</span>
        <span>Date</span>
      </div>
      <p>Description</p>
    </div>
  );
}
