import PricePredictionHandler from "./PricePredictionHandler";
import StartHandler from "./StartHandler";
import BaseHandler from "../internal/handlers/BaseHandler";
import HelpHandler from "./HelpHandler";

const handlers: BaseHandler[] = [new PricePredictionHandler(), new StartHandler(), new HelpHandler()];
export default handlers;
