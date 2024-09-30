import { config } from "dotenv";
import { Client, Events, GatewayIntentBits } from "discord.js";
import { ReadyHandler } from "./handler/readyHandler.mjs";

// 環境変数のロード
config();

// 起動ログ出力
console.log(
	`${process.env.npm_package_name} ver ${process.env.npm_package_version}/${process.env.LOG_LEVEL}`,
);

// Discordクライアントの初期化と接続
const options = {
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
};
const client = new Client(options);
client.login(process.env.DCB_DISCORD_TOKEN);

const readyHandler = new ReadyHandler();

// Discordサービスのハンドラ設定
client.on(Events.ClientReady, readyHandler.onReady); // Discordサーバに接続時

// 異常終了時の事後処理
process.on("unhandledRejection", (reason, p) => {
	console.log("Unhandled Rejection at:", p, "reason:", reason);
});
process.on("uncaughtException", (err) => {
	console.log(`Caught exception: ${err}`);
	process.exit(1);
});
