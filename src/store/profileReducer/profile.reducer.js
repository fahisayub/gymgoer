import * as types from './profile.types';


let initState={
    isLoading:false,isError:false,profile:{}
}

export const profileReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.GET_PROFILE_LOADING:return{...state,isLoading:true,isError:false}
        case types.GET_PROFILE_SUCCESS:return{...state,isLoading:false,isError:false,profile:payload}
        case types.GET_PROFILE_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}