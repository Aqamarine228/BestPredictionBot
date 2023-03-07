import { Telegraf, Context } from "telegraf";
import { Update } from "typegram";
import BaseHandler from "../internal/handlers/BaseHandler";
import HelpController from "../controllers/HelpController";

export default class HelpHandler implements BaseHandler {
	handle(bot: Telegraf<Context<Update>>): void {
		bot.command("help", new HelpController().help);
	}
}
