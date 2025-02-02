import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router";
import App from './App';
import Login from './Resources/Components/Login-Signup/login';
import Signup from './Resources/Components/Login-Signup/signup';
import Profile from './Resources/Components/Profile/profile';
import EditProfile from './Resources/Components/Profile/editProfile';

export default function AppRouter() {
  return (
    <BrowserRouter>
         <Routes>
            <Route element={<App />}>
                <Route path='/' element={<Signup />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/editProfile' element={<EditProfile />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
