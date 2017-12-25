import axios from "axios";
import Future from "fluture";
import { prop } from "sanctuary";

const { get } = axios;
const callFuture = Future.encaseP(get);

export function coinMarketCapData() {
  return callFuture("https://api.coinmarketcap.com/v1/ticker/?limit=10")
    .promise()
    .then(prop("data"));
}
