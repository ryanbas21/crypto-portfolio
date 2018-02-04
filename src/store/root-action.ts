import { PORTFOLIO_TYPES } from "../features/portfolio/portfolio.reducer";
import { HOME_TYPES } from "../features/home/home.reducer";

type DEFAULT = 'DEFAULT';

type Action = DEFAULT | PORTFOLIO_TYPES | HOME_TYPES;

export interface IRootAction {
	type: Action;
	payload?: any;
}
