import * as types from './auth.types';

let accesstoken = JSON.parse(sessionStorage.getItem('accesstoken'));
let refreshtoken = JSON.parse(sessionStorage.getItem('refreshtoken'));
let initState={
    isLoading:false,isError:false,msg:{},token:{},isAuth:accesstoken?true:false,
}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.USER_REGISTER_LOADING:return{...state,isLoading:true,isError:false}
        case types.USER_REGISTER_SUCCESS:return{...state,isLoading:false,isError:false,msg:payload}
        case types.USER_REGISTER_FAILURE:return{...state,isLoading:false,isError:true}

        case types.USER_LOGIN_LOADING:return{...state,isLoading:true,isError:false}
        case types.USER_LOGIN_SUCCESS:return{...state,isLoading:false,isError:false,token:payload,isAuth:true}
        case types.USER_LOGIN_FAILURE:return{...state,isLoading:false,isError:true,isAuth:false}

        default:return state;
    }
}