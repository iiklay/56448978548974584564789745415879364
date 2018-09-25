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
  var currentTime = new Date();
  year = currentTime.getFullYear(),
  month= currentTime.getMonth() + 1,
  Today= currentTime.getDate();
message.channel.sendMessage( "date now : " + Today+ "-" + month+ "-" +year ).then(msg => {
setTimeout(() => {
msg.edit( Today+ "-" + month+ "-" +year  +  "💦");
},4000);
});
}
