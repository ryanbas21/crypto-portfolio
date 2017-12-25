import test from 'tape';
import { getCoins, searching, homeReducer, addCoins, intialState } from './home.reducer';

const stateFactory = ({
                coins =  [
                       {
                           id: "bitcoin", name: "Bitcoin", symbol: "BTC", rank: "1", price_usd: "13789.7"
                       },
                       {
                           id: "ethereum", name: "Ethereum", symbol: "ETH", rank: "2", price_usd: "710.236"
                       }
               ],
               isSearching = true
           }) => ({ coins, isSearching });
test('Home Reducer and Selectors test', nest => {
    nest.test('GetCoins:: Selector', t => {
        const msg = 'Should select the coins from state';
        const state = stateFactory();
        const expected = state.coins;
        const actual = getCoins(state);

        t.same(actual, expected, msg);
        t.end();
    });
    nest.test('HomeReducer:: InitialState', t => {
        const msg = 'should return the intialState';
        const expected = {
            isSearching: false,
            coins: []
        };
        const actual = initialState();

        t.same(actual, expected, msg);
        t.end();
    });
    nest.test('Searching:: Selector', t => {
        const msg = 'Should grab the searching state';
        const state = stateFactory();
        const expected = state.isSearching;
        const actual = searching(state);

        t.same(actual, expected, msg);
        t.end();
    });
    nest.test('HomeReducer:: default case', t => {
        const msg = 'Should return default when nothing is passed';
        const state =  {
            isSearching: false,
            coins: []
        };
        const actual = homeReducer();
        const expected = state;

        t.same(actual, expected, msg);
        t.end();
    })
    nest.test('HomeReducer:: ADD_COINS case', t => {
        const msg = 'Should add coins to state';
        const state = stateFactory({ coins : [] });
        const coins = [
                       {
                           id: "bitcoin", name: "Bitcoin", symbol: "BTC", rank: "1", price_usd: "13789.7"
                       },
                       {
                           id: "ethereum", name: "Ethereum", symbol: "ETH", rank: "2", price_usd: "710.236"
                       }
               ]
        const action = addCoins(coins);
        const actual = homeReducer(state, action);
        const expected = stateFactory();

        t.test(actual, expected, msg);
        t.end();
    });
    nest.test('HomeReducer:: IS_SEARCHING case', t => {
        const msg = 'Should add coins to state';
        const state = stateFactory({ coins : [] });
        const action = isSearching();
        const expected = !state.isSearching;
        const actual = homeReducer(state, action);

        t.same(actual, expected, msg);
        t.end();
    })
});
