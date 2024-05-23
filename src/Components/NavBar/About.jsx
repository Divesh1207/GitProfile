import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-2xl mx-auto mt-16">
            <h1 className="text-3xl font-bold mb-4">About Page</h1>
            <p className="text-gray-700 mb-4">
                This app displays the user's Github profile information. This was achieved by fetching data containing the details of the user's Github account from the Github API.
            </p>
            <p className="text-gray-700 mb-4">
                The information displayed includes the user's repositories, the user's most recent activities, a snapshot of Github accounts following the user and accounts the user follows.
            </p>
            <p className="text-gray-700 mb-4">
                Only information available publicly through the Github API was used.
            </p>
            <button
                onClick={handleBackHome}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Back Home
            </button>
        </div>
    );
};

export default About;
