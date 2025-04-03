 // スクロール量に応じて「TOP」ボタンの表示/非表示を切り替え
 window.addEventListener('scroll', function() {
    var gotop = document.querySelector('.gotop');
    if (window.pageYOffset > 300) {  // 300px以上スクロールしたら表示
      gotop.style.display = 'block';
    } else {
      gotop.style.display = 'none';
    }
  });

  // クリック時にスムーズスクロールでトップへ移動
  document.querySelector('.gotop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });