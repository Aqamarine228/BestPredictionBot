import PricePredictionHandler from "./PricePredictionHandler";
import HelloHandler from "./HelloHandler";
import BaseHandler from "./BaseHandler";

const handlers: BaseHandler[] = [new PricePredictionHandler(), new HelloHandler()];
export default handlers;