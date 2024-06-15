// 登入表單處理函式
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // 在這裡進行登入驗證邏輯
    console.log('登入使用者:', username, password);
  });
}

// 註冊表單處理函式
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    // 在這裡進行註冊驗證邏輯
    console.log('註冊使用者:', username, email, password, confirmPassword);
  });
}