module.exports = {
	name: 'key',
	description: 'get something from wow api',
	execute(message, args) {
		const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
		const xhr = new XMLHttpRequest();
		let reply;
		try{
			xhr.open('GET', 'https://raider.io/api/v1/characters/profile?region=' +
			args[0] + '&realm=' + args[1] + '&name=' + args[2] + '&fields=mythic_plus_weekly_highest_level_runs', false);
			xhr.send();
			const myObj = JSON.parse(xhr.responseText);
			if (myObj.mythic_plus_weekly_highest_level_runs.length == 0) {
				reply = args[2] + ' has not completed any dungeons this week\n';
			}
			else {
				reply = args[2] + ' has completed the following dungeons this week: \n';
			}
			for (let i = 0; i < myObj.mythic_plus_weekly_highest_level_runs.length; i++) {
				reply += myObj.mythic_plus_weekly_highest_level_runs[i].dungeon +
				' ' + myObj.mythic_plus_weekly_highest_level_runs[i].mythic_level + ' for '
				+ myObj.mythic_plus_weekly_highest_level_runs[i].score + ' raider.io score\n';
			}


			console.log(xhr.status);
			console.log(xhr.statusText);
			return message.channel.send(reply);
		}
		catch(error) {
			console.log(error);
			return message.reply('Character does not exist, make sure you entered the command correctly. \n' +
				'for example, ```!key region server name```');
		}

	},
};