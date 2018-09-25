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


client.on('message', async message => {
    if (message.content.startsWith(`-setrole`)) {
        let args = message.content.split(' ').slice(1); 
if (!message.member.hasPermission("MANAGE_ROLES")) 
return message.reply("Bu Komutu Kullanmak İçin `Rolleri Yönet` Yetkisine sahip olmalısın.").then(message => message.delete(10000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) 
return message.reply('**Bot** does not have Permission `MANAGE_ROLES`').then(message => message.delete(10000));

if(!args[1])highestRole.position
return message.reply(`I cannot remove muted for ${userM.user.username} because high role`).then(msg => msg.delete(10000));
let otorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
if (!args[0]) { 
    otorol[message.guild.id] = {
        role: 0
    };
    fs.writeFile("./otorol.json", JSON.stringify(otorol), (err) => {
        if (err) console.log(err);
    });
    message.reply("Lütfen bir rol ismi yazın.");
}
if (args[0]) { 
    let roles = args.join(" ");
    let role = message.guild.roles.find("name", roles);
    otorol[message.guild.id] = {
        role: role.id
    };
    fs.writeFile("./otorol.json", JSON.stringify(otorol), (err) => {
        if (err) console.log(err)
    });
    message.reply(`seting to **${role.name}**`);
}
}
client.on("guildMemberAdd", member => {
let otorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));

var role = otorol[member.guild.id].role;
const rol = member.guild.roles.find('name', role);
if (!rol)
member.addRole(role);
})
});

  
  
  client.on('message',async message => {
    if(message.content.startsWith("--restart")) {
      if(message.author.id !== "406192153979518976") return message.react('🖕');
  let customemoji = client.emojis.find(r => r.name === '144778947694897');
  let customemoji1 = client.emojis.find(r => r.name === '97976489784694');
    message.channel.send(`${customemoji} Restarting.`).then(msg => {
      setTimeout(() => {
      msg.edit(`${customemoji} Restarting..`);
      },500);  
      setTimeout(() => {
         msg.edit(`${customemoji} Restarting...`);
      },1000);
      setTimeout(() => {
         msg.edit(`${customemoji1} Restarting....`);
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

