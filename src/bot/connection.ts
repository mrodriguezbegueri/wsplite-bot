import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
    ],
  });

export const connectBot = async (): Promise<{status: boolean, client: Client}> => {
    console.log('process.env.BOT_TOKEN', process.env.BOT_TOKEN)
    await client.login(process.env.BOT_TOKEN);
    return new Promise((resolve) => {
        client.once('ready', () => {    
          resolve({
            status: true,
            client
          });
        });
      });
}

export const isConnected = (): boolean => {
    return client.isReady()
}

export const getDiscordClient = (): Client => {
    return client
}