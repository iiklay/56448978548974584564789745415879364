const Discord = require('discord.js');
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
    message.channel.startTyping();
    let customemoji = client.emojis.find(r => r.name === '463763583864406056');
    if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
    let region = message.guild.region;     
    if (region === 'eu-central') {
      region = `Central Europe`;
    }
    else if (region === 'hongkong') {
      region = `Hong Kong`;
    }
    else if (region === 'brazil') {
      region = `Brazil`;
    }
    else if (region === 'japan') {
      region = `Japan`;
    }
    else if (region === 'russia') {
      region = `Russia`;
    }
    else if (region === 'singapore') {
      region = `Singapore`;
    }
    else if (region === 'southafrica') {
      region = `South Africa`;
    }
    else if (region === 'sydney') {
      region = `Australia`;
    }
    else if (region === 'us-central') {
      region = `Central United States`;
    }
    else if (region === 'us-east') {
      region = `Eastern United States`;
    }
    else if (region === 'us-south') {
      region = `Southern United States`;
    }
    else if (region === 'us-west') {
      region = `Western United States`;
    }
    else if (region === 'eu-west') {
      region = `Western Europe`;
    }
    let lvl = message.guild.verificationLevel;   
     if(lvl === 0) {
        lvl = 'Very Easy';
      }else
     if(lvl === 1) {
        lvl = 'Easy';
      }else
     if(lvl === 2) {
        lvl = 'Medium';
      }else
     if(lvl === 3) {
        lvl = 'Hard';
      }else
     if(lvl === 4) {
        lvl = 'Very Hard';
      }
    message.channel.send(`\`\`\`asciidoc
[Info About : ${message.guild.name}]
= Guild region           :: ${region}
= Emojis                 :: ${message.guild.emojis.size}
= Vérification           :: ${lvl}
= Roles                  :: ${message.guild.roles.size}
= All members            :: ${message.guild.memberCount}
= Members online         :: ${message.guild.members.filter(m=>m.presence.status == 'online').size}
= Bot size               :: ${message.guild.members.filter(m=>m.user.bot).size}
= Text Channels          :: ${message.guild.channels.filter(m => m.type === 'text').size}
= Sound Channels         :: ${message.guild.channels.filter(m => m.type === 'voice').size}
= Created guild at       :: ${message.guild.createdAt.toLocaleString()}
= ID guild               :: ${message.guild.id}
= Onwer                  :: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}
= Rooms Size             :: ${message.guild.channels.size}
= Last Members           :: ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m.user.tag}`).splice(0, 1)}

= Requested by           :: ${message.author.username}\`\`\``).then(()=> { message.channel.stopTyping(); });
}