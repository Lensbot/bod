const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("+");
var randnum = 0;
var site =("http://google.com/");
//var TGV = ("https://www.ter.sncf.com/grand-est/gares/87147322/Meuse-TGV/prochains-departs")
bot.on('ready',() => {
    bot.user.setPresence({game:{name:'Admirer la gare Meuse TGV Voie Sacrée'  , type: 3}})
    console.log("Bot Ready !");
});

bot.login('NDA4NjY0MjUyOTIwODg5MzQ1.DWIZQg.bbnoHpcy5G7sszq-tJTHiziXW08');
   
bot.on("message" ,message => {    
    if (message.content === prefix + 'help'){
        var help_embed = new Discord.RichEmbed()
            .setColor('#5D58FB')
            .addField("Commande du bot","   l!help pour les commandes !")
            .addField("Divers","lay: le bot repond up")
            .addField("Music","Bientot")
            .addField("Admin","Bientot")
            .setFooter("Crée par DGtech-I9")
         message.channel.sendEmbed(help_embed);
       // message.channel.send("Commande du bot :\n l!help pour afficher les commandes");
        console.log("Commande help demandée ! ");
    }

    
});
bot.on("message" ,message => {
    if(message.content === "lay"){
        message.reply("up");
        console.log('lay up');
    }
})

bot.on("message" ,message => {
    if(message.content === "ok"){
        message.reply("okay");
        console.log('ok okay');
    }

    if (message.content === "hey Itech"){
        random();

        if (randnum == 1){
            message.reply("Je vais bien");
            console.log(randnum);
        }

        if (randnum === 2){
            message.reply("Bonne année :grin: !");
            console.log(randnum);



        }
    }

})



function random(min, max){
    min = Math.floor(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random()*(max - min +1)+ min);
}
bot.on("message" ,message => {    
    if (message.content === prefix + 'sncf'){
        var sncf_embed = new Discord.RichEmbed()
            .setColor('#5D58FB')
            .addField("SNCF","   Traffic en temps réel !")
            .setFooter("Crée par DGtech-I9 et AvisAile")
         message.channel.sendEmbed(sncf_embed);
       // message.channel.send("Commande du bot :\n l!help pour afficher les commandes");
        console.log("Commande sncf demandée ! ");
    }

    if (message.content === prefix + 'site'){
        message.reply(site)
        console.log("Site demandée");
    }
    if (message.content === prefix + 'ub'){
        var ub_embed = new Discord.RichEmbed()
        .setColor('#5D58FB')
        .addField("Créateurs","Dizoshen-GtechI9#9588 et AvisAile#7965")
        .setFooter("Crée par DGtech-I9 et AvisAile")
        message.channel.sendEmbed(ub_embed);
        console.log("créateur demandée");
    }
    if (message.content === prefix + 'tiv'){
        var ub_embed = new Discord.RichEmbed()
        .setColor('#5D58FB')
        .addField("tiv","bientot")
        .setFooter("Crée par DGtech-I9 et AvisAile")
        message.channel.sendEmbed(ub_embed);
        console.log("tiv demandé");
    }
    if (message.content === prefix + 'Teor'){
        var ub_embed = new Discord.RichEmbed()
        .setColor('#5D58FB')
        .addField("TCAR","bientot")
        .setFooter("Crée par DGtech-I9 et AvisAile")
        message.channel.sendEmbed(ub_embed);
        console.log("tcar demandé");
    
    }
    if (message.content === prefix + 'r'){
        message.channel.send("Recrutement fermée et formation aussi.")
        console.log("recru demandé");
    } 
   
    if (message.content === prefix + 'region') {
        message.channel.send('Merci de choisir votre region');
    
    
const filter = m => m.content.startsWith('Grand-Est');
message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
console.log("grand est");
    }

})

