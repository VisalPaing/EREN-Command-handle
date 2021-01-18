const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'say',
    category: "⚙️ info",
    run : async(clinet, message, args) => {
        const sayMessage = args.join(" ");
    message.delete().catch(err => console.log(err));
    message.channel.send(sayMessage)
    }
}