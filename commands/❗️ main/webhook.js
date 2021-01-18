const { WebhookClient, MessageEmbed } = require('discord.js')

module.exports = {
    name : 'webhook',
    category: "❗️ main",
    run : async(client, message, args) => {
    const wc = new WebhookClient('798164123716157520', '05Hr-4MiJRRvdwJ75T5_JGcnUbIup0nyFKG8PRMHx6yq0PCOy48gxVkI2WXoFrp2v2QE')
        const embed = new MessageEmbed()
            .setTitle("webhook").setColor('YELLOW').setTimestamp().setDescription(args.join(" "))
    wc.send({
        username : message.author.tag,
        avatarURL : message.author.displayAvatarURL({ dynamic : true }),
        embeds : [embed]
    })
    }
}