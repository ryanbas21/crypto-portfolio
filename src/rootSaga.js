import { fork, all } from "redux-saga/effects";
import { watchRetrieveCoins } from "./features/Home/home.saga";

export default function*() {
  yield all([fork(watchRetrieveCoins)]);
}
