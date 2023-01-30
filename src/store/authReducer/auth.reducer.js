import * as types from './auth.types';


let initState={
    isLoading:false,isError:false,token:''
}

export const authReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.AUTH_LOADING:return{...state,isLoading:true,isError:false}
        case types.AUTH_SUCCESS:return{...state,isLoading:false,isError:false,token:payload}
        case types.AUTH_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}