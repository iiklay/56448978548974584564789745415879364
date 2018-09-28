const Discord = require('discord.js');
const client = new Discord.Client();
const cooldown = new Set()
exports.run = (client, message, argds) => {
if(message.author.bot) return;
let customemoji = client.emojis.find(r => r.name === '463763583864406056');
if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
          let embed = new Discord.RichEmbed()
          .setThumbnail(client.user.avatarURL)
          .addField('Bot Information',`Dros Bot ™ bot is a music bot packed with dank memes to rescue your soul from the depths of the underworld.`)
          .addField('Text Channels',` ${message.guild.channels.filter(m => m.type === 'text').size}`,true)
          .addField('Voice Channels',` ${message.guild.channels.filter(m => m.type === 'voice').size} `,true)
          .addField('Guilds' ,`${client.guilds.size}` , true)
          .addField('Voice Connections' ,`${client.voiceConnections.size}` , true)
          .addField('Users' ,`${client.users.size}` , true)
          message.channel.send({embed:embed});
        }