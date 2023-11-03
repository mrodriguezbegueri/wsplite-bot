import { TextChannel } from "discord.js";
import { connectBot, getDiscordClient, isConnected } from "../bot/connection"
require('dotenv').config();

export const sendMessage = async (count: number) => {

    if (isConnected() === false) {
        await connectBot()
    }

    const discordClient = getDiscordClient()

    const guildId = process.env.SERVER_ID ?? '';
    const guild = discordClient.guilds.cache.get(guildId);

    const channelId = process.env.CHANNEL_ID ?? '';
    const channel = guild?.channels.cache.get(channelId);

    if (channel instanceof TextChannel) {
        channel.send(`Hay ${count} conexiones activas`);
    } else {
        console.error('El canal no es un TextChannel.');
    }
}