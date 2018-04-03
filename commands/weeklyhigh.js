module.exports = {
	name: 'weeklyhigh',
	description: 'get something from wow api',
	execute(message, args, blizzard) {

		try{
			blizzard.wow.challenge({ origin: args[0], realm: args[1] })
				.then(response => {
					console.log(response.data);
				});
		}
		catch(error) {
			return message.reply('ya dun fked up m8');
		}

	},
};