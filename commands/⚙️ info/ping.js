const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "ping",
  category: "⚙️ info",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    const ping = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('This is my ping')
    .setDescription(`🏓\`${client.ws.ping}\`ms`);


    message.channel.send(ping);
  }
  
}