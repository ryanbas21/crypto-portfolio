import { PORTFOLIO_TYPES } from "../features/portfolio/portfolio.reducer";
import { HOME_TYPES } from "../features/Home/home.reducer";

type DEFAULT = 'DEFAULT';

type Action_TYPES = DEFAULT | PORTFOLIO_TYPES | HOME_TYPES;

export interface IRootAction {
	type: Action_TYPES;
	payload?: any;
}
