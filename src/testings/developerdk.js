/*
 * @Author developerdk
 * @Github developerdk1973
 * @Testing random
 */
const {
	random
} = require('../../src/module/module.js');

const image = new random();
for (let i = 0; i < 10; ++i) {
	console.log(image.porngif());
}

(async () => {
	image.nsfw.blowjob().then((R_I) => {
		console.log(R_I);
	});
})();

(async () => {
	image.nsfw1.anal().then((R_I) => {
		console.log(R_I);
	});
})();

(async () => {
	image.sfw1.kemonomimi().then((R_I) => {
		console.log(R_I);
	});
})();

(async () => {
	image.randomimage.hentai().then((R_I) => {
		console.log(R_I);
	});
})();
/*
 * @Testing done
 */
