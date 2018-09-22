const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, argss) => {
  message.delete(11000);
  let customemoji = client.emojis.find(r => r.name === '463763583864406056');
  if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
let args = message.content.split(" ").slice(0);
let user = message.mentions.users.first();
let reason = message.content.split(' ').slice(2).join(" ");  
if (!reason) {
reason = 'without reason';
}
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply('You do not have Permission').then(msg => {
  setTimeout(() => {
    msg.edit('You need Permission `MANAGE_ROLES`');
 },1500).then(msg => msg.delete(10000));
});
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**Bot** does not have Permission').then(msg => {
  setTimeout(() => {
    msg.edit("Bot need Permission `MANAGE_ROLES`");
 },1500).then(msg => msg.delete(10000));
});
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.reply("You did not mention any users").then(m => m.delete(10000));
  let customemoji = client.emojis.find(r => r.name === '476484481495072778');
  let role = message.guild.roles.find (r => r.name === "Muted 🤐");
  if(!role || !toMute.roles.has(role.id)) return message.channel.send(`The user doesn't have **mute** 🤔`).then(msg => msg.delete(10000));
  var userM = message.guild.member(message.mentions.users.first());
  if(message.guild.member(userM.user).highestRole.position >= message.guild.member(client.user).highestRole.position) 
  return message.reply(`I cannot remove muted for ${userM.user.username} because high role`).then(msg => msg.delete(10000));

  await toMute.removeRole(role)
  message.channel.send(`${customemoji} You has been unmuted <@${toMute.id}>`);

  if(!message.guild.channels.find('name', 'logs')) return message.channel.send('make channel named **logs** To receive logs').then(msg => msg.delete(10000));

  const wunmuteembed = new Discord.RichEmbed()
  .setColor(message.guild.me.highestRole.color) 
  .setAuthor(`Member unmuted!`, user.displayAvatarURL)
  .setThumbnail(user.displayAvatarURL)
  .addField("User",`${user.tag}`,true)
  .addField("Unmuted by",`${message.author.tag}`,true)
  .addField("Reason",`${reason}`,true)
  .setTimestamp()
  message.guild.channels.find('name', 'logs').sendEmbed(wunmuteembed)

  var unmuteembeddm = new Discord.RichEmbed()
  .setDescription(`You has been unmuted from **${message.guild.name}** reason **${reason}**`)
  .setColor("#00f521")
    user.send(unmuteembeddm);
}
