/*
 * @Author developerdk
 * @Github developerdk1973
 * @Function checkupdate
 */
const {
	checkupdate
} = require('../../src/functions/checkupdate');
checkupdate();

const {
	get
} = require('http');

const {
	URL,
	URLSearchParams
} = require('url');

const api1_endpoints = require('../../src/json/api1.json');

const api2_endpoints = require('../../src/json/api2.json');

const ri_endpoints = require('../../src/json/randomimage.json');

let api1_baseURL = 'http://192.145.238.5/~pasirm5/v3sca'; // 'https://scathach.redsplit.org/v3';

let api2_baseURL = 'https://nekos.life/api/v2';

let ri_baseURL = 'http://192.145.238.5/~pasirm5/v3/redditjanda/cabul.php';

/*
 * @Class random
 */
class random {
	constructor() {
		this.alreadyPickUp = [];
		let self = this;
		self.sfw = {};
		self.sfw1 = {};
		self.nsfw = {};
		self.nsfw1 = {};
		self.sex = {};
		self.animated = {};
		self.randomimage = {};
		Object.keys(api1_endpoints.sfw).forEach(async (endpoint) => {
			self.sfw[endpoint] = async function(queryParams = '') {
				let url = new URL(`${api1_baseURL}${api1_endpoints.sfw[endpoint]}`);
				queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
				return await getContent(url.toString());
			};
		});
		Object.keys(api1_endpoints.nsfw).forEach(async (endpoint) => {
			self.nsfw[endpoint] = async function(queryParams = '') {
				let url = new URL(`${api1_baseURL}${api1_endpoints.nsfw[endpoint]}`);
				queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
				return await getContent(url.toString());
			};
		});
		Object.keys(api1_endpoints.sex).forEach(async (endpoint) => {
			self.sex[endpoint] = async function(queryParams = '') {
				let url = new URL(`${api1_baseURL}${api1_endpoints.sex[endpoint]}`);
				queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
				return await getContent(url.toString());
			};
		});
		Object.keys(api1_endpoints.animated).forEach(async (endpoint) => {
			self.animated[endpoint] = async function(queryParams = '') {
				let url = new URL(`${api1_baseURL}${api1_endpoints.animated[endpoint]}`);
				queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
				return await getContent(url.toString());
			};
		});
		Object.keys(api2_endpoints.sfw).forEach(async (endpoint) => {
			self.sfw1[endpoint] = async function(queryParams = '') {
				let url = new URL(`${api2_baseURL}${api2_endpoints.sfw[endpoint]}`);
				queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
				return await getContent1(url.toString());
			};
		});
		Object.keys(api2_endpoints.nsfw).forEach(async (endpoint) => {
			self.nsfw1[endpoint] = async function(queryParams = '') {
				let url = new URL(`${api2_baseURL}${api2_endpoints.nsfw[endpoint]}`);
				queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
				return await getContent1(url.toString());
			};
		});
		Object.keys(ri_endpoints).forEach(async (endpoint) => {
			self.randomimage[endpoint] = async function(queryParams = '') {
				let url = new URL(`${ri_baseURL}${ri_endpoints[endpoint]}`);
				queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
				return await getContent(url.toString());
			};
		});
	}
	porngif() {
		const hub = require('../../src/json/randomhubimagesurl.json');
		let res = null;
		if (this.alreadyPickUp.length == hub.length) this.alreadyPickUp = [];
		while (res == null || this.alreadyPickUp.includes(res)) {
			res = hub[~~(Math.random() * hub.length)];
		}
		this.alreadyPickUp.push(res);
		return res;
	}
}
/*
 * @Function getContent
 */
function getContent(url) {
	return new Promise((resolve, reject) => {
		get(url, (res) => {
			const {
				statusCode
			} = res;
			if (statusCode !== 200) {
				res.resume();
				reject(`Uh oh, Request failed. ${statusCode}`);
			}
			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', (chunk) => {
				rawData += chunk
			});
			res.on('end', () => {
				try {
					const parsedData = JSON.parse(rawData);
					resolve(parsedData);
				} catch (e) {
					reject(`Error: ${e.message}`);
				}
			});
		}).on('error', (err) => {
			reject(`Error: ${err.message}`);
		})
	});
}
/*
 * @Function getContent1
 */
function getContent1(url) {
	return new Promise((resolve, reject) => {
		require('https').get(url, (res) => {
			const {
				statusCode
			} = res;
			if (statusCode !== 200) {
				res.resume();
				reject(`Request failed. Status code: ${statusCode}`);
			}
			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', (chunk) => {
				rawData += chunk
			});
			res.on('end', () => {
				try {
					const parsedData = JSON.parse(rawData);
					resolve(parsedData);
				} catch (e) {
					reject(`Error: ${e.message}`);
				}
			});
		}).on('error', (err) => {
			reject(`Error: ${err.message}`);
		})
	});
}
/*
 * @Class export
 */
if (typeof exports == "object") exports.random = random;
/*
 * @Module done
 */
