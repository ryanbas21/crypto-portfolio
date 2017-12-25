import { prop, compose, concat, not } from 'sanctuary';

export const IS_SEARCHING = 'IS_SEARCHING';
export function isSearching() {
    return {
        type: IS_SEARCHING
    };
}

export const SEARCH = 'SEARCH'
export function searchCoins(search) {
        return {
            type: SEARCH,
            payload: {
                search
            }
        };
}
export const ERROR = 'ERROR';
export function error(error) {
    return {
        type: ERROR,
        payload: error
    };
}
export const ADD_COINS = 'ADD_COINS';
export function addCoins(coins = []) {
        return {
            type: ADD_COINS,
            payload: coins
        };
}
export const RETRIEVE_COINS = 'RETRIEVE_COINS';
export function retrieveCoins()  {
    return {
        type: RETRIEVE_COINS
    };
}


export const getCoins = prop('coins')
export const searching = prop('isSearching');

export function initialState() {
    return {
        isSearching: false,
        coins: []
    };
}
export default function(state = initialState(), action = {} = { type: ''}) {
    switch(action.type) {
        case ADD_COINS: {
            return {
                ...state,
                coins: concat(action.payload, state.coins)
            };
        }
        case IS_SEARCHING: {
            return {
                ...state,
                isSearching: not(state.isSearching),
            };
        }
        case SEARCH: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
}
