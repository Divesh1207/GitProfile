import { useState } from 'react'


import Navbar from './Components/NavBar/Navbar'
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routing/Router';

function App() {


  return (
    <>
      <div className='bg-slate-300 min-h-screen w-full'>
        <RouterProvider router={routes} />;
      </div>
    </>
  )
}

export default App
