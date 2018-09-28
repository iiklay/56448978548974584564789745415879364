const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
    let customemoji6 = client.emojis.find(r => r.name === 'deve');
      if(message.author.bot) return;
   if(!message.author.user) return message.reply(`This command under development ${customemoji6}`);message.delete(1000);
}
