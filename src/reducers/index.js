import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import HomeReducer from '../features/Home/home.reducer';

export default combineReducers({
	Home: HomeReducer,
	router: routerReducer
});
