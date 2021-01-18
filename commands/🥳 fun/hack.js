const ms = require('ms')

module.exports = {
    name : 'hack',
    category: "🥳 fun",
    run : async(client, message, args) => {
        if(!args[0]) return message.channel.send('Tell To me who want you hack?')
        const tohack = args.slice(0).join(" ") && args.shift().toLowerCase()

        let msg = await message.channel.send(`Hacking ${tohack}...`)
        let time = '3s'
        setTimeout(function(){
            msg.edit(`Findin ${tohack} Email...`)
        }, ms(time))
        let time1 = '6s'
        setTimeout(function(){
            msg.edit(`Email : ${tohack}@gmail.com`)
        }, ms(time1))
        let time2 = '9s'
        setTimeout(function(){
            msg.edit(`\`\`\`Password: *********\`\`\``)
        }, ms(time2))
        let time3 = '12s'
        setTimeout(function(){
            msg.edit(`Collecting ${tohack} Data...`)
        }, ms(time3))
        let time4 = '15s'
        setTimeout(function(){
            msg.edit(`${tohack} Succesfully Hacked !`)
        }, ms(time4))
    }
}