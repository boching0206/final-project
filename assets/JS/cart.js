// 購物車物品陣列
let cartItems = [];

// 獲取購物車列表容器
const cartList = document.querySelector('.container');

// 渲染購物車列表
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
          <button onclick="updateQuantity(${index}, -1)">-</button>
          ${item.quantity}
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </div>
        <div class="amount">${item.price * item.quantity}</div>
        <div class="operate">
          <button onclick="removeFromCart(${index})">刪除</button>
        </div>
      </div>
    `;
  });

  cartList.innerHTML = `
    <div class="item_header">
      <div class="item_detail">商品</div>
      <div class="price">單價</div>
      <div class="count">數量</div>
      <div class="amount">總計</div>
      <div class="operate">操作</div>
    </div>
    ${cartHTML}
  `;
}

// 更新購物車物品數量
function updateQuantity(index, count) {
  const item = cartItems[index];
  item.quantity = Math.max(1, item.quantity + count);
  renderCartList();
}

// 從購物車中移除物品
function removeFromCart(index) {
  cartItems.splice(index, 1);
  renderCartList();
}

// 添加示例購物車物品
cartItems.push(
  {
    name: 'H900-餐桌款',
    price: 26800,
    quantity: 1,
    image: '../assets/image/mahjong-tables-1.jpg'
  },
  {
    name: 'R8Ⅱ-極薄餐桌款',
    price: 29800,
    quantity: 2,
    image: '../assets/image/mahjong-tables-2.jpg'
  }
);

// 初始渲染購物車列表
renderCartList();

// 前往付款資訊頁面
function goToCheckout() {
  // 這裡可以先驗證購物車是否有商品
  if (cartItems.length === 0) {
    alert('購物車是空的,請先添加商品');
    return;
  }

  // 跳轉到checkout.html頁面
  window.location.href = 'checkout.html';
}

