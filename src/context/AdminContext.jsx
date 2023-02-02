import React from 'react';
import { useSelector } from 'react-redux';

const AdminContext = ({admin,user}) => {
    const {role}=useSelector(state=>state.auth);
    if(role==='admin'){
      return  admin
    }else if(role==='user'){
        return user
    }
};

export default AdminContext;