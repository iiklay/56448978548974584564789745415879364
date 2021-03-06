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
  let uptime = client.uptime;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let notCompleted = true;
  while (notCompleted) {
      if (uptime >= 8.64e+7) { 
          days++;
          uptime -= 8.64e+7;
      } else if (uptime >= 3.6e+6) {
          hours++;
          uptime -= 3.6e+6;
      } else if (uptime >= 60000) {
          minutes++;
          uptime -= 60000;
      } else if (uptime >= 1000) {
          seconds++;
          uptime -= 1000;
      }
      if (uptime < 1000)  notCompleted = false;
  }
  let embed = new Discord.RichEmbed()
  .setColor(message.guild.me.highestRole.color) 
  .setDescription(`${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec`)
  message.channel.send(embed);
}
