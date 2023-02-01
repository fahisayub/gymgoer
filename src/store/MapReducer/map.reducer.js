import * as types from './map.types';


let initState={
    isLoading:false,isError:false,mapdata:{}
}

export const mapReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.GET_MAP_DATA_LOADING:return{...state,isLoading:true,isError:false}
        case types.GET_MAP_DATA_SUCCESS:return{...state,isLoading:false,isError:false,mapdata:payload}
        case types.GET_MAP_DATA_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}