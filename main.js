const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("+");
var diplo =("");
bot.on('ready',() => {
    bot.user.setPresence({game:{name:"Dans Gami'Night |Createur : Gami'Night "  , type: 2}})
    console.log("Bot Ready !");
});

bot.login('');
   
bot.on("message" ,message => {    
    if (message.content === prefix + 'help'){
        var help_embed = new Discord.RichEmbed()
            .setColor('#800080')
            .addField("Commande du bot","+help")
            .addField("Divers","lay: le bot repond up")
            .addField("Music","Bientot")
            .addField("Admin","Bientot")
            .setFooter("Crée par Gami'Night ")
         message.channel.sendEmbed(help_embed);
        console.log("Commande help demandée ! ");
    }

    
});
bot.on("message" ,message => {
    if(message.content === "lay"){
        message.reply("up");
        console.log('lay up');
    }
    if (message.content === prefix + 'ds'){
        message.reply(diplo)
        console.log("discord demandée");
    }
    if (message.content === prefix + 'ub'){
        var ub_embed = new Discord.RichEmbed()
        .setColor('#800080')
        .addField("Créateur","Gami'Night ")
        .setFooter("Crée par Gami'Night ")
        message.channel.sendEmbed(ub_embed);
        console.log("créateur demandée");
    }
    
    if (message.content === prefix + 'th'){
        message.channel.send("Bientôt")
        console.log("recru demandé");
    } 
   
})


