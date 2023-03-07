import TextMessage from "../internal/messages/TextMessage";

export default class StartMessage extends TextMessage {
	text =
		"👋 Nice to meet you, $NAME$!\n\n" +
		"I'm crypto adviser bot 🤖 and now on I'll try to help you to make more informed " +
		"investment decisions on cryptocurrencies and develop good investments habits.\n\n" +
		"To get list of commands:\n" +
		"<b>Write the command</b> /help (👈 or click).\n";
}
