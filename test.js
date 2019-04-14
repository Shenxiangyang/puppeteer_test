/*  Here are the Outputs
https://ejje.weblio.jp/content/poster
https://eow.alc.co.jp/search?q=poster
https://www.teepublic.com/t-shirt/4199706-i-am-champion-in-foosball
https://www.imagenesmy.com/imagenes/foosball-champions-logo-92.html
*/


const puppeteer = require('puppeteer');

(async() => {

const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.goto('https://www.google.co.jp/imghp');

// Click the "Search by Image" Button
await page.click('.FiqGxd');
await page.type("#qbui", 'http://devgj.websiteserverhost.com/similarimagesearch/shirtee2/images/1354106.png');
await page.keyboard.press('Enter');

await page.waitForSelector('.LC20lb');

// Extract the results from the page
const links = await page.evaluate(() => {
	const anchors = Array.from(document.querySelectorAll('.iUh30'));
	return anchors.map(anchor => anchor.parentNode.parentNode.href);
});

await console.log(links.join('\n'));
browser.close();

})();
