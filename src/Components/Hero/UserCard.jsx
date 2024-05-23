import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    return (
        <div className="p-6 mb-8 mx-auto max-w-xl bg-white shadow-md rounded-lg">
            <h1 className="text-4xl font-bold text-black mb-6 text-center">Profile</h1>
            <div className="flex justify-center mb-6">
                <img className="rounded-full w-32" src={user.avatar_url} alt={user.login} />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-center">{user.name}</h2>
            <p className="text-gray-700 text-center">@{user.login}</p>
            <p className="text-gray-600 text-center mb-4">{user.bio}</p>
            <div className="border-t border-gray-300 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center mb-4">
                    <p><strong>Followers:</strong> {user.followers}</p>
                    <p><strong>Following:</strong> {user.following}</p>
                    <p><strong>Twitter Username:</strong> {user.twitter_username}</p>
                    <p><strong>Location:</strong> {user.location}</p>
                    <p><strong>Public Repos:</strong> {user.public_repos}</p>
                </div>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="block text-center text-blue-500 hover:underline mb-4">
                    View Profile on GitHub
                </a>
            </div>
            <div className="flex flex-wrap justify-center space-x-4">
                <Link to="/Repositries" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mb-2">
                    Repositories
                </Link>
                <Link to="/Followers" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mb-2">
                    Followers
                </Link>
                <Link to="/Following" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mb-2">
                    Following
                </Link>
                <Link to="/Activity" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mb-2">
                    Activity
                </Link>
            </div>
        </div>
    );
};

export default UserCard;
