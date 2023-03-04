import { Telegraf, Context } from "telegraf";
import { Update } from "typegram";
import BaseHandler from "./BaseHandler";
import PricePredictionController from "../controllers/PricePredictionController";

export default class PricePredictionHandler implements BaseHandler {
	handle(bot: Telegraf<Context<Update>>): void {
		bot.command("/price", new PricePredictionController().predictPrice);
	}
}
