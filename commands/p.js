const Discord = require('discord.js');
const client= new Discord.Client();
const config = require('../config.json');

exports.run = (client, message, args) => {
    message.author.send(`${message.author.toString()}`).catch(() => 
        message.reply("Can't send DM to your user! \nEnable your DMs!\n(If you have me blocked me, unblock plz).")
    );
}