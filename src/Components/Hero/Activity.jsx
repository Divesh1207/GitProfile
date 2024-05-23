import React, { useContext } from 'react';
import { useUser } from '../../Context';

const Activity = () => {
    const { activity } = useContext(useUser);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Activity</h1>
            <div className="space-y-4">
                {activity.length > 0 ? (
                    activity.map(event => (
                        <div key={event.id} className="bg-white shadow-md rounded-md p-4">
                            <h2 className="text-lg font-semibold mb-2">{event.type}</h2>
                            <p className="text-gray-600">{event.repo.name}</p>
                            <p className="text-gray-600">{new Date(event.created_at).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No recent activity found.</p>
                )}
            </div>
        </div>
    );
};

export default Activity;
