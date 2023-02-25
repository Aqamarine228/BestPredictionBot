"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const axios_1 = __importDefault(require("axios"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
async function getBtcPrice() {
    const config = {
        headers: {
            api_key: "tm-49e90237-9350-4827-8c2c-b0431de35387",
        },
    };
    const { data, status } = await axios_1.default.get("https://api.tokenmetrics.com/v1/price-prediction?tokens=3375&date=2023-02-01&limit=1000", config);
    console.log(status);
    return data;
}
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.command("/btc", async (ctx) => ctx.reply(await getBtcPrice()));
bot.launch();
//# sourceMappingURL=app.js.map