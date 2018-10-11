import { combineReducers } from 'redux';
import { IRootAction } from "../store/root-action";
import { routerReducer, RouterState } from 'react-router-redux';
import HomeReducer, { HomeState } from '../features/Home/home.reducer';
import NavbarReducer, { Route, NavbarState } from '../features/Navbar/navbar.reducer';
import PortfolioReducer, { PortfolioState } from '../features/portfolio/portfolio.reducer';

interface StoreEnhancerState {};
export interface RootState extends StoreEnhancerState {
	router: RouterState;
	navbar: string[];
	home: HomeState;
	portfolio: PortfolioState;
}
const rootReducer = combineReducers<RootState, IRootAction>({
	home: HomeReducer,
	router: routerReducer,
	navbar: NavbarReducer,
	portfolio: PortfolioReducer
});

export default rootReducer;
