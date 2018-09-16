const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
   'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
let emoji = message.content.split(" ").slice(1);
    if (emoji.length < 1) {
      message.channel.send('You must provide some text to emojify!');
 }
  message.channel.send(
    emoji.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
);
};