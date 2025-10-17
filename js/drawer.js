// ドロワーメニューの部分
export function drawerPage() {
  document.addEventListener('DOMContentLoaded', () => {
    // 要素の取得をDOMContentLoadedリスナー内で行う
    const dButton = document.querySelector('.drawerButton');
    const dMenu = document.querySelector('.drawerMenu'); // dMenuの取得を追加
    console.log({ dButton });
    console.log({ dMenu });

    // クラスの付け外しをする関数を、要素が取得できるスコープ内で定義する
    const toggleDrawer = () => {
      // 連れてきた要素にクラスの付け外しをする
      dButton.classList.toggle('active');
      dMenu.classList.toggle('active');
    };

    if (dButton && dMenu) {
      // クリックイベントを設定
      dButton.addEventListener('click', toggleDrawer);

      // メニューリンクをクリックしたら閉じる処理
      document.querySelectorAll('.drawerMenu a').forEach((link) => {
        link.addEventListener('click', () => {
          dButton.classList.remove('active');
          dMenu.classList.remove('active');
        });
      });
    }
  });
}

// -----------------------------------------------------
// ページ上部に飛ぶボタンの部分

export function topbutton() {
  document.addEventListener('DOMContentLoaded', () => {
    const toTopBtn = document.getElementById('to-top-btn');

    if (!toTopBtn) return;

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
