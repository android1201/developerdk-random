# developerdk-random
## @Author developerdk

>```
> porngif()
>```

>```
> const { random } = require('developerdk-random');
> const randomimage = new random();
>```
**Package installation!**

```
 console.log(randomimage.porngif());
```
**Return 1 random image!**

```
 let images = 10;
 for (let i = 0; i < images; ++i) {
 	console.log(randomimage.porngif());
 }
```
**Return 10 random images!**

### sfw1

| Function | Description |
| -------- | ----------- |
| `smug` | Gets a URL of a smug image/gif |
| `baka` | Gets a URL of a baka image/gif |
| `tickle` | Gets a URL of a tickle image/gif |
| `slap` | Gets a URL of a slap image/gif |
| `poke` | Gets a URL of a poke image/gif |
| `pat`  | Get a URL of a pat image/gif |
| `neko` | Get a URL of a neko image |
| `nekoGif` | Get a URL of a neko gif |
| `meow` | Get a URL of a cat image/gif |
| `lizard` | Get a URL of a lizard image |
| `kiss` | Get a URL of a kiss image/gif |
| `hug`  | Get a URL of a hug image/gif |
| `foxGirl` | Get a URL of a fox girl image/gif |
| `feed` | Get a URL of a feeding image/gif |
| `cuddle` | Get a URL of a cuddle image/gif |
| `kemonomimi` | Get a URL of a kemonomimi image/gif |
| `holo` | Get a URL of a Holo image/gif |
| `woof` | Get a URL of a dog image/gif |
| `wallpaper` | Get a URL of a wallpaper |
| `goose` | Get a URL of a goose image |
| `gecg` | Get a URL of a gecg (genetically engineered catgirl) image |
| `avatar` | Get a URL of an avatar image |
| `waifu` | Get a URL of a waifu image |
| `why` | Get `text` of a question |
| `catText`| Get `text` of a cat emoji |
| `OwOify` | Get OwOified `text` of a string |
| `8Ball` | Sends the text and replies with a `text` as a response to the magic 8Ball and an image as well.|
| `fact` | Gets the text and replies with a `text` that is a random fact |
| `spoiler` | Creates an individual spoiler per letter for Discord |

### nsfw1

| Function | Description |
| -------- | ----------- |
| `randomHentaiGif` | Get a URL of hentai gif |
| `pussy` | Get a NSFW URL of a pussy image/gif |
| `nekoGif`| Get a NSFW URL of a neko gif |
| `neko` | Get a NSFW URL of a neko image |
| `lesbian` | Get a NSFW URL of a lesbian image/gif |
| `kuni` | Get a NSFW URL of a kuni image/gif |
| `cumsluts` | Get a NSFW URL of a cumslut image/gif |
| `classic` | Gets a NSFW URL of the classic endpoint image/gif |
| `boobs` | Gets a NSFW URL of boobs image/gif |
| `bJ` | Gets a NSFW URL of bj image/gif |
| `anal` | Gets a NSFW URL of anal image/gif |
| `avatar` | Gets a NSFW URL of an avatar image/gif |
| `yuri` | Gets a NSFW URL of yuri image/gif |
| `trap` | Gets a NSFW URL of trap image/gif |
| `tits` | Gets a NSFW URL of an/a image/gif containing tits |
| `girlSoloGif` | Gets a NSFW URL of a solo girl gif |
| `girlSolo` | Gets a NSFW URL of a solo girl image |
| `pussyWankGif` | Gets a NSFW URL of a gif of pussy masterbation |
| `pussyArt` | Gets a NSFW URL of an/a image/gif of pussy art |
| `kemonomimi` | Gets a NSFW URL of an/a image/gif containing kemonomimi|
| `kitsune` | Gets a NSFW URL of an/a image/gif of kitsune |
| `keta` | Gets a NSFW URL of an/a image/gif of keta |
| `holo` | Gets a NSFW URL of an/a image/gif of Holo |
| `holoEro` | Gets a NSFW URL of an/a image/gif Holo ero |
| `hentai` | Gets a NSFW URL of an/a image/gif of hentai |
| `futanari` | Gets a NSFW URL of an/a image/gif of futa |
| `femdom` | Gets a NSFW URL of an/a image/gif of femdom |
| `feetGif` | Gets a NSFW URL of a gif of feet |
| `eroFeet` | Gets a NSFW URL of an/a image/gif of ero feet |
| `feet` | Gets a NSFW URL of an image of feet |
| `ero` | Gets a NSFW URL of an/a image/gif ero |
| `eroKitsune` | Gets a NSFW URL of an/a image/gif ero kitsune |
| `eroKemonomimi` | Gets a NSFW URL of an/a image/gif ero kemonomimi |
| `eroNeko` | Gets a NSFW URL of an/a image/gif ero neko |
| `eroYuri` | Gets a NSFW URL of an/a image/gif ero yuri |
| `cumArts` | Gets a NSFW URL of an/a image/gif of cum arts |
| `blowJob` | Gets a NSFW URL of an/a image/gif blowjob |
| `spank` | Gets a NSFW URL of an/a image/gif spank |
| `gasm` | Gets a NSFW URL of a gasm image |

```
(async () => {
	randomimage.sfw1.smug().then((R_I) => {
		console.log(R_I)
	});
})();
```

```
(async () => {
	randomimage.nsfw1.randomHentaiGif().then((R_I) => {
		console.log(R_I)
	});
})();
```
