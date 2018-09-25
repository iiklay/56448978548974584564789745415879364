const Discord = require('discord.js');
const client = new Discord.Client();
const send = require('quick.hook');
exports.run = async (bot, message, args) => {
    let customemoji = client.emojis.find(r => r.name === '463763583864406056');
    if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
        let embed = new Discord.RichEmbed()
        .setColor(message.guild.me.highestRole.color) 
        .setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
        .setTitle('Dros Bot ™')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=464139412251344897&scope=bot&permissions=8')
        .addField("Text commands" , "tag1, tag2, tag3, tag4, mo, say, sayembed, te, emoji, mat, date")
        .setFooter(`if you want more information say -helptext`)
        .setTimestamp()
    send(message.channel, embed, {
      name: 'Text CMD',
      icon: 'https://cdn.discordapp.com/attachments/470319916537348099/493941302824796161/sscoqpy.png'
  }).then(msg => msg.delete(30100));
} 
