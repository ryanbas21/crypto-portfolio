import { Dispatch as ReduxDispatch, Reducer as ReduxReducer } from 'redux';
import { IRootAction } from "./root-action";

export type Dispatch = ReduxDispatch<IRootAction>;
export type Reducer = ReduxReducer<IRootState>;

declare interface Window {
	__REDUX_DEVTOOLS_EXTENSION__: any;
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare interface NodeModule {
	hot?: { accept: (path: string, callback: () => void) => void };
}

declare interface System {
	import<T = any>(module: string): Promise<T>
}
declare var System: System;

declare module 'history/createBrowserHistory';
