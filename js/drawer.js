// ドロワーメニューの部分

export function drawerPage() {
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
}

// -----------------------------------------------------
// ページ上部に飛ぶボタンの部分

export function topbutton() {
  document.addEventListener('DOMContentLoaded', () => {
    const toTopBtn = document.getElementById('to-top-btn');
    // 出現させるスクロール量 (ピクセル)
    const scrollThreshold = 100;

    //スクロール時にボタンの表示/非表示を切り替える関数
    const toggleToTopButton = () => {
      // 現在のスクロール位置を取得
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

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
}
