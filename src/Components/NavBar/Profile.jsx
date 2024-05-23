import React, { useContext, useState } from 'react';
import UserCard from '../Hero/UserCard';
import { useUser } from '../../Context';

const Profile = () => {
    const { user, setUser, userData, setUserData, error, setError, handleSubmit } = useContext(useUser);

    return (
        <div className=" flex flex-col items-center text-center p-4 pt-20">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-5 mb-6 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Enter GitHub Profile"
                    className="p-3 border border-gray-700 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out w-full"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <button type="submit" className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out w-full sm:w-auto">
                    Enter
                </button>
            </form>

            {error && <p className="text-red-500 mb-6">{error}</p>}
            {userData &&
                <UserCard user={userData} />}
        </div>
    );
};

export default Profile;
