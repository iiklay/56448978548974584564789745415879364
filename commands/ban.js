const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
        if(!message.channel.guild) return message.reply('this command is for guilds only!');
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply('You do not have Permission `BAN_MEMBERS`⚠');
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('**Bot** does not have Permission `BAN_MEMBERS`');
        let user = message.mentions.users.first();
        let user1 = message.mentions.users.first();
        let reason = message.content.split(' ').slice(2).join(" ");  
        if (!reason) {
          reason = 'No reason provided';
        }
        if (message.mentions.users.size < 1) return message.reply('<@Username> !!').then(message => message.delete(35000));

        var userM = message.guild.member(message.mentions.users.first());
        if(userM.id === message.author.id) return message.reply('i can not give a ban for you').then(m => m.delete(5000));
        if(userM.id === message.guild.owner.id) return message.reply("xD really you want give ban to owner");
        if(message.guild.member(userM.user).highestRole.position >= message.guild.member(message.member).highestRole.position) 
        return message.reply(`You cant give **${userM.user.username}** ban beacuse him role highest then your role!`);
        if(message.guild.member(userM.user).highestRole.position >= message.guild.member(client.user).highestRole.position) 
        return message.reply(`I cant give **${userM.user.username}** ban beacuse him role highest then my role!`);

        if (!message.guild.member(user)
        .kickable) return message.reply('**Bot** does not have Permission').then(message => message.delete(35000));
        message.guild.member(user).ban();
        message.channel.send(`<@${user.id}> banned from ${message.guild.name} ✈`);
        message.channel.send();
        
        if(!message.guild.channels.find('name', 'logs')) return message.channel.send('make channel named **logs** To receive logs').then(msg => msg.delete(5000));
      
        const wunmuteembed = new Discord.RichEmbed()
        .setColor(message.guild.me.highestRole.color) 
        .setAuthor(`member banned!`, user.displayAvatarURL)
        .setThumbnail(user1.displayAvatarURL)
        .addField("User",`${user1.tag}`,true)
        .addField("Banned by",`${message.author.tag}`,true)
        .addField("Reason",`${reason}`,true)
        .setTimestamp()
        message.guild.channels.find('name', 'logs').sendEmbed(wunmuteembed)
      
        var unmuteembeddm = new Discord.RichEmbed()
        .setDescription(` you has been banned from ${message.guild.name} **${reason}**`)
        .setColor("#ff0000")
          user.send(unmuteembeddm);
      }
