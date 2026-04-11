const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('response', response => {
    if (response.url().includes('.mp4')) {
      console.log('VIDEO RESPONSE:', response.url(), response.status());
    }
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  await page.evaluate(() => {
    document.querySelector('#about').scrollIntoView();
  });
  
  await page.waitForTimeout(3000);
  
  const videoDetails = await page.evaluate(() => {
    const bg = document.querySelector('.about-bg-video');
    const fg = document.querySelector('.about-img video');
    return {
      bgSrc: bg ? bg.currentSrc : null,
      fgSrc: fg ? fg.currentSrc : null,
      bgError: bg && bg.error ? bg.error.message : null,
      fgError: fg && fg.error ? fg.error.message : null,
      bgReady: bg ? bg.readyState : null,
      fgReady: fg ? fg.readyState : null,
      bgNetwork: bg ? bg.networkState : null,
      fgNetwork: fg ? fg.networkState : null,
    };
  });
  
  console.log('Video Details:', videoDetails);
  
  await browser.close();
})();
