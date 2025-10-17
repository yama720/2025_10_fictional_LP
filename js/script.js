// ドロワーメニューの部分

// function(関数を作る) 関数の名前・自由に付けれる (引数(関数に引き渡す値)) {処理内容(何がしたいのか)}
function drawerButton() {
  //HTMLから必要な要素をJavaScriptに連れてくる
  const dButton = document.querySelector('.drawerButton');
  const dMenu = document.querySelector('.drawerMenu');

  //連れてきた要素にクラスの付け外しをする
  dButton.classList.toggle('active');
  dMenu.classList.toggle('active');
}

/// HTMLが読み込まれたあとにイベント登録する
document.addEventListener('DOMContentLoaded', () => {
  const dButton = document.querySelector('.drawerButton');

  // ← ここでonclickをJSから設定
  dButton.addEventListener('click', drawerButton);

  // メニューリンクをクリックしたら閉じる処理
  document.querySelectorAll('.drawerMenu a').forEach((link) => {
    link.addEventListener('click', () => {
      dButton.classList.remove('active');
      document.querySelector('.drawerMenu').classList.remove('active');
    });
  });
});

// --------------------------------------------
// 空間写真とテキストのスライド部分

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

// -----------------------------------------------------
// ページ上部に飛ぶボタンの部分

document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.getElementById('to-top-btn');
  // 出現させるスクロール量 (ピクセル)
  const scrollThreshold = 100;

  //スクロール時にボタンの表示/非表示を切り替える関数
  const toggleToTopButton = () => {
    // 現在のスクロール位置を取得
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > scrollThreshold) {
      // スクロール量が閾値を超えたら'visible'クラスを追加
      toTopBtn.classList.add('visible');
      toTopBtn.style.display = 'block'; // CSSの display: none; を上書き
    } else {
      // スクロール量が閾値以下の場合は'visible'クラスを削除
      toTopBtn.classList.remove('visible');
      // フェードアウト後に非表示にする（アニメーション後に実行）
      setTimeout(() => {
        if (!toTopBtn.classList.contains('visible')) {
          toTopBtn.style.display = 'none';
        }
      }, 300); // CSSの transition時間 (0.3s) に合わせる
    }
  };

  //ボタンクリック時のトップへ戻る処理
  const scrollToTop = (event) => {
    event.preventDefault(); // aタグのデフォルト動作を無効化
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // スムーズスクロール
    });
  };

  // イベントリスナーの設定
  window.addEventListener('scroll', toggleToTopButton);
  toTopBtn.addEventListener('click', scrollToTop);

  // ページロード時の初期チェック
  toggleToTopButton();
});

// ------------------------------------------
// 予約フォームのメニュー追加機能
document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-menu-btn');
  const container = document.getElementById('menu-input-container');

  addBtn.addEventListener('click', function () {
    // 新しいメニュー入力ブロックを作成
    const newMenuItem = document.createElement('div');
    newMenuItem.classList.add('menu-serect');

    // select要素を作成
    const select = document.createElement('select');
    select.name = 'menu[]';
    select.required = true;
    select.innerHTML = `
      <option value="">メニューを選択 ▼</option>
      <option value="コーヒー">スペシャルティコーヒー</option>
      <option value="アイスティー">アイスティー</option>
      <option value="ケーキ">季節の手作りケーキ</option>
    `;

    // 数量入力
    const quantity = document.createElement('input');
    quantity.type = 'number';
    quantity.name = 'quantity[]';
    quantity.value = 1;
    quantity.min = 1;

    // 削除ボタン
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = '削除';
    removeBtn.addEventListener('click', () => newMenuItem.remove());

    // 要素をまとめて追加
    newMenuItem.appendChild(select);
    newMenuItem.appendChild(quantity);
    newMenuItem.appendChild(removeBtn);

    // コンテナに追加
    container.appendChild(newMenuItem);
  });
});
