import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import MapPage from '../pages/MapPage';
import ProfilePage from '../pages/ProfilePage';

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<RegisterPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/getlocation' element={<MapPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
        </Routes>
    );
};

export default MainRoute;