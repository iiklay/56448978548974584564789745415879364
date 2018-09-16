const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
exports.run = async (client, message, argsw) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
    var args = message.content.split(" ").slice(1);
   let reason = message.content.split(' ').slice(3).join(" ");  
   if (!reason) {
    reason = 'No reason provided';
   }
    let mention = message.mentions.members.first();
        if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) 
        return message.reply('You do not have Permission').then(msg => {
          setTimeout(() => {
            msg.edit(`You need Permission **MANAGE_ROLES**`);
         },1500);
        });
        if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) 
        return message.channel.send('**Bot** does not have Permission').then(msg => {
          setTimeout(() => {
            msg.edit('Bot need Permission **MANAGE_ROLES**');
         },1500);
        });
        let user = message.mentions.users.first();
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("You did not mention any users").then(m => m.delete(35000));
      if(mention.id === message.author.id) return message.reply('i can not give a mute for you').then(m => m.delete(5000));
      if(mention.user.id === message.guild.owner.id) return message.reply("xD really you want give mute to owner");
      if(message.guild.member(mention.user).highestRole.position >= message.guild.member(message.member).highestRole.position) 
      return message.reply(`You cant give **${mention.user.username}** mute beacuse him role highest then your role!`);
      if(message.guild.member(mention.user).highestRole.position >= message.guild.member(client.user).highestRole.position) 
      return message.reply(`I cant give **${mention.user.username}** mute beacuse him role highest then my role!`);
      let muterole = message.guild.roles.find(`name`, "Muted 🤐");
      //start of create role
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
      //end of create role
      let mutetime = args[1];
      if(!mutetime) return message.reply("You forgot to set the time ⏱");
      await(tomute.addRole(muterole.id));
      message.channel.send(`:ballot_box_with_check: Has been muted temporarily 🤐<@${tomute.id}> Time **${ms(ms(mutetime))}** 📝 **${reason}**`);
      setTimeout(function(){
        if(!muterole || !tomute.roles.has(muterole.id)) return ;
        tomute.removeRole(muterole.id);
        message.channel.send(`You has been unmuted you can send messages again <@${tomute.id}>`);
      }, ms(mutetime));

      if(!message.guild.channels.find('name', 'logs')) return message.channel.send('make channel named **logs** To receive logs').then(msg => msg.delete(5000));

      const wunmuteembed = new Discord.RichEmbed()
      .setColor(message.guild.me.highestRole.color) 
      .setAuthor(`member muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField("User",`${user.tag}`,true)
      .addField("Unmuted by",`${message.author.tag}`,true)
      .addField("Reason",`${reason}`,true)
      .addField("Time",`**${ms(ms(mutetime))}**`,true)
      .setTimestamp()
      message.guild.channels.find('name', 'logs').sendEmbed(wunmuteembed)
   
      var unmuteembeddm = new Discord.RichEmbed()
      .setDescription(`You Muted now reason **${reason}**
Time ${ms(ms(mutetime))}`)
      .setColor("#ff0000")
        user.send(unmuteembeddm);
  } 
