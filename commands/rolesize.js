const Discord = require("discord.js");
exports.run = async (client,message,args) => {
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${rol}`)
  if(!role) return message.channel.send("i can not find any role");
  var roleinfoEmbed = new Discord.RichEmbed()
 .setDescription(`This role for **${role.members.size}** Members`) // hoz ,ute
  message.channel.send(roleinfoEmbed)
}