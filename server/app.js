const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:5173", { waitUntil: "networkidle0" });

  await page.emulateMediaType("print");
  await page.waitForSelector("#resume-wrapper");

  const height = await page.$eval("#resume-wrapper", (el) => el.scrollHeight);
  console.log("Height:", height);
  await page.pdf({
    path: "resume.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
})();
