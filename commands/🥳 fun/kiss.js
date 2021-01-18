const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'kiss',
    category: "🥳 fun",
    run : async(client, message, args) => {
        let user = message.mentions.users.first()
    let act = 'You have been kissing by'
    const rando_kiss_imgs = ["https://images-ext-1.discordapp.net/external/tidg3nmf-xzu4Cg8zJqaMv83dcClcQsYLjakjw_UAFQ/https/cdn.nekos.life/kiss/kiss_086.gif?width=400&height=245",
      "https://media4.giphy.com/media/JFmIDQodMScJW/giphy.gif?cid=ecf05e478kosw3b2t188pjrmgvepu4a9ggb4wvr3wznozica&rid=giphy.gif",
      "https://media2.giphy.com/media/l3NSaLw58Bx16/giphy.gif?cid=ecf05e4716fc39777559828071fee3db6911309db499e1eb&rid=giphy.gif",
      "https://media0.giphy.com/media/nyGFcsP0kAobm/giphy.gif?cid=ecf05e474572bdf788ed424ffefb305bb4bf4405419f29dd&rid=giphy.gif",
      "https://media1.giphy.com/media/zkppEMFvRX5FC/giphy.gif?cid=ecf05e478de5225ffab6f412247520f683514920d93f6ccc&rid=giphy.gif",
      "https://media3.giphy.com/media/jLBwuKcJQcCpq/giphy.gif?cid=ecf05e47faad46d8bc32001777e5ab64c1a37e219ee59dd4&rid=giphy.gif",
      "https://media0.giphy.com/media/vHISzfc8dcVG0/giphy.gif?cid=ecf05e478779ddb94eb6862b85a80e4ee8994cabf3a31dba&rid=giphy.gif"
    ];
    if (!user || message.author.id === user.id) {
      let embed = new MessageEmbed()
        .setColor('#f0ff00')
        .setTitle(`♥ kiss you`)
        .setImage(rando_kiss_imgs[Math.floor(Math.random() * rando_kiss_imgs.length)])
        .setTimestamp()
      message.channel.send(embed).then(msg => {
        msg.react('❤')
      });;
    } else if (user.id === '777540530032607236') {
      let embed = new MessageEmbed()
        .setColor('#f0ff00')
        .setTitle(`♥ kiss you គូទ`)
        .setImage(rando_kiss_imgs[Math.floor(Math.random() * rando_kiss_imgs.length)])
        .setTimestamp()
      message.channel.send(embed).then(msg => {
        msg.react('❤')
      });;
    } else {
      let embed = new MessageEmbed()
        .setColor('#f0ff00')
        .setTitle(`♥ ${user.username} ${act} ${message.author.tag}`)
        .setImage(rando_kiss_imgs[Math.floor(Math.random() * rando_kiss_imgs.length)])
        .setTimestamp()
      message.channel.send(embed).then(msg => {
        msg.react('❤')
      });;
    }
    }
}