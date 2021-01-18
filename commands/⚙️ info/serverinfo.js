const Discord = require('discord.js')

module.exports = {
    name: 'serverinfo',
    category: "⚙️ info",
    Usage : 'serverinfo',
    Description : 'Show about Server.',
    run : async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
		.setTitle("Server Information")
		.setColor("#f0ff00")
		.setThumbnail('servericon')
		.addField("Server Name", message.guild.name)
		.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
		.addField("Channels", message.guild.channels.cache.size, true)
		.addField("Roles", message.guild.roles.cache.size, true)
		.addField("Created On", message.guild.createdAt)
		.addField("You Joined", message.member.joinedAt)
		.addField("Total Members", message.guild.memberCount)
		.setThumbnail(message.guild.iconURL())
        .setTimestamp()
        
        message.channel.send(embed);
    }
}