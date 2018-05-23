import axios from 'axios';

/**
 * make a get request
 * @param {string} URL
 * @returns {Promise}
 */
export function get(url) {
	return axios.get(url, {
		withCredentials: true
	})
		.then(response => {
			console.log(response);
			return response.data;
		})
		.catch((error) => Promise.reject(`GET ${url} failed: ${error}`));
}

/**
 * make a get request
 * @param {string} URL
 * @param {Object} request body
 * @returns {Promise}
 */
export function post(url, requestBody) {
	return axios.post(url, requestBody)
		.then(response => response.data)
		.catch((error) => Promise.reject(`POST ${url} failed: ${error}`));
}