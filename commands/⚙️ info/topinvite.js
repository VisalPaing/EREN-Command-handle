const Discord = require('discord.js')
const arraySort = require('array-sort')
const table = require('table');
const leaderboard = require('./leaderboard');

module.exports = {
    name : 'topinvite',
    aliases : ['topiv'],
    category: "⚙️ info",
    run : async(client, message, args) => {
        let invites = await message.guild.fetchInvites().catch(error => {
            return message.channel.send('Sorry I dont have a proper permisssion to view invites!')
        })
        invites = invites.array();
        arraySort(invites, 'uses', { reverse: true });
        let possibleInvites = [['User', 'Uses']];
        invites.forEach(function(invite){
            possibleInvites.push([invite.inviter.username, invite.uses]);
        })

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('INVITELEADERBOARD')
            .addField('INVITE', `\`\`\`${table.table(possibleInvites)}\`\`\``)
            message.channel.send(embed)
    }
}