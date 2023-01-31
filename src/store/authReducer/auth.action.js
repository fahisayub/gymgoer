import * as types from './auth.types';
import axios from 'axios';


export const registerApi = (payload) => async (dispatch) => {
    dispatch({ type: types.USER_REGISTER_LOADING });

    await axios.post('https://gymgoer.cyclic.app/user/register', payload).then((res) => {
        dispatch({ type: types.USER_REGISTER_SUCCESS, payload: res.data });

        console.log(res.data);

    }).catch((err) => {
        dispatch({ type: types.USER_REGISTER_FAILURE })
        console.log(err);

    })

}
export const loginApi = (payload) => async (dispatch) => {
    dispatch({ type: types.USER_LOGIN_LOADING });

    await axios.post('https://gymgoer.cyclic.app/user/login', payload).then((res) => {
        dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    sessionStorage.setItem('accesstoken', JSON.stringify(res.data.token));
    sessionStorage.setItem('refreshtoken', JSON.stringify(res.data.refreshtoken));
        console.log(res.data);

    }).catch((err) => {
        dispatch({ type: types.USER_LOGIN_FAILURE })
        console.log(err);

    })

}