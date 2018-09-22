const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
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
