import { prop, compose, concat } from 'sanctuary';

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
    console.log(coins)
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


export const getCoins = compose(
    prop('coins'),
    prop('Home')
);
export const searching = compose(prop('isSearching'), prop('Home'));

export function initialState() {
    return {
        isSearching: false,
        coins: []
    };
}
export default function(state = initialState(), action) {
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
                isSearching: !state.isSearching,
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
