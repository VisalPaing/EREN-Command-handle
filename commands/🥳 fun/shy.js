const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'shy',
    category: "🥳 fun",
    run : async(clinet, message, args) => {
        let user = message.mentions.users.first()
        let act = 'is shy'
        const rando_shy_imgs = ["https://cdn.zerotwo.dev/SHY/398bccee-0281-42fb-afbe-023ee8a42045.gif",
        "https://cdn.zerotwo.dev/SHY/ecaba0ab-50cd-47bc-91fe-6949e7f1d76d.gif",
        "https://cdn.zerotwo.dev/SHY/c6638396-747a-4aea-abf0-2d61a4d14a5b.gif",
        "https://cdn.zerotwo.dev/SHY/3f5b54ee-e054-49bd-9d78-78aa1999f130.gif", 
        "https://cdn.zerotwo.dev/SHY/3f5b54ee-e054-49bd-9d78-78aa1999f130.gif", 
        "https://cdn.zerotwo.dev/SHY/9cbffd41-cf16-4ee6-86b5-a712ffab2bc8.gif",
        "https://cdn.zerotwo.dev/SHY/747bfa31-8afb-47ae-b91c-ea1083e934a3.gif",
        "https://cdn.zerotwo.dev/SHY/ec7c99c8-ca57-4070-857b-3ece77ccf45a.gif"
        ];
        if (!user || message.author.id === user.id) {
          let embed = new MessageEmbed()
            .setColor('#f0ff00')
            .setTitle(`shy`)
            .setImage(rando_shy_imgs[Math.floor(Math.random() * rando_shy_imgs.length)])
            .setTimestamp()
          message.channel.send(embed).then(msg => {
            msg.react('❤')
          });;
        } else if (user.id === '777540530032607236') {
          let embed = new MessageEmbed()
            .setColor('#f0ff00')
            .setTitle(`shy`)
            .setImage(rando_shy_imgs[Math.floor(Math.random() * rando_shy_imgs.length)])
            .setTimestamp()
          message.channel.send(embed).then(msg => {
            msg.react('❤')
          });;
        } else {
          let embed = new MessageEmbed()
            .setColor('#f0ff00')
            .setTitle(`♥ ${user.username} ${act}`)
            .setImage(rando_shy_imgs[Math.floor(Math.random() * rando_shy_imgs.length)])
            .setTimestamp()
          message.channel.send(embed).then(msg => {
            msg.react('❤')
          });;
        }
    }
}