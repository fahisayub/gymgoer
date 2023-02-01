import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer/auth.reducer";
import { profileReducer } from "./profileReducer/profile.reducer";
import { logReducer } from "./logReducer/log.reducer";
import { mapReducer } from "./MapReducer/map.reducer";



const rootReducer = combineReducers({
   authReducer: authReducer,
   profileReducer: profileReducer,
   logReducer: logReducer,
   mapReducer: mapReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));