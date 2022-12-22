import { createBrowserRouter } from 'react-router-dom';
import AboutUs from '../Component/AboutUs';
import Contact from '../Component/Contact/Contact';
import Error from '../Component/Error';
import FindJob from '../Component/FindJob/FindJob';
import Home from '../Component/Home';
import Login from '../Component/Login/Login';
import Register from '../Component/Login/Register';
import Main from '../Layout/Main';
import PrivateRoute from './PrivetRoutes/PrivetRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
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
                path: '/findJob',
                element: <PrivateRoute><FindJob /></PrivateRoute>
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