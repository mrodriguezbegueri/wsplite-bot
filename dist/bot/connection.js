"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiscordClient = exports.isConnected = exports.connectBot = void 0;
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
    ],
});
const connectBot = async () => {
    console.log('process.env.BOT_TOKEN', process.env.BOT_TOKEN);
    await client.login(process.env.BOT_TOKEN);
    return new Promise((resolve) => {
        client.once('ready', () => {
            resolve({
                status: true,
                client
            });
        });
    });
};
exports.connectBot = connectBot;
const isConnected = () => {
    return client.isReady();
};
exports.isConnected = isConnected;
const getDiscordClient = () => {
    return client;
};
exports.getDiscordClient = getDiscordClient;
