const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.PREFIX;

client.on("ready", () =>{
    console.log(`${client.user.username} is up and running!`);
    client.user.setActivity("=help", {type: 'LISTENING'});
});

client.on("message", message => {
    let args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix) || message.author.bot) return; // Here is the line that stopped my mental stress.

    var colors = require('./colors.json').colors;
    var executeRandom = colors[Math.floor(Math.random()*colors.length)];
    var userusername = message.author.username;
    var userdiscriminator = message.author.discriminator;

    switch (args[0].toLowerCase()) {
        case "p":
            message.author.send(`${message.author.toString()}`).catch(() => 
            message.reply("Can't send DM to your user! \nEnable your DMs!\n(If you have me blocked me, unblock plz)."));
        break;
        case "=help":
            let helpEmbed = new Discord.MessageEmbed()
            .setTitle('List of commands.') 
            .setColor(executeRandom)  
            .addField("`p`" , `Pings you in DMs/PMs.`)
            .addField("`=help`" , `Initiates help command.`)
            .addField("`=invite`" , `Get the invite link to the bot.`)
            .addField("`=support`" , `Get the invite link to the support server.`)
            .addField("`=stats`", `View the bot's stats.`)
            .setFooter(`Requested by ${userusername}#${userdiscriminator}`)      

            message.channel.send(helpEmbed);
        break;
        case "=invite":
            let inviteEmbed = new Discord.MessageEmbed()
            .setTitle('Invite Bot')
            .setColor(executeRandom) 
            .setDescription(`[Click me to invite!](https://discord.com/oauth2/authorize?client_id=709813192343290027&permissions=8&scope=bot)`)
            .setFooter(`Requested by ${userusername}#${userdiscriminator}`)      
  
            message.channel.send(inviteEmbed);
        break;
        case "=stats":
            let statsEmbed = new Discord.MessageEmbed()
            .setTitle('Pinger Bot Stats') 
            .setDescription("May not be updated.")
            .setColor(executeRandom)  
            .addField("**Bot Dependencies**","\ndiscord.js: `v12.2.0`")
            .addField("**Memory Usage**" , `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`)
            .addField("**Bot Uptime**" , `${Math.round(process.uptime()/60)} minutes!`)
            .addField("**Guilds Size**", `${client.guilds.cache.size} servers!`)
            .addField("**Users Size**", `${client.users.cache.size} users!`)
            .setFooter(`Requested by ${userusername}#${userdiscriminator}`)      
      
            message.channel.send(statsEmbed);
        break;
        case "=support":
            let supportEmbed = new Discord.MessageEmbed()
            .setTitle("Invite to Support Server.")
            .setColor(executeRandom) 
            .setDescription(`[Click me to go to the support server!](https://discord.gg/fWvrhxp)`)
            .setFooter(`Requested by ${userusername}#${userdiscriminator}`)      

            message.channel.send(supportEmbed);
        break;
    }
});

client.on("guildMemberAdd" || "guildMemberRemove" || "error" || "guildCreate" || "guildDelete", (err)=> {
    client.login(config.TOKEN);
    client.user.setActivity("=help", {type: 'LISTENING'});
    console.log(err);
});

client.login(config.TOKEN);