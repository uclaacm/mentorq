'use strict';
const User = require('./models-postgres/User');

/* eslint-disable no-console, no-await-in-loop, no-process-exit */

async function main() {
	for (const email of process.argv.slice(2)) {
		const user = await User.findOne({ where: { email } });
		if (!user) {
			console.error(email + ' is not a registered email. :(');
			continue;
		}
		await user.setMentorStatus(true);
		console.log(user.name + ' is now a mentor. :)');
	}
	process.exit();
}

main();
