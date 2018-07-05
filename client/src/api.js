import { get as axiosGet } from './utils/httpHelper';
import { serverBaseURL } from './config';

function get(url) {
	return axiosGet(String(new URL(url, serverBaseURL)));
}

/**
 * @description Makes server request for active mentors user object
 * @returns {[User]} an array of User objects
 */
export function getActiveMentors() {
	return get('user/mentors/active');
}
