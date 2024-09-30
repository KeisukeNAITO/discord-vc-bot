import type { Client } from "discord.js";

export class ReadyHandler {
	public async onReady(client: Client): Promise<void> {
		if (client.user?.id) {
			console.log(`${client.user.tag} (ID:${client.user.id}) has logged in.`);
		} else {
			console.log("Can not get an ID for BOT.");
			process.exit(1);
		}
	}
}
