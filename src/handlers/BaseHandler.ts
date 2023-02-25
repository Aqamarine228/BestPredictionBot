import { Context, Telegraf } from "telegraf";
import { Update } from "typegram";

export default interface BaseHandler {
	handle(bot: Telegraf<Context<Update>>): void;
}
