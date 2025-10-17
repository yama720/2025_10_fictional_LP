// import { drawerPage, topbutton } from './drawer.js';
// drawerPage();
// topbutton();
// // --------------------------------------------
// // 空間写真とテキストのスライド部分

// export function indexPage() {
//   const sliderWrap = document.querySelector('#Space .slider-wrap');
//   const slides = document.querySelectorAll('#Space .slider-wrap-text');
//   const prevBtn = document.querySelector('#Space .arrow-left');
//   const nextBtn = document.querySelector('#Space .arrow-right');
//   let index = 0;

//   function updateSlide() {
//     sliderWrap.style.transform = `translateX(-${100 * index}%)`;
//   }

//   updateSlide();

//   prevBtn.addEventListener('click', () => {
//     index = (index - 1 + slides.length) % slides.length;
//     updateSlide();
//   });

//   nextBtn.addEventListener('click', () => {
//     index = (index + 1) % slides.length;
//     updateSlide();
//   });
// }

// indexPage();

// import { drawerPage, topbutton } from './drawer.js';

// document.addEventListener('DOMContentLoaded', () => {
//   drawerPage(); // ← 必ずHTMLが完成してから実行
//   topbutton();
//   indexPage();
// });

// export function indexPage() {
//   const sliderWrap = document.querySelector('#Space .slider-wrap');
//   const slides = document.querySelectorAll('#Space .slider-wrap-text');
//   const prevBtn = document.querySelector('#Space .arrow-left');
//   const nextBtn = document.querySelector('#Space .arrow-right');

//   if (!sliderWrap || slides.length === 0) return;

//   let index = 0;

//   function updateSlide() {
//     sliderWrap.style.transform = `translateX(-${100 * index}%)`;
//   }

//   updateSlide();

//   if (prevBtn && nextBtn) {
//     prevBtn.addEventListener('click', () => {
//       index = (index - 1 + slides.length) % slides.length;
//       updateSlide();
//     });

//     nextBtn.addEventListener('click', () => {
//       index = (index + 1) % slides.length;
//       updateSlide();
//     });
//   }
// }

// // 空間写真とテキストのスライド部分

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
