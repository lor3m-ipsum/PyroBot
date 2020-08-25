# Pyro bot
![logo](https://cdn.discordapp.com/banners/690611031449403402/eb8ab5ed11ee49625fd7c181c76dce80.jpg?size=512)
## Description
The reason why this exists is that I found this a fun project to learn discord.js 12 on and I saw no reason to keep it private. This project will most likely still get updates from time to time but I will not continue to work on this forever ofc.

The purpose of the bot is to replace PyroBot which is a bot made by [Jumpinqq](https://github.com/Jumpinqq) used in the Pyro Client discord server.
## Hosting
* To host the bot on your machine first download [Node.js](https://nodejs.org/en/download/).
* Then clone this repository and navigate into it's root folder.
* Then run the `npm i` command.
* After this fill out [boconfig.json](/storage/botconfig.json) properly.
* And finally run the `node .` command in the root folder of this repository.
## Expanding the bot
It you would like to make your own bot based on this, you can add new commands based on the [template](/template.js). All commands must be in their separate file in a folder (inside [the commands folder](/commands/) ofc) which represents the category of the command. Adding events is done in the same way but I didn't make a template for that and you should add those directly into [the events folder](/events/) (see already included events for examples).
## To-do
- [ ] Giveaway commands
- [ ] Music commands (If I feel like doing that)
- [ ] One config command to configure all the things that you configure with different commands rn
- [ ] Autorole