import { combineReducers } from "redux";
import HomeReducer from "../features/Home/home.reducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
	Home: HomeReducer,
	router: routerReducer
});
