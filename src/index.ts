import puppeteer, { Page } from "puppeteer";
import fs from "fs";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    "https://www.parcoursmetiers.tv/video/14398-la-filiere-archi-cool-de-toulouse-ynov-campus"
  );

  //spam click the like button
  for (let i = 0; i < 100; i++) {
    await page.waitForTimeout(3000);
    await page.click(".btn-gray");
    await page.waitForTimeout(5000);
    await page.click("#send-form");
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
  }
})();
