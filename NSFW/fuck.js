const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
    console.log(message.channel.nsfw); // false
    var pus = new Discord.RichEmbed()
    .addField('NSFW not allowed here','Use NSFW commands in a NSFW marked channel (look in channel settings, dummy)')
    .setImage('https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif')
    if (message.channel.nsfw === false)    return message.channel.send(pus);
    let user = message.mentions.users.first();
if(!user) return message.channel.send('Select someone you want to fuck ');
if (!user) {
/**
* The command was ran with invalid parameters.
* @fires commandUsage
*/
return message.emit('commandUsage', message, this.help);
}
  let fuck = [
    "https://cdn.boob.bot/Gifs/15C3.gif",
    "https://cdn.boob.bot/Gifs/1934.gif",
    "https://cdn.boob.bot/Gifs/197D.gif",
    "https://cdn.boob.bot/Gifs/193C.gif",
    "https://cdn.boob.bot/Gifs/18E6.gif",
    "https://cdn.boob.bot/Gifs/1730.gif",
    "https://cdn.boob.bot/Gifs/16EF.gif",
    "https://cdn.boob.bot/Gifs/18CA.gif",
    "https://cdn.boob.bot/Gifs/1916.gif",
    "https://cdn.boob.bot/Gifs/179B.gif",
    "https://cdn.boob.bot/Gifs/1626.gif",
    "https://cdn.boob.bot/Gifs/188A.gif",
    "https://cdn.boob.bot/Gifs/17EA.gif",
    "https://cdn.boob.bot/Gifs/18F9.gif",
    "https://cdn.boob.bot/Gifs/19CB.gif",
    "https://cdn.boob.bot/Gifs/1739.gif",
    "https://cdn.boob.bot/Gifs/162E.gif",
    "https://cdn.boob.bot/Gifs/15F6.gif",
    "https://cdn.boob.bot/Gifs/17BE.gif",
    "https://cdn.boob.bot/Gifs/1896.gif",
    "https://cdn.boob.bot/Gifs/1820.gif",
    "https://cdn.boob.bot/Gifs/15C1.gif",
    "https://cdn.boob.bot/Gifs/19AC.gif",
    "https://cdn.boob.bot/Gifs/19CC.gif",
    "https://cdn.boob.bot/Gifs/1740.gif",
    "https://cdn.boob.bot/Gifs/19C4.gif",
    "https://cdn.boob.bot/Gifs/1763.gif",
    "https://cdn.boob.bot/Gifs/175F.gif",
    "https://cdn.boob.bot/Gifs/16E4.gif",
    "https://cdn.boob.bot/Gifs/1894.gif",
    "https://cdn.boob.bot/Gifs/18CE.gif",
    "https://cdn.boob.bot/Gifs/179B.gif",
    "https://cdn.boob.bot/Gifs/1795.gif",
    "https://cdn.boob.bot/Gifs/1982.gif",
    "https://cdn.boob.bot/Gifs/1965.gif",
    "https://cdn.boob.bot/Gifs/1623.gif",
    "https://cdn.boob.bot/Gifs/19A7.gif"
  ];
  
  message.channel.send({
  embed: {
  description: `${message.author.username} 😏 been fucked  ${user.username}🙈`,
  image: {
    url: fuck[Math.floor(Math.random() * fuck.length)]
  }
  }
  }).catch(e => {
  client.log.error(e);
  })
}  