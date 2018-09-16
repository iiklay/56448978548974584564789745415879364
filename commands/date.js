const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
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