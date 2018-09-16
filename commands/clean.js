const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, argsc) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let args= message.content.split(" ").slice(0)


  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.delete(50000);
    return message.reply("You need the `MANAGE_MESSAGES` permission for this.")
      .then(message => {message.delete(5000)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  if (!args[1]) {
    message.delete(50000);
    return message.reply("Please specify how many messages to delete. (1-100)")
      .then(message => {message.delete(5000)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  if (args[1] < 2 || args[1] > 100) {
    message.delete(5000);
    return message.reply("You must specify between 1 and 100 messages to delete.")
      .then(message => {message.delete(5000)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  var toDeleteInit = args[1];
  var offset = 1;
  var toDelete = Number(toDeleteInit) + Number(offset);
  message.channel.bulkDelete(toDelete).then(() => {
    message.delete(5000);
    return message.reply(`Cleaned up ${args[1]} messages.`)
      .then(message => {message.delete(5000)
      .catch(error => log.run(3, "messageCleanup", error))});
  });
}
