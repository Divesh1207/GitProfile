import React from 'react';
import { motion as m } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <m.section
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className="hero-section bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center"
        >
            <div className="hero-text text-center">
                <m.h1
                    initial={{ x: '-250%' }}
                    animate={{ x: '0%' }}
                    transition={{ delay: 0.5, duration: 2, ease: 'easeOut' }}
                    className="text-5xl font-bold mb-4 flex items-center justify-center"
                >
                    <span className="icon-container mr-2 text-6xl">
                        <FaGithub />
                    </span>
                    GitHub Profile App
                </m.h1>
                <p className="mb-6">
                    This app was made to retrieve the details of the user's GitHub account with the help of the GitHub API.
                </p>
                <div className="link">
                    <Link to="/Profile">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 transition duration-300">
                            Get Started
                        </button>
                    </Link>
                    <Link to="/about">
                        <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </m.section>
    );
};

export default Hero;
