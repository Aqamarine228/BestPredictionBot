import { Telegraf, Context } from "telegraf";
import { Update } from "typegram";
import BaseHandler from "../internal/handlers/BaseHandler";
import StartController from "../controllers/StartController";

export default class StartHandler implements BaseHandler {
	// eslint-disable-next-line class-methods-use-this
	handle(bot: Telegraf<Context<Update>>): void {
		bot.start(new StartController().start);
	}
}
