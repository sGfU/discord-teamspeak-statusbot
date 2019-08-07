# Discord to Teamspeak Status Bot
A VERY simple Discord.JS script that will show the status of your teamspeak server in your Discord.

Uses the [Teamspeak Servers](https://teamspeak-servers.org/) api.

# Install Guide
This guide assumes you know how to install a discord bot through discord.js, if you do not know how, here is a [video](https://www.youtube.com/watch?v=Z-tc91hArlM) you can watch to learn how

1. Gain your API url from teamspeak-servers.org.

  1.1 This is what your URl should look like "https://teamspeak-servers.org/api/?object=servers&element=detail&key=YOURKEYHERE"

2. Place your new URL in the config.json section for "apiUrl".

3. Obtain your discord client token from the discord developer portal, and put it in the "token" section of the config.json.

4. Open your console, CD to the project's location, and type npm install to install the dependicies.

5. Then, type node bot.js.

# OPTIONAL STEPS
If you are running a Linux server, you can install forever, to constantly have your bot up and running.
To do this:

1. Type in your console "npm install forever -g"

2. And then start the bot by CDing to the directory and typing forever start bot.js

3. To stop the bot/restart, use forever stop bot.js and forever restart bot.js.



If you have any questions do no hesitate to contact me through the methods found on my [website](https://sgfu.tv)


