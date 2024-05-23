import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    return (
        <div className="flex space-x-4 p-4 bg-gray-800 text-white"> {/* Added basic styling */}
            <Link to="/" className="py-2 hover:underline">
                Home
            </Link>
            <Link to="/Profile" className="py-2 hover:underline">
                Profile
            </Link>
            <Link to="/About" className="py-2 hover:underline">
                About
            </Link>
            <Link to="/Test" className="py-2 hover:underline">
                Test
            </Link>
        </div>
    );
};

export default Navbar;
