const Discord = require('discord.js')

module.exports = {
    name : 'avatar',
    category: "🥳 fun",
    description : 'Show Avatar.',
    run : async(client, message, args) => {
         //command

        /* If user isnt found it selects ur profile */
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

        if (!member.user.avatarURL) return message.channel.send(`That user does not have an avatar`);

        const avatar = new Discord.MessageEmbed()
            .setTitle(`${member.user.username}'s Avatar`)
            .setColor("#f0ff00")
            .setImage(member.user.avatarURL({ dynamic: true, size: 2048}))
            .setURL(member.user.avatarURL())
            .setTimestamp()
        message.channel.send(avatar)
            // If bot doesnt have embed perms 
            .catch(() => message.channel.send('**Error:** Missing permission `Embed link` '));
    }
}