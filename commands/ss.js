const db = require('quick.db')


module.exports.run = async (bot, message, argss) => {

  let args = message.content.split(' ').slice(1); 

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('`ROLLERİ_YÖNET` yetkisine sahip değilsin!')
  if (!args.join(" ").trim()) return message.channel.send('Geçerli bir rol ismi giriniz !otorol <rol-ismi>')
  

  
  db.set(`autoRole_${message.guild.id}`, args.join(" ").trim()).then(otorol => {
    if (!message.guild.roles.find(`name`, otorol.text)) return message.channel.send("Rol bulunamadı")
      message.channel.send(`Otorol Rolü Başarıyla **${otorol}** olarak ayarlandı!`)
    
  })
  
}
client.on("guildMemberAdd", member => {
  db.fetch(`autoRole_${member.guild.id}`).then(otorol => {
  if(!otorol || otorol.toLowerCase() === 'yok') return;
  else {
  try {
  member.addRole(member.guild.roles.find(`name`, otorol))
  }catch (e) {
  console.log('Rol verilemedi sunucu idsi', member.guild.id)
  }
  }
  })
  })