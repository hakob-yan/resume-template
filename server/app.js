const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Adjust the page size (optional)
    await page.setViewport({ width: 1200, height:800 });

    // Navigate to the HTML page you want to save as a PDF
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    // Wait for a short period of time to ensure all dynamic content is loaded (optional)
    await page.waitForTimeout(2000);

    // Generate the PDF and save it to a file
    await page.pdf({ path: 'output.pdf', format: 'A4', printBackground: true  });

    console.log('PDF saved successfully.');

    await browser.close();
  } catch (err) {
    console.error('Error:', err);
  }
})();
