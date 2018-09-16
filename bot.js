const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = '-'


client.on('ready', () => { 
  console.log(`
  ------------------------------------------------------
  > Logging in...
  ------------------------------------------------------
  Name ${client.user.tag}
  In ${client.guilds.size} servers!
  ${client.channels.size} channels and ${client.users.size} users cached!
  I am logged in and ready to roll!
  LET'S GO!
  ------------------------------------------------------
  ------------------------------------------------------
  ------------------------------------------------------
  ------------------------[ abdo ]----------------------`);
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./owner/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});


client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./gif/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./help/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

/*
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./NSFW/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});
*/

  
  
  client.on('message',async message => {
    if(message.content.startsWith("--restart")) {
      if(message.author.id !== "406192153979518976") return message.reply('You aren\'t the bot owner.');
      message.channel.send('Restarting.').then(msg => {
        setTimeout(() => {
        msg.edit('Restarting..');
        },500);  
        setTimeout(() => {
           msg.edit('Restarting...');
        },1000);
        setTimeout(() => {
           msg.edit('Restarting....');
        },2000);
      });
      console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
      console.log(`Restarting..`);
      setTimeout(() => {
        client.destroy();
        client.login(process.env.BOT_TOKEN);
      },3000);
    }
  });

   client.login(process.env.BOT_TOKEN);

