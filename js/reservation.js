import { drawerPage, topbutton } from './drawer.js';
drawerPage();
topbutton();
// ------------------------------------------
// 予約フォームのメニュー追加機能

export function reservationPage() {
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

      removeBtn.classList.add('remove-btn');

      removeBtn.addEventListener('click', () => newMenuItem.remove());

      // 要素をまとめて追加
      newMenuItem.appendChild(select);
      newMenuItem.appendChild(quantity);
      newMenuItem.appendChild(removeBtn);

      // コンテナに追加
      container.appendChild(newMenuItem);
    });
  });
}

reservationPage();
