"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const discord_js_1 = require("discord.js");
const connection_1 = require("../bot/connection");
require('dotenv').config();
const sendMessage = async (count) => {
    if ((0, connection_1.isConnected)() === false) {
        await (0, connection_1.connectBot)();
    }
    const discordClient = (0, connection_1.getDiscordClient)();
    const guildId = process.env.SERVER_ID ?? '';
    const guild = discordClient.guilds.cache.get(guildId);
    const channelId = process.env.CHANNEL_ID ?? '';
    const channel = guild?.channels.cache.get(channelId);
    if (channel instanceof discord_js_1.TextChannel) {
        channel.send(`Hay ${count} conexiones activas`);
    }
    else {
        console.error('El canal no es un TextChannel.');
    }
};
exports.sendMessage = sendMessage;
