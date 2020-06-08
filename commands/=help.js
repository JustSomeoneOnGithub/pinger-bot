const Discord = require('discord.js');
const client= new Discord.Client();
const config = require('../config.json');

exports.run = (client, message, args) => {
    var colors = [
        "#eb4034", // Red
        "#4287f5", // Light Blue
        "#fcba03", // Orange
        "#f542e9", // Purple
        "#42f58a", // Green
        "#42e9f5", // Cyan
        "#1d1787" // Dark Blue
      ];

      var executeRandom = colors[Math.floor(Math.random()*colors.length)]; 

      var userusername = message.author.username
      var userdiscriminator = message.author.discriminator 

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
}
