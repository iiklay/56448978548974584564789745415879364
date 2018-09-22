const Discord = require("discord.js");
const client = new Discord.Client();
const math = require('math-expression-evaluator');
exports.run = (client, message, args) => {
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
