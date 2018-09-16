const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, argss) => {
if(!message.channel.guild) return message.reply('this command is for guilds only!');
let args = message.content.split(" ").slice(0);
let user = message.mentions.users.first();
let reason = message.content.split(' ').slice(2).join(" ");  
if (!reason) {
reason = 'No reason provided';
}
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply('You do not have Permission').then(msg => {
  setTimeout(() => {
    msg.edit(`You need Permission **MANAGE_ROLES**`);
 },1500);
});
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**Bot** does not have Permission').then(msg => {
  setTimeout(() => {
    msg.edit('Bot need Permission **MANAGE_ROLES**');
 },1500);
});
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.reply("You did not mention any users").then(m => m.delete(35000));


  let role = message.guild.roles.find (r => r.name === "Muted 🤐");
  if(!role || !toMute.roles.has(role.id)) return message.channel.send(`The user doesn't have **mute** 🤔`)

  var userM = message.guild.member(message.mentions.users.first());
  if(message.guild.member(userM.user).highestRole.position >= message.guild.member(client.user).highestRole.position) 
  return message.reply(`I cannot remove muted for ${userM.user.username} because high role`);

  await toMute.removeRole(role)
  message.channel.send(`You has been unmuted <@${toMute.id}>`);

  if(!message.guild.channels.find('name', 'logs')) return message.channel.send('make channel named **logs** To receive logs').then(msg => msg.delete(5000));

  const wunmuteembed = new Discord.RichEmbed()
  .setColor(message.guild.me.highestRole.color) 
  .setAuthor(`member unmuted!`, user.displayAvatarURL)
  .setThumbnail(user.displayAvatarURL)
  .addField("User",`${user.tag}`,true)
  .addField("Unmuted by",`${message.author.tag}`,true)
  .addField("Reason",`${reason}`,true)
  .setTimestamp()
  message.guild.channels.find('name', 'logs').sendEmbed(wunmuteembed)

  var unmuteembeddm = new Discord.RichEmbed()
  .setDescription(`You has been unmuted reason **${reason}**`)
  .setColor("#00f521")
    user.send(unmuteembeddm);
}
