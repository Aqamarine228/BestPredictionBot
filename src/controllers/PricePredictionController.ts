import { Context } from "telegraf";
import CommandParser from "../internal/helpers/CommandParser";
import TokenMetrics from "../api/TokenMetrics";
import PricePredictionMessage from "../messages/PricePredictionMessage";

export default class PricePredictionController {
	public async predictPrice(ctx: Context) {
		const api = TokenMetrics.getInstance();
		const commandArguments = CommandParser.getArguments(ctx.message);

		if (commandArguments.length === 0) {
			await ctx.reply("No symbol were specified");
			return;
		}

		const tokenId = await api.getTokenId(commandArguments[0]);
		const prediction = await api.getPricePrediction(tokenId);

		await ctx.reply(
			new PricePredictionMessage().parse({
				SYMBOL: commandArguments[0],
				FORECAST: String(prediction.FORECAST),
			})
		);
	}
}
