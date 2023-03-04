import { Telegraf, Context } from "telegraf";
import { Update } from "typegram";
import BaseHandler from "../internal/handlers/BaseHandler";
import HelloController from "../controllers/HelloController";

export default class HelloHandler implements BaseHandler {
	// eslint-disable-next-line class-methods-use-this
	handle(bot: Telegraf<Context<Update>>): void {
		bot.command("/hello", new HelloController().hello);
	}
}
