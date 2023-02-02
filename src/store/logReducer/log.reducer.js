import * as types from './log.types';


let initState={
    isLoading:false,isError:false,entrylogs:[]
}

export const logReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.GET_LOGS_LOADING:return{...state,isLoading:true,isError:false}
        case types.GET_LOGS_SUCCESS:return{...state,isLoading:false,isError:false,entrylogs:payload}
        case types.GET_LOGS_FAILURE:return{...state,isLoading:false,isError:true}
        
        case types.SET_LOG_LOADING:return{...state,isLoading:true,isError:false}
        case types.SET_LOG_SUCCESS:return{...state,isLoading:false,isError:false,isAuth:true}
        case types.SET_LOG_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}