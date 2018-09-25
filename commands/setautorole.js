const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, argss) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You need Permission `MANAGE_ROLES`");
    let otorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
    let args = message.content.split(' ').slice(1); 
    if (!args[0]) { 
        otorol[message.guild.id] = {
            role: 0
        };
        fs.writeFile("./otorol.json", JSON.stringify(otorol), (err) => {
            if (err) console.log(err);
        });
        message.reply("Specify a role!");
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
        message.reply(`**${role.name}** role has been setting to auto role`);
    }
}
client.on("guildMemberAdd", member => {
    let otorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  
    var role = otorol[member.guild.id].role;
  const rol = member.guild.roles.find('name', role);
    if (!rol)
    member.addRole(role);
});