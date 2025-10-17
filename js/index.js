// 空間写真とテキストのスライド部分

import { drawerPage, topbutton } from './drawer.js';
topbutton();
drawerPage(); // ← 必ずHTMLが完成してから実行

export function indexPage() {
  const sliderWrap = document.querySelector('#Space .slider-wrap');
  const slides = document.querySelectorAll('#Space .slider-wrap-text');
  const prevBtn = document.querySelector('#Space .arrow-left');
  const nextBtn = document.querySelector('#Space .arrow-right');
  let index = 0;

  function updateSlide() {
    sliderWrap.style.transform = `translateX(-${100 * index}%)`;
  }

  updateSlide();

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });
}

indexPage();
