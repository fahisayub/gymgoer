import * as types from './map.types'
import axios from "axios";


export const getUserLocation = () => (dispatch) => {
    dispatch({ type: types.GET_MAP_DATA_LOADING })
    const geolocationAPI = navigator.geolocation;
    if (!geolocationAPI) {
        console.log('Geolocation API is not available in your browser!')
    } else {
        //796fde8665mshe91b94d1a86795dp1397b4jsnd82914966c54
        geolocationAPI.getCurrentPosition((position) => {
            const { coords } = position;
            const config = {
                method: 'GET',
                url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
                params: { lat: coords.latitude, lng: coords.longitude },
                headers: {
                    'X-RapidAPI-Key': '796fde8665mshe91b94d1a86795dp1397b4jsnd82914966c54',
                    //TODO: update X-RapidAPI-Key with this :796fde8665mshe91b94d1a86795dp1397b4jsnd82914966c54 in production
                    'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
                }
            };

            axios.request(config).then((res) => {
                console.log(res.data.Results[0]);
                dispatch({ type: types.GET_MAP_DATA_SUCCESS, payload: res.data.Results[0] });
            }).catch((e) => {
                console.error(e);
                dispatch({ type: types.GET_MAP_DATA_FAILURE });
            });
        }, (e) => {
            console.log('Something went wrong getting your position!')
            dispatch({ type: types.GET_MAP_DATA_FAILURE });
        })
    }
}
export const clearMapApi=()=>async(dispatch)=>{
    dispatch({type:types.GET_MAP_DATA_SUCCESS,payload:{}});


}