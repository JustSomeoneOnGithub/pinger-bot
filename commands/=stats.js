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

      let statsEmbed = new Discord.MessageEmbed()
      .setTitle('Pinger Bot Stats') 
      .setDescription("May not be updated.")
      .setColor(executeRandom)  
      .addField("**Bot Dependencies**","\ndiscord.js: `v12.2.0`"+"\nenmap: `v5.2.4`"+"\nfs: `v0.0.1`​")
      .addField("**Memory Usage**" , `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`)
      .addField("**Bot Uptime**" , `${Math.round(process.uptime()/60)} minutes!`)
      .addField("**Guilds Size**", `${client.guilds.cache.size} servers!`)
      .addField("**Users Size**", `${client.users.cache.size} users!`)
      .setFooter(`Requested by ${userusername}#${userdiscriminator}`)      

      message.channel.send(statsEmbed);
}