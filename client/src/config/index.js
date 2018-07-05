export const server = {};

switch (process.env.NODE_ENV) {
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
