var config = require('./config');
var DiscordClient = require('discord.io');
var bot = new DiscordClient({ 


	autorun: true,
	email: config.email,
	password: config.password

	});

bot.on('ready', function() {

	console.log(bot.username + " - (" + bot.id + ")");

	bot.setPresence({

			game: config.game

	});

	var cmdLength = config.commands.length;

});

bot.on('message', function(user, userID, channelID, message, rawEvent) {

	if (channelID === "142340869851185154" || channelID === "142576086381756416") {
	if (message === "!folder" || message === "!translationfolder" || message === "!tlfolder" || message === "!drivefolder") {

		bot.sendMessage({

			to: channelID,
			message: "Folder is here: " + config.folder


		});

	}
}


		if (message === "getCID") {

			bot.sendMessage({
				to: channelID,
				message: "Current Channel ID: " + channelID

			});
			
		}

		if (message === "!help") {
			
			bot.sendMessage({ to: channelID, message: config.commands });
			
			

		}


});
