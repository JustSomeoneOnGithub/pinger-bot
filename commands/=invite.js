const Discord = require('discord.js');
const client= new Discord.Client();
const config = require('../config.json');

exports.run = (client, message, args) => {
    var userusername = message.author.username
      var userdiscriminator = message.author.discriminator 

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

      let inviteEmbed = new Discord.MessageEmbed()
      .setTitle('Invite Bot')
      .setColor(executeRandom) 
      .setDescription(`[Click me to invite!](https://discord.com/oauth2/authorize?client_id=709813192343290027&permissions=8&scope=bot)`)
      .setFooter(`Requested by ${userusername}#${userdiscriminator}`)      

      message.channel.send(inviteEmbed);
}