"use client";
import React, { useState } from 'react';

const CreateEventPage = () => {
    const [organizations, setOrganizations] = useState(['']);

    const handleOrganizationChange = (index, value) => {
        const newOrganizations = [...organizations];
        newOrganizations[index] = value;
        setOrganizations(newOrganizations);
    };

    const addOrganizationField = () => {
        setOrganizations([...organizations, '']);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border border-gray-300 p-4 rounded-lg w-1/4 space-y-4">
                <input type="text" placeholder="Add name of event" className="w-full p-2 border rounded" />

                <div className="relative w-full">
                    <input type="date" placeholder="Set date" className="w-full p-2 border rounded pl-10" />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📅</span>
                </div>

                <div className="relative w-full">
                    <input type="text" placeholder="Set location" className="w-full p-2 border rounded pl-10" />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📍</span>
                </div>

                <div className="relative w-full">
                    <input type="time" placeholder="Set time" className="w-full p-2 border rounded pl-10" />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">⏰</span>
                </div>

                <div className="relative w-full">
                    <input type="number" placeholder="Attendee capacity" className="w-full p-2 border rounded pl-10" min="1" />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">👥</span>
                </div>

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

                <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
                    Save
                </button>
            </div>
        </div>
    );
}

export default CreateEventPage;