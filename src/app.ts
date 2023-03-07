import { Context, Telegraf } from "telegraf";
import { Update } from "typegram";
import BotHandler from "./internal/handlers/BotHandler";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);
new BotHandler().handle(bot);

if ((process.env.ENVIRONMENT || "dev") === "production") {
	bot.launch({
		webhook: {
			hookPath: "/",
			domain: process.env.BOT_URL || "",
			port: Number(process.env.BOT_PORT) || 3000,
		},
	});
} else {
	bot.launch();
}
