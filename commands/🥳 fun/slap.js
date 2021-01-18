const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'slap',
    category: "🥳 fun",
    run : async(client, message, args) => {
        let user = message.mentions.users.first()
    let act = 'slap'
    const rando_slap_imgs = ["https://i.pinimg.com/originals/68/de/67/68de679cc20000570e8a7d9ed9218cd3.gif",
        "https://media1.tenor.com/images/9ad750b64bb246be3ac04475361760ed/tenor.gif",
        "https://media1.tenor.com/images/a0ff9e6e3f65b921d63dfffeec0b94a0/tenor.gif",
        "https://i0.wp.com/haruhichan.com/wpblog/wp-content/uploads/Ryuuji-Takasu-x-Taiga-Aisaka-Toradora-anime-series-slap-haruhichan.com_.gif",
        "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif",
        "https://1.bp.blogspot.com/-PvEOly_SVAQ/V_DkMHzUBqI/AAAAAAAAIQ4/3av3EPhLBsgCQoLIsMcvl07WSpTBMi3bACLcB/s1600/slap%2B9.gif",
        "https://static.wikia.nocookie.net/16345462-4b4c-42d3-b7fb-0b32b43707a3"
    ];
    if (!user || message.author.id === user.id) {
        let slapEmbed = new MessageEmbed()
            .setColor('#f0ff00')
            .setDescription(`🖐You have been slap by you.`)
            .setImage(rando_slap_imgs[Math.floor(Math.random() * rando_slap_imgs.length)])
            .setTimestamp()
        message.channel.send(slapEmbed).then(msg => {
            msg.react('🤕')
        });;
    } else if (user.id === '777540530032607236') {
        let slapEmbed = new MessageEmbed()
            .setColor('#f0ff00')
            .setDescription(`🖐 Slap you គូទ`)
            .setImage(rando_slap_imgs[Math.floor(Math.random() * rando_slap_imgs.length)])
            .setTimestamp()
        message.channel.send(slapEmbed).then(msg => {
            msg.react('🤕')
        });;
    } else {
        let slapEmbed = new MessageEmbed()
            .setColor('#f0ff00')
            .setDescription(`🖐${message.author.tag}#${user.discriminator}, ${act} ${user.username}`)
            .setImage(rando_slap_imgs[Math.floor(Math.random() * rando_slap_imgs.length)])
            .setTimestamp()
        message.channel.send(slapEmbed).then(msg => {
            msg.react('🤕')
        });;
    }
    }
}