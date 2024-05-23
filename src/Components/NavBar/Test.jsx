import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Test = () => {
    const handleTest = () => {
        toast.success("Everything is fine");
    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen bg-gray-100">
            <p className='text-xl font-serif'>This is working Fine</p>
            <button
                onClick={handleTest}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Click Me
            </button>
            <ToastContainer />
        </div>
    )
}

export default Test;
