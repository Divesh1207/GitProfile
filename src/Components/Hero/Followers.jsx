import React, { useContext } from 'react';
import { useUser } from '../../Context';

const Followers = () => {
    const { followers } = useContext(useUser);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Followers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {followers.length > 0 ? (
                    followers.map(follower => (
                        <div key={follower.id} className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
                            <img
                                src={follower.avatar_url}
                                alt={follower.login}
                                className="rounded-full h-24 w-24 mb-4"
                            />
                            <h2 className="text-lg font-semibold">{follower.login}</h2>
                            <a
                                href={follower.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mt-2"
                            >
                                View Profile
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No followers found.</p>
                )}
            </div>
        </div>
    );
};

export default Followers;
