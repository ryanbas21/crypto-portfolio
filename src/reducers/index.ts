import { combineReducers } from 'redux';
import { IRootAction } from "../store/root-action";
import { routerReducer, RouterState } from 'react-router-redux';
import HomeReducer, { HomeState } from '../features/Home/home.reducer';
import NavbarReducer, { NavbarState } from '../features/Navbar/navbar.reducer';
import PortfolioReducer, { PortfolioState } from '../features/portfolio/portfolio.reducer';

interface StoreEnhancerState {};
export interface RootState extends StoreEnhancerState {
	router: RouterState;
	navbar: NavbarState;
	home: HomeState;
	portfolio: PortfolioState;
}
const rootReducer = combineReducers<RootState, IRootAction>({
	Home: HomeReducer,
	router: routerReducer,
	navbar: NavbarReducer,
	portfolio: PortfolioReducer
});

export default rootReducer;
