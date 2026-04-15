// ===== パスワード保護 =====
const CORRECT_PASSWORD = 'cannavi';
const AUTH_KEY = 'cn_authenticated';

function initPasswordProtection() {
  const passwordModal = document.getElementById('password-modal');
  const appContainer = document.getElementById('app');
  const passwordInput = document.getElementById('password-input');
  const passwordSubmit = document.getElementById('password-submit');
  const passwordError = document.getElementById('password-error');

  // 既に認証済みなら、パスワードモーダルを非表示
  if (localStorage.getItem(AUTH_KEY)) {
    passwordModal.style.display = 'none';
    appContainer.style.display = 'block';
    return;
  }

  // 認証されていない場合、アプリを非表示
  appContainer.style.display = 'none';
  passwordModal.style.display = 'flex';

  // パスワード送信ボタンのイベントリスナー
  passwordSubmit.addEventListener('click', verifyPassword);

  // Enterキーでも送信可能にする
  passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      verifyPassword();
    }
  });

  function verifyPassword() {
    const inputPassword = passwordInput.value.trim();

    if (inputPassword === CORRECT_PASSWORD) {
      // 認証成功
      localStorage.setItem(AUTH_KEY, 'true');
      passwordModal.style.display = 'none';
      appContainer.style.display = 'block';
      passwordError.textContent = '';
    } else {
      // 認証失敗
      passwordError.textContent = 'パスワードが間違っています';
      passwordInput.value = '';
      passwordInput.focus();
    }
  }
}

// DOMが読み込まれたら実行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPasswordProtection);
} else {
  initPasswordProtection();
}
