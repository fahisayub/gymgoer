import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import MapPage from '../pages/MapPage';
import ProfilePage from '../pages/ProfilePage';
import AuthContext from '../context/AuthContext';

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<RegisterPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/getlocation' element={<AuthContext><MapPage/></AuthContext>} />
            <Route path='/profile' element={<AuthContext><ProfilePage/></AuthContext>} />
        </Routes>
    );
};

export default MainRoute;