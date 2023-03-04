import { Context } from "telegraf";

export default class PricePredictionController {
	public predictPrice(ctx: Context) {
		ctx.reply("Price will be available soon");
	}
}
