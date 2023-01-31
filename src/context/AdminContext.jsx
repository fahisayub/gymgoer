import React from 'react';
import { useSelector } from 'react-redux';

const AdminContext = ({admin,user}) => {
    const {role}=useSelector(state=>state.auth);
    if(role==='admin'){
      return  admin
    }else{
        return user
    }
};

export default AdminContext;