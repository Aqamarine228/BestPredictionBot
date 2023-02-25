import { Update } from "typegram";
import { Context, Telegraf } from "telegraf";
import BaseHandler from "./BaseHandler";
import HelloHandler from "./HelloHandler";

export default class BotHandler implements BaseHandler {
	// eslint-disable-next-line class-methods-use-this
	handle(bot: Telegraf<Context<Update>>): Telegraf<Context<Update>> {
		new HelloHandler().handle(bot);
		return bot;
	}
}
