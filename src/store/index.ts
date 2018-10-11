import {compose, applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RootState } from "../reducers/index";
import {logger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureFirebase from '../firebase';
import reducers from '../reducers/index';
import rootSaga from '../rootSaga';
import {IRootState} from "./global.types";

const sagas = createSagaMiddleware();
export const history = createHistory();

const enhancer = compose(
	applyMiddleware(
		sagas,
		routerMiddleware(history),
		process.env.NODE_ENV === 'development' ? logger : f => f
	),
	typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
		? window.devToolsExtension && window.devToolsExtension()
		: f => f
);

export default (initialState: IRootState) => {
	const store = createStore(reducers, initialState, enhancer);
	sagas.run(rootSaga);
	configureFirebase();
	return store;
};
