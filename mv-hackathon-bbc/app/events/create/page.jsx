'use client';

import React, { useState } from 'react';
import db from '@/app/models/database';
import { collection, addDoc } from 'firebase/firestore';
import { FaMapPin, FaPlus, FaUsers } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function CreateEventPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [organizations, setOrganizations] = useState(['']);

  const handleOrganizationChange = (index, value) => {
    const newOrganizations = [...organizations];
    newOrganizations[index] = value;
    setOrganizations(newOrganizations);
  };

  const addOrganizationField = () => {
    setOrganizations([...organizations, '']);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.eventName.trim()) {
      newErrors.eventName = 'Event name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.date) {
      newErrors.date = 'Event date is required';
    }
    if (!formData.time) {
      newErrors.time = 'Event time is required';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Event location is required';
    }
    if (!formData.capacity || formData.capacity <= 0) {
      newErrors.capacity = 'Capacity must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        setIsLoading(true);
        const eventRef = collection(db, 'events');
        await addDoc(eventRef, {
          eventName: formData.eventName,
          description: formData.description,
          creator: 'Creator',
          date: formData.date,
          location: formData.location,
          time: formData.time,
          capacity: parseInt(formData.capacity, 10),
          organizations: organizations.filter((org) => org.trim() !== ''),
        });
        router.push('/');
        setIsLoading(false);
      } catch (error) {
        console.error('Error adding event: ', error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Create New Event</h1>
      <div className="flex flex-col gap-3 border w-1/3 p-5 rounded-box border-base-200">
        <input
          type="text"
          name="eventName"
          placeholder="Name of event"
          className="input input-bordered w-full"
          value={formData.eventName}
          onChange={handleInputChange}
        />
        {errors.eventName && (
          <p className="text-error text-sm">{errors.eventName}</p>
        )}
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          value={formData.description}
          onChange={handleInputChange}
        />
        {errors.eventName && (
          <p className="text-error text-sm">{errors.eventName}</p>
        )}

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="date"
            name="date"
            className="grow"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        {errors.date && <p className="text-error text-sm">{errors.date}</p>}

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="grow"
            value={formData.location}
            onChange={handleInputChange}
          />
          <FaMapPin />
        </label>
        {errors.location && (
          <p className="text-error text-sm">{errors.location}</p>
        )}

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="time"
            name="time"
            className="grow"
            value={formData.time}
            onChange={handleInputChange}
          />
        </label>
        {errors.time && <p className="text-error text-sm">{errors.time}</p>}

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="number"
            name="capacity"
            placeholder="Attendee capacity"
            className="grow"
            min="1"
            value={formData.capacity}
            onChange={handleInputChange}
          />
          <FaUsers />
        </label>
        {errors.capacity && (
          <p className="text-error text-sm">{errors.capacity}</p>
        )}

        {organizations.map((organization, index) => (
          <div key={index} className="flex flex-col w-full items-center gap-2">
            <input
              type="text"
              placeholder="Organization Name"
              className="input input-bordered w-full"
              value={organization}
              onChange={(e) => handleOrganizationChange(index, e.target.value)}
            />
            {index === organizations.length - 1 && (
              <button
                type="button"
                onClick={addOrganizationField}
                className="btn btn-neutral btn-sm btn-circle"
              >
                <FaPlus />
              </button>
            )}
          </div>
        ))}

        <button
          className="btn btn-primary w-full"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create'}
        </button>
      </div>
    </div>
  );
}
