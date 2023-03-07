import TextMessage from "../internal/messages/TextMessage";

export default class HelpMessage extends TextMessage {
	text =
		"ℹ️ You can ask me things like: What's the price of a Bitcoin?, How much is ETH?...\n\n" +
		"⚙️ Yo can also use this commands:\n\n" +
		"/predict \n" +
		"    <i>Makes forecast about price of given crpytocurrency</i>\n" +
		"/analyse \n" +
		"    <i>Analyses given cryptocurrency</i>";
}
