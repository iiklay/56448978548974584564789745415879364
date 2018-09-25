const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
const cooldown = new Set()
exports.run = async (client, message, argsw) => {
    if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
  message.delete(11000);
  let customemoji = client.emojis.find(r => r.name === '463763583864406056');
  if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
    var args = message.content.split(" ").slice(1);
   let reason = message.content.split(' ').slice(3).join(" ");  
   if (!reason) {
    reason = 'without reason';
   }
    let mention = message.mentions.members.first();
        if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) 
        return message.reply('You do not have Permission').then(msg => {
          setTimeout(() => {
            msg.edit(`You need Permission **MANAGE_ROLES**`);
         },1500).then(msg => msg.delete(10000));
        });
        if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) 
        return message.channel.send('**Bot** does not have Permission').then(msg => {
          setTimeout(() => {
            msg.edit('Bot need Permission **MANAGE_ROLES**');
         },1500).then(msg => msg.delete(10000));
        });
      let customemoji5 = client.emojis.find(r => r.name === '488778606382940160');
      let customemoji1 = client.emojis.find(r => r.name === '97976489784694');
      let user = message.mentions.users.first();
      var userM = message.guild.member(message.mentions.users.first());
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("You did not mention any users").then(m => m.delete(10000));
      if(mention.id === message.author.id) return message.reply('You can not give mute to yourself').then(m => m.delete(10000));
      if(mention.user.id === message.guild.owner.id) return message.reply(`You can not give mute to the owner ${customemoji5}`).then(msg => msg.delete(10000));
      if(message.guild.member(userM.user).hasPermission("ADMINISTRATOR")) return message.reply('This user has Permission `ADMINISTRATOR`').then(m => m.delete(10000));
      let muterole = message.guild.roles.find(`name`, "Muted 🤐");
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted 🤐",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      let mutetime = args[1];
      if(!mutetime) return message.reply("You forgot to set the time ⏱");
      await(tomute.addRole(muterole.id));
      message.channel.send(`${customemoji1} Has been muted temporarily 🤐<@${tomute.id}> Time **${ms(ms(mutetime))}** 📝 **${reason}**`);
      setTimeout(function(){
        if(!muterole || !tomute.roles.has(muterole.id)) return ;
        tomute.removeRole(muterole.id);
        message.channel.send(`You has been unmuted you can send messages again <@${tomute.id}>`);
      }, ms(mutetime));
      if(!message.guild.channels.find('name', 'logs')) return message.channel.send('make channel named **logs** To receive logs').then(msg => msg.delete(10000));
      const wunmuteembed = new Discord.RichEmbed()
      .setColor(message.guild.me.highestRole.color) 
      .setAuthor(`Member muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField("User",`${user.tag}`,true)
      .addField("Muted by",`${message.author.tag}`,true)
      .addField("Reason",`${reason}`,true)
      .addField("Time",`**${ms(ms(mutetime))}**`,true)
      .setTimestamp()
      message.guild.channels.find('name', 'logs').sendEmbed(wunmuteembed)
   
      var unmuteembeddm = new Discord.RichEmbed()
      .setDescription(`You Muted now reason from **${message.guild.name}** 
Reason **${reason}**
Time **${ms(ms(mutetime))}**`)
      .setColor("#ff0000")
        user.send(unmuteembeddm);
  } 
