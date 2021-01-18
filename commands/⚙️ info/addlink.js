const { MessageEmbed } = require('discord.js') 

module.exports ={ 
    name : 'addlink',
    category: "⚙️ info",
    run: async(clinet, message, args) => {
        message.delete();
    const embed = new MessageEmbed()
        .setDescription(args.join(" "))
        .setColor('#f0ff00')


    await message.channel.send(embed);
    }
}