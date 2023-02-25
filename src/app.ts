import { Context, Telegraf } from "telegraf";
import { Update } from "typegram";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

async function getBtcPrice(): Promise<string> {
	const config = {
		headers: {
			api_key: "tm-49e90237-9350-4827-8c2c-b0431de35387",
		},
	};
	const { data, status } = await axios.get(
		"https://api.tokenmetrics.com/v1/price-prediction?tokens=3375&date=2023-02-01&limit=1000",
		config
	);

	console.log(status);

	return data;
}

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);
bot.start((ctx: Context) => ctx.reply("Welcome"));
bot.command("/btc", async (ctx: Context) => ctx.reply(await getBtcPrice()));
bot.launch();
