const Discord = require('discord.js')
const client = new Discord.Client();
const cooldown = new Set()
exports.run = async (bot, message, args) => {
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
    let msg = await message.channel.send("Wait....")
    if(!message.guild.iconURL) return msg.edit("No icon found, you sure he is there?")
    await message.channel.send({files: [
    	{
    		attachment: message.guild.iconURL,
    		name: "servericon.png"
    	}
    	]})


    msg.delete();
}
