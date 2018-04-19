import axios from 'axios';

/**
 * make a get request
 * @param {string} URL
 * @returns {Promise}
 */
export function get(url) {
	return axios.get(url)
		.then(response => response.data)
		.catch((error) => Promise.reject(`GET ${url} failed: ${error}`));
}