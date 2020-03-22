'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['ダイチ期', '中吉', '小吉', '末チキ'];
    // // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    // switch (n) {
    //   case 0 :
    //     btn.textContent = '大吉❤'
    //     break;
    //   case 1 :
    //     btn.textContent = '小吉★'
    //     break;
    //   case 2 :
    //     btn.textContent = '大凶😁'
    //     break;
    // }

    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉';
    } else if (n < 0.2) {
      btn.textContent = '中吉';
    } else {
      btn.textContent = '凶';
    }
  });
}