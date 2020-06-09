const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loading command "${commandName}".`);
    client.commands.set(commandName, props);
  });
});

client.on('ready', () => {
    client.user.setActivity(`=help`, { type: "LISTENING" });
    console.log('Pinger Bot is up and running!');
});

client.on("guildCreate", (guild) => {   
  console.log(`Joined guild ${guild.name}.`)
  client.destroy()
  client.login(config.token);
  client.user.setActivity(`=help`, { type: "LISTENING" });
});

client.on("guildDelete", (guild) => {
  console.log(`Left guild ${guild.name}.`)
    client.destroy()
    client.login(config.token);
    client.user.setActivity(`=help`, { type: "LISTENING" });
});

client.on("guildMemberAdd" || "guildMemberRemove" || "error", () => {
  client.destroy()
  client.login(config.token);
  client.user.setActivity(`=help`, { type: "LISTENING" });
});

client.login(config.token);
