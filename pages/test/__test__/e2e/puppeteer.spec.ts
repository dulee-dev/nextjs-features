import puppeteer, { Browser, Page } from "puppeteer";

jest.setTimeout(70 * 1000)

describe("Test", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });

  afterAll(async() => {
    await browser.close();
  })

  it("change input", async () => {
    await page.goto("http://localhost:3000/test");
    await page.type("#input", "1231232131231231313123132313");
    const selector = await page.waitForSelector("#errorMsg");
    const test = await selector?.evaluate(el => el.textContent);
    expect(test).toEqual("너무김");
  })
})