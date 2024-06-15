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
    window.location.href = `mahjong-table-detail.html?product=${encodeURIComponent(productName)}`;
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

  // 顯示加入購物車成功訊息,但不跳轉頁面
  alert(`您已將 ${productName} (${productPrice}) 加入購物車。`);
}

// 動態更改廣告文字
window.onload = function () {
  const adText = document.getElementById('ad-text');
  const ads = ['歡迎光臨麻將天地！', '最新優惠，快來購買！', '精美麻將產品等你發掘！', '加入會員，享受更多優惠！'];
  let index = 0;

  setInterval(function () {
    adText.textContent = ads[index];
    index = (index + 1) % ads.length;
  }, 3000);
};

// 輪播圖
document.addEventListener("DOMContentLoaded", function () {
  // 取得輪播容器元素
  const carousel = document.querySelector(".carousel");
  // 取得所有輪播圖片的選擇器單選按鈕
  const radios = document.querySelectorAll('input[name="slide"]');
  // 目前顯示輪播圖片的索引
  let currentIndex = 0;
  // 設定自動輪播的間隔時間為 3000 毫秒
  let autoSlideInterval = setInterval(nextSlide, 3000);

  // 顯示指定索引的輪播圖片
  function showSlide(index) {
    // 計算位移值，使指定索引的圖片顯示在輪播容器中央
    const translateValue = -index * 100 + "%";
    carousel.style.transform = "translateX(" + translateValue + ")";
    // 將對應的單選按鈕勾選上
    radios[index].checked = true;
  }

  // 切換至下一張輪播圖片
  function nextSlide() {
    // 循環更新索引，達到從最後一張跳至第一張的效果
    currentIndex = (currentIndex + 1) % carousel.children.length;
    // 顯示下一張輪播圖片
    showSlide(currentIndex);
  }

  // 切換至上一張輪播圖片
  function prevSlide() {
    // 循環更新索引，達到從第一張跳至最後一張的效果
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    // 顯示上一張輪播圖片
    showSlide(currentIndex);
  }

  // 手動控制
  // 滑鼠移入停止自動輪播
  document.querySelector(".carousel-container").addEventListener("mouseover", function () {
    clearInterval(autoSlideInterval);
  });

  // 滑鼠移出重新啟動自動輪播
  document.querySelector(".carousel-container").addEventListener("mouseout", function () {
    autoSlideInterval = setInterval(nextSlide, 3000);
  });

  // 監聽單選按鈕的變動，手動切換輪播圖片
  radios.forEach((radio, index) => {
    radio.addEventListener("change", function () {
      // 更新目前索引並顯示對應圖片
      currentIndex = index;
      showSlide(currentIndex);
      // 停止自動輪播
      clearInterval(autoSlideInterval);
      // 重新啟動自動輪播
      autoSlideInterval = setInterval(nextSlide, 3000);
    });
  });

  // 初始顯示第一張輪播圖片
  showSlide(currentIndex);
});

productItems.forEach(item => {
  const thumbnail = item.querySelector('img');
  thumbnail.addEventListener('mouseenter', () => {
    thumbnail.style.cursor = 'point';
  });
  thumbnail.addEventListener('mouseleave', () => {
    thumbnail.style.cursor = 'point';
  });
});