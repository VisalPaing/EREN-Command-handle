const { MessageEmbed } = require('discord.js')
const superagent = require('superagent');

module.exports = {
    name: 'cat',
    category: "🥳 fun",
    run: async(client, message, args) => {
        let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)

    if(!{body}) return message.channel.send("I broke! Try again.")

        let cEmbed = new MessageEmbed()
        .setColor('#FFF400')
        .setAuthor(`CAT`, message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()

        message.channel.send({embed: cEmbed})

        msg.delete();
    }
}