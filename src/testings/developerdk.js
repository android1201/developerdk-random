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

image.nsfw.blowjob().then((R_I) => {
	console.log(R_I);
});

image.nsfw1.anal().then((R_I) => {
	console.log(R_I);
});

image.sfw1.kemonomimi().then((R_I) => {
	console.log(R_I);
});
/*
 * @Testing done
 */
