import React, { useContext } from 'react';
import { useUser } from '../../Context';
import { FaFolder, FaGithub } from 'react-icons/fa';

const Repositories = () => {
    const { repos } = useContext(useUser);

    return (
        <div className="flex flex-wrap gap-4">
            {repos.length > 0 ? (
                repos.map(repo => (
                    <div key={repo.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                <FaFolder className="h-10 w-10 mr-2 text-yellow-500" />

                            </div>
                            <h2 className="text-xl font-semibold mb-2">{repo.name}</h2>
                            <p className="text-gray-600 mb-4">{repo.description || 'No description available'}</p>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Details...</a>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No repositories found.</p>
            )}
        </div>
    );
};

export default Repositories;
