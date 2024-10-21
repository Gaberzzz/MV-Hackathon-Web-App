import React from 'react';

export default function EventListItem({ event }) {
  return (
    <div className="card card-compact border-2 border-base-200 bg-base-100 w-full">
      <figure>
        <img src="https://placehold.jp/300x150.png" alt="Preview" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-0">Event Name</h2>
        <p className="mb-1">Event description</p>
        <div className="flex justify-between text-xs mb-2">
          <span className="">Uploader</span>
          <span>Location</span>
          <span>Date</span>
        </div>
        <div className="card-actions flex">
          <button className="btn btn-primary w-full">Join</button>
        </div>
      </div>
    </div>
  );
}
