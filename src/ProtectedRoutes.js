import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import LoginPage from './Login-page/LoginPage';
import Navbar from '../src/Three-components/Navbar'
import Cookies from 'universal-cookie';


export default function ProtectedRoutes() {
    const data = new Cookies();
    const token = data.get('token')
    console.log(token, "i am data")
//   return token ?(
//     <Outlet/> 
//   ) :(
//      <Navigate to="/"/>
//   );
if (token) {
    return <Outlet />;
} else {
    return <Navigate to="/" />;
}
}
