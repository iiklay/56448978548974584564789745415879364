const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
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
    let embed = new Discord.RichEmbed()
    .setColor(message.guild.me.highestRole.color) 
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setThumbnail(message.guild.iconURL)
    .addField(`Name the guild`,`${message.guild.name}`,true)
    .addField(`Emojis`,` ${message.guild.emojis.size}`,true)
    .addField('Guild Type',`${region}`,true)
    .addField('Vérification',`${lvl}`,true)
    .addField('Roles',`${message.guild.roles.size}`,true)
    .addField('All members',`${message.guild.memberCount}`,true)
    .addField('Members online',`${message.guild.members.filter(m=>m.presence.status == 'online').size}`,true)
    .addField(`Bot size`,`${message.guild.members.filter(m=>m.user.bot).size}`,true)
    .addField('Text Channels',`${message.guild.channels.filter(m => m.type === 'text').size}`,true)
    .addField('Sound Channels',`${message.guild.channels.filter(m => m.type === 'voice').size}`,true)
    .addField('Created guild in',message.guild.createdAt.toLocaleString(),true)
    .addField('ID guild',`${message.guild.id}`,true)
    .addField('Onwer',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,true)
    .addField('Rooms Size',`${message.guild.channels.size}`,true)
    .addField('Last Members',`${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m.user.tag}`).splice(0, 1)}`,true)
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp()
    message.channel.send({embed:embed});
  }
