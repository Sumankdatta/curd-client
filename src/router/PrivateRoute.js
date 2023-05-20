import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return <p>loading .......</p>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to='login'></Navigate>
};

export default PrivateRoute;