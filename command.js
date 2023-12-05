import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "create",
    description: "Creates a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTE4MTY3ODc3NTEzMDQwMjgxNg.GYgd4R.cX_E4gmSfTTq-ve3wpf95XRyeXAtR6-g9CtUdI"
);

//calling immediate invoke function
//creating slash command
try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1181678775130402816"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
