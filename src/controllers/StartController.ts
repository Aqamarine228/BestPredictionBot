import { Context } from "telegraf";
import StartMessage from "../messages/StartMessage";

export default class StartController {
	public async start(ctx: Context): Promise<void> {
		await ctx.replyWithHTML(new StartMessage().parse({ NAME: ctx.from?.first_name || "User" }));
	}
}
