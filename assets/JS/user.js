// 模擬用戶資料
const userData = {
  name: '123',
  email: '123@gmail.com',
  orders: [
    { id: 1, product: 'M6ⅡS極薄過山車-餐桌款', price: 35800, date: '2023-06-10' },
    { id: 2, product: 'M3ⅡS極薄過山車-含椅組合', price: 42800, date: '2023-06-12' }
  ],
  reviews: [
    { id: 1, product: 'M6ⅡS極薄過山車-餐桌款', rating: 4, comment: '非常好用的麻將桌!' },
    { id: 2, product: 'M3ⅡS極薄過山車-含椅組合', rating: 5, comment: '物超所值,值得購買。' }
  ]
};

// 渲染用戶資料
document.getElementById('user-name').textContent = userData.name;
document.getElementById('user-email').textContent = userData.email;

// 渲染消費紀錄
const orderList = document.getElementById('order-list');
userData.orders.forEach(order => {
  const li = document.createElement('li');
  li.textContent = `${order.product} - $${order.price} (${order.date})`;
  orderList.appendChild(li);
});

// 渲染評論與評分紀錄
const reviewList = document.getElementById('review-list');
userData.reviews.forEach(review => {
  const li = document.createElement('li');
  li.textContent = `${review.product} - 評分: ${review.rating}/5 (${review.comment})`;
  reviewList.appendChild(li);
});

// 編輯個人資料對話框
const modal = document.getElementById('edit-profile-modal');
const btn = document.getElementById('edit-profile');
const span = document.getElementsByClassName('close')[0];
const form = document.getElementById('edit-profile-form');

btn.onclick = function() {
  modal.style.display = 'block';
  document.getElementById('name').value = userData.name;
  document.getElementById('email').value = userData.email;
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  // 更新用戶資料
  userData.name = name;
  userData.email = email;
  // 渲染更新後的用戶資料
  document.getElementById('user-name').textContent = name;
  document.getElementById('user-email').textContent = email;
  modal.style.display = 'none';
});