const Discord = require("discord.js");
const client = new Discord.Client();
const figlet = require('figlet');
exports.run = (client, message, argss) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');

  let args = message.content.split(" ").slice(1);

  var maxLen = 25 // You can modify the max characters here

  if(args.join(' ').length > maxLen) {
    message.delete(5000);
    return message.reply('Please use less than ' + maxLen + " characters")
      .then(message => {message.delete(5000)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  if(!args[0]) {
    message.delete(5000);
    return message.reply(`Usage: \`ascii <text>\``)
      .then(message => {message.delete(5000)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          log.run(1, commandAscii, err);
          return;
      }
      message.reply(`\n\n\`\`\`
${data} 
\`\`\``);
  });
}
