import * as types from './log.types';
import axios from 'axios';

export const getLogsApi=(payload)=>async(dispatch)=>{
dispatch({type:types.GET_LOGS_LOADING});

await axios.get('https://gymgoer.cyclic.app/entrylogs/getlogs').then((res)=>{
    dispatch({type:types.GET_LOGS_SUCCESS,payload:res.data});
console.log(payload);
}).catch((err)=>{
    dispatch({type:types.GET_LOGS_FAILURE})
    console.log(err);

})

}
export const addLogApi=(payload)=>async(dispatch)=>{
dispatch({type:types.SET_LOG_LOADING});

await axios.post('https://gymgoer.cyclic.app/entrylogs/addentry',payload).then((res)=>{
    dispatch({type:types.SET_LOG_SUCCESS,payload:res.data});
console.log(payload);
}).catch((err)=>{
    dispatch({type:types.SET_LOG_FAILURE})
    console.log(err);

})

}