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
        if(!message.channel.guild) return message.reply('this command is for guilds only!');
        let customemoji = client.emojis.find(r => r.name === 'online');
        let customemoji1 = client.emojis.find(r => r.name === 'idle');
        let customemoji2 = client.emojis.find(r => r.name === 'dnd');
        let customemoji3 = client.emojis.find(r => r.name === 'invisible');
        var mentionned = message.mentions.users.first();
        var x5bzm;
        if(mentionned){
        var x5bzm = mentionned;
        } else {
        var x5bzm = message.author;
        }
        var abdo = message.mentions.members.first();
        var aaa;
        if(abdo){
        var aaa = abdo;
        } else {
        var aaa = message.member;
        }
        if (x5bzm.presence.game !== null) {
          y = `${x5bzm.presence.game.name}`;
          } else {
          y = "No Game";
          }
          if (x5bzm.bot) {
            var m = 'Bot';
            }else {
            var m = 'Member';
            }
            let status = x5bzm.presence.status;     
            if (status === 'online') {
              status = `Online ${customemoji}`;
            }
            else if (status === 'idle') {
              status = `Idle ${customemoji1}`;
            }
            else if (status === 'dnd') {
              status = `Do Not Disturb ${customemoji2}`;
            }
            else if (status === 'offline') {
              status = `Offline ${customemoji3}`;
            }
        var rolesname = message.guild.members.get(aaa.id).roles.map(role => `${role.name} .  `).slice(1).join(' ')
        if (!rolesname) {
          rolesname = 'No role';
        }
        var rolesize = message.guild.members.get(aaa.id).roles.size -1

        let nick = aaa.nickname;
        if (!nick) {
          nick = 'No nick';
        }

          let embed = new Discord.RichEmbed()
          .setColor(message.guild.me.highestRole.color) 
          .setThumbnail(x5bzm.displayAvatarURL)
          .addField('Name',`**${x5bzm.username}**#${x5bzm.discriminator}`, true)
          .addField('ID',`${x5bzm.id}`,true)
          .addField("Joined at", message.member.joinedAt.toLocaleString(), true)    
          .addField('Created at', message.author.createdAt.toLocaleString(), true)
          .addField('Playing',''+y+'' , true)
          .addField('Account', `IS ${m}`, true)
          .addField('Status', `${status}`, true)
          .addField('Nick', `${nick}`, true)
          .addField(`Roles **[${rolesize}]**`,`${rolesname}`)
           message.channel.send(embed);  
        }