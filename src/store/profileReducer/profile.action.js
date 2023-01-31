import * as types from './profile.types';
import axios from 'axios';

export const getPorfileApi=(payload)=>async(dispatch)=>{
dispatch({type:types.GET_PROFILE_LOADING});

await axios.action('https://gymgoer.cyclic.app/user/profile',payload).then((res)=>{
    dispatch({type:types.GET_PROFILE_SUCCESS,payload:res.data});
console.log(payload);
}).catch((err)=>{
    dispatch({type:types.GET_PROFILE_FAILURE})
    console.log(err);

})

}