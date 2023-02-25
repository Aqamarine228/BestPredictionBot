import { Context } from "telegraf";

export default class HelloController {
	public static hello(ctx: Context): void {
		ctx.reply("Hello User");
	}
}
