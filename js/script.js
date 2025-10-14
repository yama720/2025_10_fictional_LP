// function(関数を作る) 関数の名前・自由に付けれる (引数(関数に引き渡す値)) {処理内容(何がしたいのか)}
function drawerButton() {
  //HTMLから必要な要素をJavaScriptに連れてくる
  const dButton = document.querySelector('.drawerButton');
  const dMenu = document.querySelector('.drawerMenu');

  //連れてきた要素にクラスの付け外しをする
  dButton.classList.toggle('active');
  dMenu.classList.toggle('active');
}

// メニューリンクをクリックしたら閉じる処理
document.querySelectorAll('.drawerMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.drawerButton').classList.remove('active');
    document.querySelector('.drawerMenu').classList.remove('active');
  });
});

// スライド
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
