const Discord = require("discord.js");
const client = new Discord.Client();
const cooldown = new Set()
exports.run = (client, message, args) => {
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
  if (message.author.bot) return;
      let i = 1;
      const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
      const embed = new Discord.RichEmbed()
 .setColor(message.guild.me.highestRole.color) 
 .setAuthor(message.author.tag, message.author.avatarURL)
 .addField(`Found **${message.guild.members.filter(m=>m.user.bot).size}** bot in this Server `,`  ${botssize.join('\n')}`)
 .setFooter(client.user.username, client.user.avatarURL)
 .setTimestamp();
 message.channel.send(embed)
 
 }
