module.exports = {
	name: 'wow',
	description: 'get something from wow api',
	execute(message, args, blizzard) {
		let reply;
		try{
			blizzard.wow.character(['profile'], { origin: args[0], realm: args[1], name: args[2] })
				.then(response => {
					for (const key in response.data) {
						reply += key + ': ' + response.data[key] + '\n';
					}
					return message.channel.send(reply);
				});
		}
		catch(error) {
			return message.reply('oops');
		}

	},
};