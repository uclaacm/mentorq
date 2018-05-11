import { get } from './utils/httpHelper';

const config = require('./config');
const serverBaseURL = `http://${config.server.host}:${config.server.port}`;

/**
 * @description Makes server request for username
 * @returns {JSON} username in JSON format
 */
export function getTest() {
	return get(`${serverBaseURL}/user/test`);
}

export function getActiveMentors() {
	return get(`${serverBaseURL}/user/mentors/active`);
}