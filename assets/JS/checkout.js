const customerForm = document.getElementById('customer-form');
const submitOrderBtn = document.getElementById('submit-order');
const cartItemsContainer = document.querySelector('.cart-items');
const totalAmountValue = document.getElementById('total-amount-value');

// 計算購物車總金額
function calculateTotalAmount() {
  let total = 0;
  cartItems.forEach(item => {
    total += item.price * item.quantity;
  });
  return total;
}

// 渲染購物車商品列表
function renderCartList() {
  let cartHTML = '';

  // 遍歷購物車物品
  cartItems.forEach((item, index) => {
    cartHTML += `
      <div class="item_body">
        <div class="item_detail">
          <img src="${item.image}" alt="${item.name}">
          <div class="name">${item.name}</div>
        </div>
        <div class="price"><span>$</span>${item.price}</div>
        <div class="count">
          ${item.quantity}
        </div>
        <div class="amount">${item.price * item.quantity}</div>
      </div>
    `;
  });

  cartItemsContainer.innerHTML = cartHTML;

  // 更新總金額
  const totalAmount = calculateTotalAmount();
  totalAmountValue.textContent = `$${totalAmount}`;
}

customerForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

submitOrderBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    // 在這裡可以進行表單驗證

    // 提交訂單
    submitOrder(name, email, address, payment);
});

function submitOrder(name, email, address, payment) {
    // 在這裡可以實現提交訂單的邏輯,例如發送 AJAX 請求到服務器
    console.log(`訂單已提交:
        姓名: ${name}
        電子郵件: ${email}
        地址: ${address}
        付款方式: ${payment}
    `);

    // 顯示訂單已送出的訊息,並在點擊確定後跳回購物車頁面
    if (confirm('訂單已送出,感謝您的購買! 點擊確定返回購物車')) {
        window.location.href = 'cart.html';
    }
}

// 初始渲染購物車列表
renderCartList();