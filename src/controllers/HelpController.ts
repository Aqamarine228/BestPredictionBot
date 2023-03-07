import { Context } from "telegraf";
import HelpMessage from "../messages/HelpMessage";

export default class HelpController {
	public async help(ctx: Context): Promise<void> {
		await ctx.replyWithHTML(new HelpMessage().parse());
	}
}
