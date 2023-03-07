import { Context } from "telegraf";
import CommandParser from "../internal/helpers/CommandParser";
import TokenMetrics from "../api/TokenMetrics";
import PricePredictionMessage from "../messages/PricePredictionMessage";

export default class PricePredictionController {
	public async predictPrice(ctx: Context) {
		const commandArguments = CommandParser.getArguments(ctx.message);

		if (commandArguments.length === 0) {
			await ctx.reply("No symbol were specified.");
			return;
		}

		const api = TokenMetrics.getInstance();

		const response = await api.tokens([commandArguments[0]]);
		if (response.error) {
			await ctx.reply("Token not found.");
			return;
		}

		const tokenId = response.data[0].TOKEN_ID;

		const responsePrediction = await api.pricePrediction([tokenId]);
		if (responsePrediction.error) {
			await ctx.reply("We don't support given token.");
			return;
		}

		const forecast = responsePrediction.data[1].FORECAST;

		await ctx.reply(
			new PricePredictionMessage().parse({
				SYMBOL: commandArguments[0],
				FORECAST: String(forecast),
			})
		);
	}
}
