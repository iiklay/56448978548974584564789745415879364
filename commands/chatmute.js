const Discord = require("discord.js");
const client = new Discord.Client();
const cooldown = new Set()
      exports.run = (client, message, args) => {
              if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
        message.delete(11000);
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
        if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply('You do not have Permission `MANAGE_ROLES` ⚠').then(msg => {
          setTimeout(() => {
            msg.edit('Take Permission `MANAGE_ROLES` and try again 👌');
         },1500).then(msg => msg.delete(10000));
        });
        if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('**Bot** Does not have Permission `MANAGE_ROLES`').then(msg => {
          setTimeout(() => {
            msg.edit('Give bot Permission `MANAGE_ROLES` and try again 👌');
         },1500).then(msg => msg.delete(10000));
        });
        message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
        }).then(() => {
        message.channel.send("Chat closed 🔓")
        .then(msg => {
          setTimeout(() => {
            msg.edit(`Chat closed 🔐`);
         },500);
        });
        });
        }
