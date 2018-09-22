exports.run = (client, message, args) => {
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);
    let start = Date.now(); message.channel.send('pong').then(message => { 
      message.edit(`Ping: ${client.ping.toFixed(0)}ms | Websocket: ${Date.now() - start}ms`);
  });
  }
