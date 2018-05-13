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

/**
 * @description Makes server request for active mentors user object
 * @returns {[User]} an array of User objects
 */
export function getActiveMentors() {
	return get(`${serverBaseURL}/user/mentors/active`);
}
