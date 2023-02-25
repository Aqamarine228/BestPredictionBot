import { Context, Telegraf } from "telegraf";
import { Update } from "typegram";
import BotHandler from "./handlers/BotHandler";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);
bot.start((ctx: Context) => ctx.reply("Welcome"));
new BotHandler().handle(bot);
bot.launch();
