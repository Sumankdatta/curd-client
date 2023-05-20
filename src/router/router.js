import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import CheckOut from "../Component/CheckOut";
import Orders from "../Component/Orders";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/order',
                element: <Orders></Orders>,

            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '*',
                element: <h2 className="text-5xl text-red-600 text-center">Oi beyadob akhane ascho knn</h2>
            },

        ]
    }
])