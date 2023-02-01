import * as types from './map.types'
import axios from "axios";


export const getUserLocation = () => (dispatch) => {
    dispatch({ type: types.GET_MAP_DATA_LOADING })
    const geolocationAPI = navigator.geolocation;
    if (!geolocationAPI) {
        console.log('Geolocation API is not available in your browser!')
    } else {
        geolocationAPI.getCurrentPosition((position) => {
            const { coords } = position;

            const config = {
                method: 'GET',
                url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
                params: { lat: coords.latitude, lng: coords.longitude },
                headers: {
                    'X-RapidAPI-Key': '8db96e9f6dmsh8398ff707a11d6ap1e64e5jsnac10552f653e',
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