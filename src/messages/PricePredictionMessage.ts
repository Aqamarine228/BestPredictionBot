import TextMessage from "../internal/messages/TextMessage";

export default class PricePredictionMessage extends TextMessage {
	text = "We predict $SYMBOL$ price to be $FORECAST$$";
}
