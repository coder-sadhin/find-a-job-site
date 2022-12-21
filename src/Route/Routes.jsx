import { createBrowserRouter } from 'react-router-dom';
import Contact from '../Component/Contact/Contact';
import Home from '../Component/Home';
import Login from '../Component/Login/Login';
import Register from '../Component/Login/Register';
import Main from '../Layout/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;