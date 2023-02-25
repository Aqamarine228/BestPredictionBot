import { Update } from "typegram";
import { Context, Telegraf } from "telegraf";
import BaseHandler from "./BaseHandler";
import HelloHandler from "./HelloHandler";

export default class BotHandler implements BaseHandler {
	handle(bot: Telegraf<Context<Update>>): void {
		new HelloHandler().handle(bot);
	}
}
