import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems =
        <>
            <li className='font-semibold'><Link>Home</Link></li>
            <li className="font-semibold"><Link to='signup'>Sign Up</Link></li>
            <li className="font-semibold"><Link to='login'>Login</Link></li>
            <li className="font-semibold"><Link ><button onClick={handleLogout}>Log out</button></Link></li>
            <li className="font-semibold"><Link to='order'>Orders</Link></li>
            {user?.displayName}
        </>

    return (
        <div>
            <div className="navbar h-20 mb-12 pt-12 bg-base-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};
// return (
//     <div>
//        
//     </div>
// );


export default Header;