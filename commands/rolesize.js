const Discord = require("discord.js");
const cooldown = new Set()
exports.run = async (client,message,args) => {
  if(message.author.bot) return;
  	if (cooldown.has(message.author.id)) {
return message.reply("Please wait 5 seconds a next command").then(message => {
message.delete(5000) 
})
}
cooldown.add(message.author.id);
setTimeout(() => {
  cooldown.delete(message.author.id);
}, 10000);
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${rol}`)
  if(!role) return message.channel.send("i can not find any role");
  var roleinfoEmbed = new Discord.RichEmbed()
 .setDescription(`This role for **${role.members.size}** Members`) // hoz ,ute
  message.channel.send(roleinfoEmbed)
}
