import { Context } from "telegraf";
import TokenMetrics from "../api/TokenMetrics";

export default class HelloController {
	public async hello(ctx: Context): Promise<void> {
		const api: TokenMetrics = new TokenMetrics();
		const token: number = await api.getTokenId("BTC");
		await ctx.reply(`${token}`);
	}
}
