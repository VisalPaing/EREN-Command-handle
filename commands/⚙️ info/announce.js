const  {MessageEmbed } = require('discord.js')

module.exports = {
    name: 'announce',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    category: "⚙️ info",
    Description: 'Show about Server.',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permission to use this command');

        let mention;

        if(!args.length) return message.channel.send('> Usage: y!announce <#channel> <message> <-ping ?>');

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply('Please specify a channel!');

        if(!args[1]) return message.reply('Please specify a message to announce');

        // mentions
        if(args.some((val) => val.toLowerCase() === '-ping')) {
            for (let i = 0; i < args.length; i++ ) {
                if(args[i].toLowerCase() === '-ping') args.splice(i, 1);
            }

            mention = true;
        } else mention = false;

        if(mention === true) channel.send('@everyone');

        channel.send(
            new MessageEmbed()
                .setTitle('📢 𝐀𝐧𝐧𝐨𝐮𝐧𝐜𝐞𝐦𝐞𝐧𝐭𝐬')
                .setDescription(args.slice(1).join(" "))
                .setTimestamp()
                .setThumbnail('servericon')
                .setThumbnail(message.guild.iconURL())
                .setColor('RANDOM')
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        )
    }
}