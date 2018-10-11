import { prop, map, filter, toLower, compose } from 'sanctuary';
import { IRootAction } from '../../store/root-action';

export type SEARCH_TYPE = 'SEARCH';
const SEARCH: SEARCH_TYPE = 'SEARCH';
export function search(searchCriteria: string): IRootAction {
	return {
		type: SEARCH,
		payload: searchCriteria
	};
}

export const selectCoins = compose(map(prop('name')), prop('coins'));

function initialState(): [] {
	return [];
}
export default function(state = initialState(), action: IRootAction): string[]  {
	switch (action.type) {
		case SEARCH: {
			  return filter((coin: string) => toLower(coin).includes(toLower(action.payload)), state);
		}
		default: {
			return state;
		}
	}
}
