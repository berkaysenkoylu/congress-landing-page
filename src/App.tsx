import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Layout from './hoc/Layout/Layout';
import Invitation from './pages/Invitiation/Invitation';
import Manifesto from './pages/Manifesto/Manifesto';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        id: 'root',
        children: [
            { index: true, element: <Home /> },
            { path: '/davet', element: <Invitation /> },
            { path: '/bildiri', element: <Manifesto /> }
        ]
    }
], { basename: '/congress' });

const App = () => {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App