import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';
import Home from '../Components/NavBar/Home';
import About from '../Components/NavBar/About';
import Profile from '../Components/NavBar/Profile';
import Test from '../Components/NavBar/Test';
import Hero from '../Components/Hero/Hero';
import Repositries from '../Components/Hero/Repositries';
import Followers from '../Components/Hero/Followers';
import Foolowing from '../Components/Hero/Following';
import Activity from '../Components/Hero/Activity';




export const routes = createBrowserRouter([

    {

        path: '/',
        element: (
            <>
                <Navbar />
                <Outlet />
            </>
        ),
        children: [
            {
                path: '/',
                element: <Hero />,
            },

            {
                path: '/About',
                element:
                    <About />

            },
            {
                path: '/Profile',
                element:
                    <Profile />

            },
            {
                path: '/Test',
                element:
                    <Test />

            },
            {
                path: '/Repositries',
                element:
                    <Repositries />

            },
            {
                path: '/Followers',
                element:
                    <Followers />

            },
            {
                path: '/Following',
                element:
                    <Foolowing />

            },
            {
                path: '/Activity',
                element:
                    <Activity />

            }



        ],
    },


]);