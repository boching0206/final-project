// 獲取URL查詢參數中的產品名稱
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product');

// 在這裡定義產品詳細資訊
const productDetails = {
    '金運加身不倒翁牌尺': {
        image: '../assets/image/mahjong-accessories-1.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-1.jpg'],
        price: '$ 250',
        rating: '★★★★☆',
        ratingCount: '(20 評論)',
    },
    '輸不起牌尺': {
        image: '../assets/image/mahjong-accessories-2.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-2.jpg'],
        price: '$ 250',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '踏雪尋梅壓克力牌尺': {
        image: '../assets/image/mahjong-accessories-3.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-3.jpg'],
        price: '$ 750',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '陶瓷籌碼（圓）盒裝（80片/盒）': {
        image: '../assets/image/mahjong-accessories-4.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-4.jpg'],
        price: '$ 1,500',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '陶瓷方碼（50萬）': {
        image: '../assets/image/mahjong-accessories-5.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-5.jpg'],
        price: '$ 1,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '摔不破方向環': {
        image: '../assets/image/mahjong-accessories-6.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-6.jpg'],
        price: '$ 170',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '不鏽鋼方向骰（顆）': {
        image: '../assets/image/mahjong-accessories-7.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-7.jpg'],
        price: '$ 350',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '301撲克牌': {
        image: '../assets/image/mahjong-accessories-8.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-8.jpg'],
        price: '$ 275',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '塑膠德州撲克牌（大字版）': {
        image: '../assets/image/mahjong-accessories-9.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-9.jpg'],
        price: '$ 840',
        rating: '★★★★★',
        ratingCount: '(35 評論)'
    }
};


// 獲取需要更新的元素
const mainImage = document.querySelector('.main-img');
const thumbnailsContainer = document.querySelector('.product-thumbnails');
const productNameElement = document.querySelector('.product-name');
const productPriceElement = document.querySelector('.product-price');
const productRatingElement = document.querySelector('.rating-stars');
const productRatingCountElement = document.querySelector('.rating-count');
const addToCartButton = document.querySelector('.add-to-cart');

// 更新產品詳細資訊
if (productDetails[productName]) {
    const product = productDetails[productName];
    mainImage.src = product.image;
    productNameElement.textContent = productName;
    productPriceElement.textContent = product.price;
    productRatingElement.textContent = product.rating;
    productRatingCountElement.textContent = product.ratingCount;

    // 生成縮圖
    product.thumbnails.forEach(thumbnail => {
        const thumbnailElement = document.createElement('img');
        thumbnailElement.src = thumbnail;
        thumbnailElement.classList.add('product-thumbnail');
        thumbnailsContainer.appendChild(thumbnailElement);
    });

    // 為「加入購物車」按鈕添加點擊事件監聽器
    addToCartButton.addEventListener('click', () => {
        const quantity = document.querySelector('.quantity').value;
        addToCart(productName, product.price, quantity);
    });
} else {
    // 如果沒有找到產品詳細資訊,顯示錯誤訊息
    productNameElement.textContent = '產品不存在';
}

// 購物車相關操作
let cart = [];

function addToCart(productName, productPrice, quantity) {
    const item = {
        name: productName,
        price: productPrice,
        quantity: parseInt(quantity)
    };

    // 檢查購物車中是否已經存在該商品
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === productName);
    if (existingItemIndex !== -1) {
        // 如果已存在,更新數量
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        // 如果不存在,添加新項目
        cart.push(item);
    }

    // 顯示購物車內容
    console.log('購物車內容:', cart);
    alert(`您已將 ${item.quantity} 件 ${productName} (${productPrice}) 加入購物車。`);
}