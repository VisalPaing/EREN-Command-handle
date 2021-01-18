const { MessageEmbed } = require('discord.js')
const superagent = require('superagent')

module.exports = {
    name: 'dog',
    category: "🥳 fun",
    run : async(client, message, args) => {
        let msg = await message.channel.send(`Generating...`)

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let dEmbed = new MessageEmbed()
        .setColor('#f0ff00')
        .setAuthor(`DOG`, message.guild.iconURL)
        .setImage(body.message)
        .setTimestamp()

        message.channel.send({embed: dEmbed})

        msg.delete();
    }
}