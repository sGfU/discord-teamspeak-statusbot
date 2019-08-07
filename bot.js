const request = require("request");
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

request.get(config.apiUrl, (error, response, body) => {
    const server = JSON.parse(body);
    const online = server.is_online
    if (online == "1") {
        const players = server.players;
        const maxplayers = server.maxplayers;
        console.log(`Successfully updated the status of your Teamspeak!`)
        return client.user.setActivity(`${players}/${maxplayers} on Teamspeak!`);
    } else {
        return client.user.setActivity(`Teamspeak is OFFLINE!`)
    }

});



client.login(process.env.token || config.token);


