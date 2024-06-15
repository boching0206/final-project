// 取得所有產品縮圖元素
const productItems = document.querySelectorAll('.product-item');
// 取得要更新資訊的元素
const productName = document.querySelector('.product-info .product-name');
const productDescription = document.getElementById('product-detail-container');
const productPrice = document.querySelector('.product-info .product-price');
const mainImage = document.querySelector('.main-img');
const addToCartButton = document.querySelector('.add-to-cart');
// 為每個產品項目添加點擊事件監聽器
productItems.forEach(item => {
  const thumbnail = item.querySelector('img');
  thumbnail.addEventListener('click', () => {
    const productName = item.dataset.product;
    window.location.href = `mahjong-tiles-detail.html?product=${encodeURIComponent(productName)}`;
  });
});


// 獲取所有「加入購物車」按鈕
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// 為每個「加入購物車」按鈕添加點擊事件監聽器
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡
    const productItem = button.parentElement;
    const productName = productItem.querySelector('.product-name').textContent;
    const productPrice = productItem.querySelector('.product-price').textContent;

    // 執行添加到購物車的操作
    addToCart(productName, productPrice);
  });
});

// 添加到購物車的函數
function addToCart(productName, productPrice) {
  // 您可以在這裡實現添加到購物車的具體操作
  alert(`您已將 ${productName} (${productPrice}) 加入購物車。`);
}


