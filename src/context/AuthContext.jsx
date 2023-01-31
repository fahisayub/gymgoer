import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AuthContext = ({children}) => {
    const {isAuth}=useSelector(state=>state.authReducer);
    const location=useLocation();
    if(!isAuth){
      return  <Navigate to='/login' state={{from:location.pathname}} replace />
    }else{
        return children
    }
};

export default AuthContext;