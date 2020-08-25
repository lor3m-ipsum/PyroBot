const mc = require("minecraft-server-util");
const Discord = require("discord.js");
const { timedEmbed } = require("../../functions.js");

module.exports = {
    name: "oldfag",
    aliases: [], //must include
    cooldown: 10,
    permissions: [], //must include
    run: async (client, message, args) => {

        mc("oldfag.org", 25565, (error, reponse) => {
            if (error) {
                return timedEmbed(message, "**Task Failed**", "❌ Uh, something went wrong.", "#e86418");;
            }
            let mcembed = new Discord.MessageEmbed()
                .setTitle("Server status:")
                .setThumbnail("https://seeklogo.com/images/M/minecraft-logo-5EAD3A1535-seeklogo.com.png")
                .setColor("#e86418")
                .addField("**IP:**", reponse.host)
                .addField("**Version:**", reponse.version)
                .addField("**People online:**", reponse.onlinePlayers + "/" + reponse.maxPlayers);

            message.channel.send(mcembed);
        });
    }
}

module.exports.help = {
    usage: "[prefix]oldfag",
    description: "Shows the status of oldfag."
}