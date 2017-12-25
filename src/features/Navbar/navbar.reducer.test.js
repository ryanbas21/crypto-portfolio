import test from 'tape';
import NavbarReducer, { search } from './navbar.reducer';

const stateFactory = ({
                    coins =  [
                     {
                            id: "bitcoin", name: "Bitcoin", symbol: "BTC", rank: "1", price_usd: "13789.7"
                     },
                     {
                        id: "ethereum", name: "Ethereum", symbol: "ETH", rank: "2", price_usd: "710.236"
                     }
                    ]
            }) => ({ coins });

test('Navbar:: Reducer and Selectors', nest => {
        nest.test('Navbar:: search case', t => {
                const msg = 'Should filter coins based on inclusion of a string';
                const state = ['bitcoin', 'litecoin', 'cardano', 'bitcoin cash'];
                const expected = ['Bitcoin', 'Bitcoin Cash'];
                const action = search('Bit');
                const actual = NavbarReducer(state, action);

                t.same(actual, expected, msg);
                t.end();
        });
        nest.test('Navbar:: selector for coins list', t => {
            const msg = 'should slice all the coins names';
            const state = stateFactory();
            const expected = ['bitcoin', 'ethereum'];
            const actual = selectCoins(state);

            t.same(actual, expected, msg);
            t.end();
        });
});
