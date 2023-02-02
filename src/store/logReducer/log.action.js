import * as types from './log.types';
import axios from 'axios';


let token = JSON.parse(sessionStorage.getItem('accesstoken'));

export const getLogsApi = (payload) => async (dispatch) => {
    dispatch({ type: types.GET_LOGS_LOADING });

    await axios.get('https://gymgoer.cyclic.app/entrylogs/get',{
        headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
        dispatch({ type: types.GET_LOGS_SUCCESS, payload: res.data });
        console.log(res.data);
    }).catch((err) => {
        dispatch({ type: types.GET_LOGS_FAILURE })
        console.log(err);

    })

}
export const addLogApi = ({ referal, uid }) => async (dispatch) => {
    dispatch({ type: types.SET_LOG_LOADING });
    let userdata = {};
    await axios.get(`https://gymgoer.cyclic.app/profile/userdata/${referal}`, {
        headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
        userdata = res.data.user;
    })
    let payload = {
        city: userdata.city,
        userUid: userdata._id,
        userName: userdata.userId,
        adminUid: uid
    }
    await axios.post('https://gymgoer.cyclic.app/entrylogs/create', payload,{
        headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
        dispatch({ type: types.SET_LOG_SUCCESS });
        console.log(payload);
        dispatch(getLogsApi());
    }).catch((err) => {
        dispatch({ type: types.SET_LOG_FAILURE })
        console.log(err);

    })

}