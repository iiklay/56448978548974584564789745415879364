const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let argss = message.content.split(" ").slice(1);
  let Timer = argss[0];
  if(!argss[0]){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
  }
  if(argss[0] <= 0){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
  }
message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)
  setTimeout(function(){
message.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})}` + message.author.toString())
  }, ms(Timer));
  } 