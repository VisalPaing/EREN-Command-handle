const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'kill',
    category: "🥳 fun",
    run : async(client, message, args) => {
        let user = message.mentions.users.first()
    let act = 'kill'
    const rando_kill_imgs = ["https://cdn.zerotwo.dev/SHOOT/91f5ec6a-3857-4e13-b5d0-482ccf8e4a75.gif",
      "https://cdn.zerotwo.dev/SHOOT/49d1a959-5bf9-4ea6-90b1-932bb7b302b9.gif",
      "https://cdn.zerotwo.dev/SHOOT/d531b121-5bf4-43df-a723-f13e90c370c2.gif",
      "https://cdn.zerotwo.dev/SHOOT/f48ac951-dcf1-4ab7-8975-94b97abd158b.gif",
      "https://cdn.zerotwo.dev/SHOOT/0465f94f-3ff1-4875-8223-dfdf8043adf0.gif",
      "https://cdn.zerotwo.dev/SHOOT/f48ac951-dcf1-4ab7-8975-94b97abd158b.gif",
      "https://cdn.zerotwo.dev/SHOOT/88d41a9a-55ab-4510-8e9e-8073bacd0a05.gif"
    ];
    if (!user || message.author.id === user.id) {
      let embed = new MessageEmbed()
        .setColor('#f0ff00')
        .setTitle(`🩸 kill you`)
        .setImage(rando_kill_imgs[Math.floor(Math.random() * rando_kill_imgs.length)])
        .setTimestamp()
      message.channel.send(embed).then(msg => {
        msg.react('🩸') //add reaction
      });;
    } else if (user.id === '777540530032607236') {
      let embed = new MessageEmbed()
        .setColor('#f0ff00')
        .setTitle(`🩸 kill you `)
        .setImage(rando_kill_imgs[Math.floor(Math.random() * rando_kill_imgs.length)])
        .setTimestamp()
      message.channel.send(embed).then(msg => {
        msg.react('🩸')
      });;
    } else {
      let embed = new MessageEmbed()
        .setColor('#f0ff00')
        .setTitle(`🩸${message.author.tag} ${act} ${user.username}`)
        .setImage(rando_kill_imgs[Math.floor(Math.random() * rando_kill_imgs.length)])
        .setTimestamp()
      message.channel.send(embed).then(msg => {
        msg.react('🩸')
      });;
    }
    }
}
