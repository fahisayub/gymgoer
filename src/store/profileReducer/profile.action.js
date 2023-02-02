import * as types from './profile.types';
import axios from 'axios';

export const getPorfileApi = (payload) => async (dispatch) => {
    let token = JSON.parse(sessionStorage.getItem('accesstoken'));
    dispatch({ type: types.GET_PROFILE_LOADING });
    //payload is uid
    await axios.get(`https://gymgoer.cyclic.app/profile/`, {
        headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
        dispatch({ type: types.GET_PROFILE_SUCCESS, payload: res.data.user });
        console.log(res.data.user);
    }).catch((err) => {
        dispatch({ type: types.GET_PROFILE_FAILURE })
        console.log(err);

    })

}
export const getUserDetailsApi = (referalCode) => async (dispatch) => {
    let token = JSON.parse(sessionStorage.getItem('accesstoken'));

    dispatch({ type: types.GET_USER_DETAILS_LOADING });
    //payload is referalcode
    await axios.get(`https://gymgoer.cyclic.app/profile/userdata/${referalCode}`, {
        headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
        dispatch({ type: types.GET_USER_DETAILS_SUCCESS, payload: res.data.user });
        console.log(res.data.user);
    }).catch((err) => {
        dispatch({ type: types.GET_USER_DETAILS_FAILURE })
        console.log(err);

    })

}
export const updatePorfileApi = (payload) => async (dispatch) => {
    let token = JSON.parse(sessionStorage.getItem('accesstoken'));

    dispatch({ type: types.UPDATE_PROFILE_LOADING });

    await axios.put(`https://gymgoer.cyclic.app/profile/`, payload, {
        headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
        dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: res.data });
        console.log(res.data);
    }).catch((err) => {
        dispatch({ type: types.UPDATE_PROFILE_FAILURE })
        console.log(err);

    })

}

export const clearProfileApi=()=>async(dispatch)=>{
    dispatch({type:types.GET_PROFILE_SUCCESS,payload:{}});
    dispatch({type:types.GET_USER_DETAILS_LOADING,payload:{}})


}
