const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  if(!message.channel.guild) return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply('You do not have Permission `MANAGE_MESSAGES`⚠').then(msg => {
    setTimeout(() => {
      msg.edit('You need Permission `MANAGE_MESSAGES` 👌');
   },1500);
  });
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply('**Bot** does not have Permission `MANAGE_MESSAGES`').then(msg => {
    setTimeout(() => {
      msg.edit('You should give bot a Permission `MANAGE_MESSAGES` and try again ok');
   },1500);
  });
  let user = message.mentions.users.first();
    const emoji = client.emojis.find("name", "wastebasket")
let textxt = args.slice(0).join("");
if(message.member.hasPermission("MANAGE_MESSAGES")) {
if (textxt == "") {
    message.delete().then
message.channel.send("but any number of messeges you want to remove ??").then(m => m.delete(3000));
     } else {
message.delete().then
message.delete().then
message.channel.bulkDelete(textxt);
    message.channel.send("\ndone i removed 🗑 " + textxt + "\n").then(msg => {
      setTimeout(() => {
        msg.edit(`⬇`);
     },1500);
     setTimeout(() => {
      msg.edit(`↘`);
   },1700);
   setTimeout(() => {
    msg.edit(`➡`);
 },1900);
 setTimeout(() => {
  msg.edit(`↗`);
},2100);
setTimeout(() => {
msg.edit(`⬆`);
},2300);
setTimeout(() => {
msg.edit(`↖`);
},2500);
setTimeout(() => {
  msg.edit(`⬅`);
  },2700);
 setTimeout(() => {
  msg.edit(`↙`).then(m => m.delete(3000));
},2900);
    });
    }    
}
}
