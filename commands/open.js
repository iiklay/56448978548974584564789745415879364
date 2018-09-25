      const Discord = require("discord.js");
      const client = new Discord.Client();
const cooldown = new Set()
      exports.run = (client, message, args) => {
            if(message.author.bot) return;
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
        if (message.channel.type === "dm") return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("You do not have Permission on this server").catch(console.error);
        if(message.mentions.users.size === 0) {
          return message.channel.send("You did not mention any users");
        }
        let unmuteMember = message.guild.member(message.mentions.users.first());
        if(!unmuteMember) {
          return message.channel.send("I'm not sure this user exists...");
        }
        if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) {
          return message.reply("I do not have permission to unmute...").catch(console.error);
        }
        message.channel.overwritePermissions(unmuteMember, { SEND_MESSAGES: true }).then(member => {
            message.channel.send(`**${unmuteMember.user.username}** You can talk now **#${message.channel.name}** 😀`)
      })
      }
