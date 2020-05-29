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
      let supportEmbed = new Discord.MessageEmbed()
      .setTitle("Invite to Support Server.")
      .setColor(executeRandom) 
      .setDescription(`[Click me to go to the support server!](https://discord.gg/fWvrhxp)`)
      .setFooter(`Requested by ${userusername}#${userdiscriminator}`)      

      message.channel.send(supportEmbed).catch(() => (client.login(config.TOKEN)));
}