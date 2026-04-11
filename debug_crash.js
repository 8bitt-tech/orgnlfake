const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', error => {
    console.log('\n==== PAGE EXCEPTION ====');
    console.log(error.stack || error.message);
    console.log('========================\n');
  });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'load' });
    // wait a bit for dynamic components to mount
    await new Promise(r => setTimeout(r, 4000));
  } catch(e) {
    console.log("Nav failed", e);
  }
  
  await browser.close();
  process.exit(0);
})();
