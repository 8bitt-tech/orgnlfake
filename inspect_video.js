const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  // scroll to section
  await page.evaluate(() => {
    document.querySelector('#about').scrollIntoView();
  });
  
  // wait a bit for IntersectionObserver
  await page.waitForTimeout(2000);
  
  const videoStates = await page.evaluate(() => {
    const bgVideo = document.querySelector('.about-bg-video');
    const imgVideo = document.querySelector('.about-img video');
    
    return {
      bgVideoSrc: bgVideo ? bgVideo.currentSrc : null,
      bgVideoReadyState: bgVideo ? bgVideo.readyState : null,
      bgVideoPaused: bgVideo ? bgVideo.paused : null,
      bgVideoError: bgVideo && bgVideo.error ? (bgVideo.error.message || bgVideo.error.code) : null,
      bgVideoZIndex: bgVideo ? window.getComputedStyle(bgVideo).zIndex : null,
      
      imgVideoSrc: imgVideo ? imgVideo.currentSrc : null,
      imgVideoReadyState: imgVideo ? imgVideo.readyState : null,
      imgVideoPaused: imgVideo ? imgVideo.paused : null,
      imgVideoError: imgVideo && imgVideo.error ? (imgVideo.error.message || imgVideo.error.code) : null,
      imgVideoZIndex: imgVideo ? window.getComputedStyle(imgVideo).zIndex : null,
    };
  });
  
  console.log(JSON.stringify(videoStates, null, 2));
  await browser.close();
})();
