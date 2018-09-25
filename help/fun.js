const Discord = require('discord.js');
const client = new Discord.Client();
const send = require('quick.hook');
const cooldown = new Set()
exports.run = (bot, message, args) => {
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
        let embed = new Discord.RichEmbed()
        .setColor(message.guild.me.highestRole.color) 
        .setAuthor(message.author.username+`#${message.author.discriminator}`,message.author.displayAvatarURL)
        .setTitle('Dros Bot ™')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=464139412251344897&scope=bot&permissions=8')
        .addField(`funny commands` , "gif, ppc, catgif, cmind, isay, fox, cat, garo, rabbits, dog, how gay, rip, shit, slap, gifslap, hug, punch, kill, anime, poke, cuddle, pat, kiss, tickle, memes, ask, otaku, any, gay, nik")
        .setFooter(`if you want more information say -helpfun`)
        .setTimestamp()
    send(message.channel, embed, {
      name: 'Funny CMD',
      icon: 'https://cdn.discordapp.com/attachments/470319916537348099/493941302824796161/sscoqpy.png'
  }).then(msg => msg.delete(30100));
} 
