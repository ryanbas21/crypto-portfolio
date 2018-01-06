import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import HomeReducer from '../features/Home/home.reducer';
import NavbarReducer from '../features/Navbar/navbar.reducer';
import PortfolioReducer from '../features/portfolio/portfolio.reducer';

export default combineReducers({
	Home: HomeReducer,
	router: routerReducer,
	navbar: NavbarReducer,
	portfolio: PortfolioReducer
});
