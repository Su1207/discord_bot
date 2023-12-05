import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
}); //gatewayIntentBits provides access to the intent

//call this fun whenever a message is created.
client.on("messageCreate", (message) => {
  if (message.author.bot) return; //bot shouldn't respond to its own message
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating short ID for " + url,
    });
  }
  message.reply({
    content: "Hi from Bot",
  });
});

//when slash command is passed in discord chat
client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong!");
});

client.login(
  "MTE4MTY3ODc3NTEzMDQwMjgxNg.GYgd4R.cX_E4gmSfTTq-ve3wpf95XRyeXAtR6-g9CtUdI"
);
