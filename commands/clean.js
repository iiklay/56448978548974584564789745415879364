        const Discord = require("discord.js");
        const client = new Discord.Client();
const cooldown = new Set()
        exports.run = (client, message, argsc) => {
                  if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
          message.delete(11000);
          let customemoji = client.emojis.find(r => r.name === '463763583864406056');
          if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
          let args= message.content.split(" ").slice(0)
          if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.delete(50000);
            return message.reply("You need the `MANAGE_MESSAGES` Permission for this.")
              .then(message => {message.delete(10000)
              .catch(error => log.run(3, "messageCleanup", error))});
          }
          if (!args[1]) {
            message.delete(50000);
            return message.reply("Please specify how many messages to delete. (1-99)")
              .then(message => {message.delete(10000)
              .catch(error => log.run(3, "messageCleanup", error))});
          }
          if (args[1] < 2 || args[1] > 100) {
            message.delete(11000);
            return message.reply("You must specify between 1 and 99 messages to delete.")
              .then(message => {message.delete(10000)
              .catch(error => log.run(3, "messageCleanup", error))});
          }
          var toDeleteInit = args[1];
          var offset = 1;
          var toDelete = Number(toDeleteInit) + Number(offset);
          message.channel.bulkDelete(toDelete).then(() => {
            message.delete(11000);
            return message.reply(`Cleaned up ${args[1]} messages.`)
              .then(message => {message.delete(10000)
              .catch(error => log.run(3, "messageCleanup", error))});
          });
        }
