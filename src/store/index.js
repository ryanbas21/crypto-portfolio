import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import reducers from '../reducers';
import rootSaga from '../rootSaga';

const sagas = createSagaMiddleware();
export const history = createHistory();

const enhancer = compose(
    applyMiddleware(sagas, routerMiddleware(history)),
    typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
);

export default initialState => {
    let store = createStore(reducers, initialState, enhancer);
    sagas.run(rootSaga);
    return store;
}
