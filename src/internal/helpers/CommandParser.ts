import { Message, Update } from "typegram";
import New = Update.New;
import NonChannel = Update.NonChannel;
import ChannelChatCreatedMessage = Message.ChannelChatCreatedMessage;

export default class CommandParser {
	public static getArguments(message: Message | New | NonChannel | ChannelChatCreatedMessage | undefined): string[] {
		if (!message || !("text" in message) || !message.text) {
			return [];
		}

		const command = message.text.split(" ");
		command.shift();
		return command;
	}
}
