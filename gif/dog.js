const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
    const memelink = [
      'https://images.dog.ceo/breeds/rottweiler/n02106550_11543.jpg',
      'https://images.dog.ceo/breeds/terrier-fox/n02095314_1782.jpg',
      'https://images.dog.ceo/breeds/kuvasz/n02104029_2769.jpg',
      'https://images.dog.ceo/breeds/redbone/n02090379_5196.jpg',
      'https://images.dog.ceo/breeds/cotondetulear/IMG_20160830_202631573.jpg',
      'https://images.dog.ceo/breeds/chihuahua/n02085620_3407.jpg',
      'https://images.dog.ceo/breeds/greyhound-italian//n02091032_1266.jpg',
      'https://images.dog.ceo/breeds/collie-border/n02106166_4412.jpg',
      'https://images.dog.ceo/breeds/schipperke/n02104365_6199.jpg',
      'https://images.dog.ceo/breeds/bouvier/n02106382_2763.jpg',
      'https://images.dog.ceo/breeds/chow//n02112137_6164.jpg',
      'https://images.dog.ceo/breeds/clumber/n02101556_3896.jpg',
      'https://images.dog.ceo/breeds/boxer/n02108089_6418.jpg',
      'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10431.jpg',
      'https://images.dog.ceo/breeds/keeshond/n02112350_7837.jpg',
      'https://images.dog.ceo/breeds/whippet/n02091134_14002.jpg',
      'https://images.dog.ceo/breeds/lhasa/n02098413_2908.jpg',
      'https://images.dog.ceo/reeds/bluetick/n02088632_650.jpg',
      'https://images.dog.ceo/breeds/pyrenees/n02111500_9116.jpg',
      'https://images.dog.ceo/breeds/eskimo/n02109961_1276.jpg',
      'https://images.dog.ceo/breeds/terrier-border/n02093754_1833.jpg',
      'https://images.dog.ceo/breeds/rottweiler/n02106550_11097.jpg',
      'https://images.dog.ceo/breeds/otterhound/n02091635_1234.jpg',
      'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_5281.jpg',
      'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_7281.jpg',
      'https://images.dog.ceo/breeds/coonhound/n02089078_2404.jpg'
    ];
       message.channel.send({file: memelink[Math.floor(Math.random() * memelink.length)]}).catch(err => {console.log(err)})
}
