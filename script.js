document.addEventListener("DOMContentLoaded", () => {
  // 取得畫面元素
  const viewLogin = document.getElementById('view-login');
  const viewRegister = document.getElementById('view-register');
  const viewVerify = document.getElementById('view-verify');

  const views = {
    'login': viewLogin,
    'register': viewRegister,
    'verify': viewVerify
  };

  // 切換畫面函數
  function switchView(targetView) {
    // 隱藏所有畫面
    Object.values(views).forEach(view => {
      view.classList.add('hidden');
    });
    // 顯示目標畫面
    views[targetView].classList.remove('hidden');
  }

  // 綁定按鈕事件 (前往驗證)
  document.getElementById('btn-go-verify').addEventListener('click', () => {
    switchView('verify');
  });

  document.getElementById('btn-forgot-account').addEventListener('click', () => {
    switchView('verify');
  });

    document.getElementById('btn-forgot-password').addEventListener('click', () => {
    switchView('verify');
  });

  // 綁定按鈕事件 (前往註冊)
  document.getElementById('btn-go-register').addEventListener('click', () => {
    switchView('register');
  });

  // 綁定 Logo 回首頁(登入頁)
  document.getElementById('logo-btn').addEventListener('click', () => {
    switchView('login');
  });

  // 綁定所有返回/切換登入按鈕 (包含 data-target 屬性的按鈕)
  const backButtons = document.querySelectorAll('[data-target="login"]');
  backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchView('login');
    });
  });
});