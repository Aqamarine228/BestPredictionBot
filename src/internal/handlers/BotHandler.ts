import { Update } from "typegram";
import { Context, Telegraf } from "telegraf";
import BaseHandler from "./BaseHandler";
import RegisteredHandlers from "../../handlers/RegisteredHandlers";

export default class BotHandler implements BaseHandler {
	handle(bot: Telegraf<Context<Update>>): void {
		RegisteredHandlers.forEach((handler: BaseHandler) => {
			handler.handle(bot);
		});
	}
}
