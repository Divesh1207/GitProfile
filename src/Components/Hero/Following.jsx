import React, { useContext } from 'react';
import { useUser } from '../../Context';

const Following = () => {
    const { following } = useContext(useUser);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Following</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {following.length > 0 ? (
                    following.map(user => (
                        <div key={user.id} className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="rounded-full h-24 w-24 mb-4"
                            />
                            <h2 className="text-lg font-semibold">{user.login}</h2>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mt-2"
                            >
                                View Profile
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </div>
    );
};

export default Following;
