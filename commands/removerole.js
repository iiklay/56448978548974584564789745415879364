const Discord = require('discord.js')
const client = new Discord.Client();
const cooldown = new Set()
exports.run = async (client, message, argss) => {
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
  let customemoji = client.emojis.find(r => r.name === '463763583864406056');
  if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You Need Permission `MANAGE_ROLES`");
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('**Bot** Does not have Permission `MANAGE_ROLES`');
  var args = message.content.split(' ').slice(1); 
  let customemoji1 = client.emojis.find(r => r.name === '547984894654964564'); //err
  let customemoji2 = client.emojis.find(r => r.name === '476484481495072778'); //right
    if(!args[0]) return message.reply("`-removerole` or `-rrole` <user> <role>");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("i can not find that role.");
    if(!rMember.roles.has(gRole.id)) return message.reply(`${customemoji1} He dont have the role `);
    await(rMember.removeRole(gRole.id));
    try{
      await message.channel.send(`${customemoji2} Removed role **${gRole.name}** from <@${rMember.id}>`)
    }catch(e){
    }
  }
