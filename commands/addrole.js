const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, argss) => {
  let customemoji = client.emojis.find(r => r.name === '463763583864406056');
  if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You Need Permission `MANAGE_ROLES`");
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('**Bot** Does not have Permission `MANAGE_ROLES`');
  let args = message.content.split(' ').slice(1); 
  let customemoji1 = client.emojis.find(r => r.name === '547984894654964564'); //err
  let customemoji2 = client.emojis.find(r => r.name === '476484481495072778'); //right
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!args[0]) return message.reply("`-role` or `-addrole` <user> <role>");
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("i can not find that role.");
  if(rMember.roles.has(gRole.id)) return message.reply(`${customemoji1} He already has this role`);
  await(rMember.addRole(gRole.id));
  try{
    await message.channel.send(`${customemoji2} **${gRole.name}** Role Has been added to <@${rMember.id}>`)
  }catch(e){
  }
}