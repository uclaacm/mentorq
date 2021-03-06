export const server = {};

export const eventName = 'Hack on the Hill 7';

switch (process.env.NODE_ENV) {
case 'production':
	// Server settings
	server.scheme = 'https';
	server.host = 'api.mentorq.hack.uclaacm.com';
	server.port = 443;
	server.path = '';
	break;

case 'development':
default:
	// Server settings
	server.scheme = 'http';
	server.host = 'localhost';
	server.port = 8080;
	server.path = '';
	break;
}

export const serverBaseURL =
	new URL(`${server.scheme}://${server.host}:${server.port}/${server.path}`);
