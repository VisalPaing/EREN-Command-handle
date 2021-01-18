const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'clear',
    aliases: ['purge'],
    category: "👮🏻‍♂️ moderation",
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permission to use this command.')
        if(!args[0]) return message.channel.send('Please specify an amount to delete **(1-99)**')
        if(isNaN(args[0])) return message.channel.send('Only numbers are allowed.')
        if(parseInt(args[0]) > 99) return message.channel.send('The max amount of messages you can delete is 99')
        
            await message.channel.bulkDelete(parseInt(args[0]) + 1)
                .catch(err => console.log(err))
                const embed = new MessageEmbed()
                .setTitle(`Delete ${args[0]} messages!`)
                .setColor('YELLOW')
                message.channel.send(embed).then(m => m.delete({ timeout : 5000 }))
    }
}