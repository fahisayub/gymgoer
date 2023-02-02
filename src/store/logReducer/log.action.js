import * as types from './log.types';
import axios from 'axios';


let token = JSON.parse(sessionStorage.getItem('accesstoken'));

export const getLogsApi = (payload) => async (dispatch) => {
    dispatch({ type: types.GET_LOGS_LOADING });

    await axios.get('https://gymgoer.cyclic.app/entrylogs/get',{
        headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
        if(!res.data.err){

            dispatch({ type: types.GET_LOGS_SUCCESS, payload: res.data });
        }
            console.log(res.data);
    }).catch((err) => {
        dispatch({ type: types.GET_LOGS_FAILURE })
        console.log(err);

    })

}
export const addLogApi = ({referal,uid}) => async (dispatch) => {
    dispatch({ type: types.SET_LOG_LOADING });
    let userdata = {};

    await axios.get(`https://gymgoer.cyclic.app/profile/userdata/${referal}`, {
        headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
        userdata = res.data.user;
        console.log(res.data.user);
    })
    let data = {
        city: userdata.city,
        userUid: userdata._id,
        userId: userdata.userId,
        adminUid:uid
    }
    await axios.post('https://gymgoer.cyclic.app/entrylogs/create', data,{
        headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
        dispatch({ type: types.SET_LOG_SUCCESS });
        console.log(data);
        dispatch(getLogsApi());
    }).catch((err) => {
        dispatch({ type: types.SET_LOG_FAILURE })
        console.log(err);

    })

}
export const clearLogsApi=()=>async(dispatch)=>{
    dispatch({type:types.GET_LOGS_SUCCESS,payload:[]});


}