const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, argds) => {
if(message.author.bot) return;
     var ment = message.mentions.users.first();
     var abdo;
     if(ment){
      var abdo = ment;
   } else {
     var abdo = message.author;
   }
   message.channel.send(`Hacking ${abdo.username} now...`).then(msg => {
     setTimeout(() => {
     msg.edit('Finding discord login...');
     },1000);
     setTimeout(() => {
     msg.edit(`Found:\n**Email**: \`${abdo.username}***@gmail.com\`\n**Password**: \`*******\``);
     },1500);
     setTimeout(() => {
     msg.edit('Fetching dms');
     },2000);
     setTimeout(() => {
     msg.edit('Listing most common words...')
     },2500);
     setTimeout(() => {
     msg.edit(`Injecting virus into discriminator #${abdo.discriminator}`)
     },3000);
     setTimeout(() => {
     msg.edit('Virus injected')
     },3500);
     setTimeout(() => {
     msg.edit('Finding IP address')
     },4000);
     setTimeout(() => {
     msg.edit('Spamming email...')
     },4500);
     setTimeout(() => {
     msg.edit('Selling data to facebook...')
     },5000);
     setTimeout(() => {
     msg.edit(`Finished hacking ${abdo.username}`)
     },5500);
     setTimeout(() => {
     msg.edit('The hack is complete.')
     },6000);
     });
     }