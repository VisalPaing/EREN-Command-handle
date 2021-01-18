const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'invite',
    aliases: ['iv'],
    category: "🙏 support",
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('If you like this bot please invite this bot to your server!')
            .setColor("YELLOW")
            .addFields(
                {name: 'INVITE BOT', value: '[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=796578809360547891&permissions=8&scope=bot)'},
                {name: 'Discord Server', value: '[Join Server and Get support](https://rebrand.ly/souf2)'},
                {name: 'Subcribe', value: '[Subscribe](https://www.youtube.com/channel/UCDdwb3fXESCSVd0iE3Xs2Eg)'}
            )
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .setImage('https://media.discordapp.net/attachments/745869428826177588/762305531624423424/87215.jpg?width=1202&height=676')
            .setFooter('Source code by ᴇʀᴇɴ#0226')

            await message.channel.send(embed)
    }
}