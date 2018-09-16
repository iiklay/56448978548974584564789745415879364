const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
    if (message.channel.type === "dm") return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("You do not have Permission on this server").catch(console.error);
    if(message.mentions.users.size === 0) {
      return message.channel.send("You did not mention any users");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if(!muteMember) {
      return message.channel.send("I'm not sure this user exists...");
    }
    if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) {
      return message.reply("I do not have permission to mute...").catch(console.error);
    }
    message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: false }).then(member => {
        message.channel.send(`**${muteMember.user.username}** shut up now in room **#${message.channel.name}** 🤐`)
      })
    }
  
