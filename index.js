let puppeteer = require("puppeteer")

const test = async() => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
}
test();