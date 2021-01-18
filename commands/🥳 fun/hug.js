const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'hug',
    category: "🥳 fun",
    run: async(clinet, message, args) => {
        let user = message.mentions.users.first()
    let act = 'hug'
    const rando_hug_imgs = ["https://cdn.zerotwo.dev/HUG/32548b73-d04c-4a8a-87e6-0b06f98b5a5a.gif",
      "https://cdn.zerotwo.dev/HUG/2d59c69c-8df0-4754-a7e4-b568baca1609.gif",
      "https://cdn.zerotwo.dev/HUG/0d836f4a-1b95-4838-99ef-d8f4a9b4bdcd.gif",
      "https://cdn.zerotwo.dev/HUG/112484ad-790e-476f-b490-c488e9afa765.gif",
      "https://cdn .zerotwo.dev/HUG/5fbf5d9c-0c9a-4d80-8e94-ac5c5d33b8d2.gif",
      "https://cdn.zerotwo.dev/HUG/baa28aca-3d1c-46bf-aa70-2f7ccc57df94.gif"
    ];
    if (!user || message.author.id === user.id) {
      let embed = new MessageEmbed()
        .setColor('#f0ff00')
        .setTitle(`hug`)
        .setImage(rando_hug_imgs[Math.floor(Math.random() * rando_hug_imgs.length)])
        .setTimestamp()
      message.channel.send(embed).then(msg => {
        msg.react('🤗')
      });;
    } else if (user.id === '777540530032607236') {
      let embed = new MessageEmbed()
        .setColor('#f0ff00')
        .setTitle(`🤗 hug  `)
        .setImage(rando_hug_imgs[Math.floor(Math.random() * rando_hug_imgs.length)])
        .setTimestamp()
      message.channel.send(embed).then(msg => {
        msg.react('🤗')
      });;
    } else {
      let embed = new MessageEmbed()
        .setColor('#f0ff00')
        .setTitle(`🤗${message.author.tag} ${act} ${user.username}`)
        .setImage(rando_hug_imgs[Math.floor(Math.random() * rando_hug_imgs.length)])
        .setTimestamp()
      message.channel.send(embed).then(msg => {
        msg.react('🤗')
      });;
    }
    }
}