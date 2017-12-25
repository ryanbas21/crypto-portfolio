import { prop, map, filter, toLower } from 'sanctuary';

const SEARCH = 'SEARCH';
export function search(searchCriteria) {
    return {
        type: SEARCH,
        payload: searchCriteria
    };
}


export const selectCoins(state) {
    return map(prop('name'), state);
}
function initialState() {
    return [];
}
export default function(state = initialState(), action) {
    switch(action.type) {
        case SEARCH: {
            return filter(coin => toLower(coin).includes(toLower(action.payload)), state)
        }
        default: {
            return state;
        }
    }
}
