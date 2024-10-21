"use client";
import React, { useState } from 'react';
import { db } from './firebase'; 
import { collection, addDoc } from 'firebase/firestore';

const CreateEventPage = () => {
    const [organizations, setOrganizations] = useState(['']);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        eventName: '',
        date: '',
        location: '',
        time: '',
        capacity: '',
    });

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
            [name]: value
        });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.eventName.trim()) {
            newErrors.eventName = "Event name is required";
        }

        if (!formData.date) {
            newErrors.date = "Event date is required";
        }

        if (!formData.location.trim()) {
            newErrors.location = "Event location is required";
        }

        if (!formData.time) {
            newErrors.time = "Event time is required";
        }

        if (!formData.capacity || formData.capacity <= 0) {
            newErrors.capacity = "Capacity must be a positive number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const eventRef = collection(db, 'events'); 
                await addDoc(eventRef, {
                    creator: formData.eventName,
                    date: formData.date,
                    location: formData.location,
                    time: formData.time,
                    capacity: parseInt(formData.capacity, 10),
                    organizations: organizations.filter(org => org.trim() !== '') 
                });
                console.log("Event successfully created!");
            } catch (error) {
                console.error("Error adding event: ", error);
            }
        } else {
            console.log("Form is invalid. Fix errors.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border border-gray-300 p-4 rounded-lg w-1/4 space-y-4">
                <input
                    type="text"
                    name="eventName"
                    placeholder="Add name of event"
                    className="w-full p-2 border rounded"
                    value={formData.eventName}
                    onChange={handleInputChange}
                />
                {errors.eventName && <p className="text-red-500 text-sm">{errors.eventName}</p>}

                <div className="relative w-full">
                    <input
                        type="date"
                        name="date"
                        className="w-full p-2 border rounded pl-10"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📅</span>
                </div>
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

                <div className="relative w-full">
                    <input
                        type="text"
                        name="location"
                        placeholder="Set location"
                        className="w-full p-2 border rounded pl-10"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📍</span>
                </div>
                {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}

                <div className="relative w-full">
                    <input
                        type="time"
                        name="time"
                        className="w-full p-2 border rounded pl-10"
                        value={formData.time}
                        onChange={handleInputChange}
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">⏰</span>
                </div>
                {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}

                <div className="relative w-full">
                    <input
                        type="number"
                        name="capacity"
                        placeholder="Attendee capacity"
                        className="w-full p-2 border rounded pl-10"
                        min="1"
                        value={formData.capacity}
                        onChange={handleInputChange}
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">👥</span>
                </div>
                {errors.capacity && <p className="text-red-500 text-sm">{errors.capacity}</p>}

                {organizations.map((organization, index) => (
                    <div key={index} className="relative w-full flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Organization Name"
                            className="w-full p-2 border rounded"
                            value={organization}
                            onChange={(e) => handleOrganizationChange(index, e.target.value)}
                        />
                        {index === organizations.length - 1 && (
                            <button
                                type="button"
                                onClick={addOrganizationField}
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                                Add
                            </button>
                        )}
                    </div>
                ))}

                <button
                    className="bg-green-500 text-white px-4 py-2 rounded w-full"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default CreateEventPage;