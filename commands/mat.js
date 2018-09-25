const Discord = require("discord.js");
const client = new Discord.Client();
const math = require('math-expression-evaluator');
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
  let argsw = message.content.split(" ").slice(1);
  const embed = new  Discord.RichEmbed()
      .setColor("RANDOM");
  if (!argsw[0]) {
      embed.setFooter('Please input an expression.');
      return message.channel.send(embed);
  }
  let result;
  try {
      result = math.eval(argsw.join(' '));
  } catch (e) { 
      result = 'Error: "Invalid Input"';
  }
  embed.setFooter(`\n${argsw.join(' ')} = \n${result}`);
  message.channel.send(embed);
}
