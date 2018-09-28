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
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  message.delete()
let customemoji6 = client.emojis.find(r => r.name === 'arabic');
let customemoji7 = client.emojis.find(r => r.name === 'photos');
let customemoji1 = client.emojis.find(r => r.name === '5449874894189564');
let customemoji2 = client.emojis.find(r => r.name === 'info');
let customemoji3 = client.emojis.find(r => r.name === 'admin');
let customemoji4 = client.emojis.find(r => r.name === 'music');
let customemoji5 = client.emojis.find(r => r.name === 'text');
  let abdo = new Discord.RichEmbed()
  .setColor(message.guild.me.highestRole.color) 
  .setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
  .addField(`-admin ${customemoji3}`,'commands admins',true)
  .addField(`-info ${customemoji2}`,'info commands',true)   
  .addField(`-fun ${customemoji1}`,'fun commands',true)   
  .addField(`-music ${customemoji4}`,'music commands',true)   
  .addField(`-text ${customemoji5}`,'text commands',true)   
  .addField(`-helpar ${customemoji6}`,'للمساعدة باللغة العربية',true)
  .addField(`-Image ${customemoji7}`,'commands photos',true)
  .setFooter(client.user.username,client.user.displayAvatarURL) 
  .setTimestamp()
  message.channel.send(abdo);
  }
