export const server = {};

switch (process.env.NODE_ENV) {
case 'production':
default:
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
