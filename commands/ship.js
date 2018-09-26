const Discord = require('discord.js');
const Jimp = require(`jimp`)
const cooldown = new Set()
 exports.run = async (client, message, args) => {
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
    let replies = [`Will Never Work`, `Slight Chance of Working`, `👀`, `Can Work`, `Could Work`, `High Chance of Working`, `Will Work <3`, `A Great Match <3`, `PERFECT MATCH ❤`]
    let result = Math.floor(Math.random() * replies.length);
    let mUser = message.mentions.users.first()
    let mUser2 = message.mentions.users.last()
    if(!mUser) return message.channel.send(`Please specifify two users next time!`)
    message.channel.startTyping();
    const mUserA = mUser.avatarURL
    var imagetobase = `https://media.discordapp.net/attachments/490918062678212649/494306279037206530/Shipping.png`;
    Jimp.read(mUser.displayAvatarURL, function (err, imagetouse) {
        if (err) throw err;
        imagetouse.quality(60)
                  .resize(866, 866)
                  .write("imagetouse.jpg");
        Jimp.read(mUser2.displayAvatarURL, function (err, imagetouse2) {
        if (err) throw err;
        imagetouse2.quality(60)
                  .resize(866, 866)
                  .write("imagetouse2.jpg");
        Jimp.read(imagetobase, function (err, mydude) {
            if (err) throw err;
            Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
                mydude.quality(60)
                mydude.print(font, 635, 1717, `${message.author.username}`)
                mydude.composite( imagetouse, 784, 797 )
                mydude.composite( imagetouse2, 2191, 797)
                mydude.write("saveme.jpg")
                mydude.getBuffer(`image/jpeg`, (err, buf) => {
                    if (err) return err;
                    message.channel.send({files: [{attachment: buf, name: `saveme.jpg`}] })
                    message.channel.send(replies[result]).then(()=> { message.channel.stopTyping(); });
                })
            })
        })}
    )})
}