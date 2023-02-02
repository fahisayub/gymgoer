import * as types from './profile.types';


let initState={
    isLoading:false,isError:false,profile:{},userdetails:{}
}

export const profileReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.GET_PROFILE_LOADING:return{...state,isLoading:true,isError:false}
        case types.GET_PROFILE_SUCCESS:return{...state,isLoading:false,isError:false,profile:payload}
        case types.GET_PROFILE_FAILURE:return{...state,isLoading:false,isError:true}

        case types.UPDATE_PROFILE_LOADING:return{...state,isLoading:true,isError:false}
        case types.UPDATE_PROFILE_SUCCESS:return{...state,isLoading:false,isError:false}
        case types.UPDATE_PROFILE_FAILURE:return{...state,isLoading:false,isError:true}

        case types.GET_USER_DETAILS_LOADING:return{...state,isLoading:true,isError:false}
        case types.GET_USER_DETAILS_SUCCESS:return{...state,isLoading:false,isError:false,userdetails:payload}
        case types.GET_USER_DETAILS_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}