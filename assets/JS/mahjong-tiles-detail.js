// 獲取URL查詢參數中的產品名稱
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product');

// 在這裡定義產品詳細資訊
const productDetails = {
    '633精選系列-33mm(綠)': {
        image: '../assets/image/mahjong-tiles-1.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-1.jpg'],
        price: '$ 990',
        rating: '★★★★☆',
        ratingCount: '(20 評論)'
    },
    '276方玉竹皮-34mm(透白)': {
        image: '../assets/image/mahjong-tiles-2.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-2.jpg'],
        price: '$ 1,590',
        rating: '★★★★★',
        ratingCount: '(35 評論)'
    },
    '164尊品竹絲-34mm(藍田綠)': {
        image: '../assets/image/mahjong-tiles-3.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-3.jpg'],
        price: '$ 1,690',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '143東方大竹紋-34mm(灰)': {
        image: '../assets/image/mahjong-tiles-4.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-4.jpg'],
        price: '$ 1,790',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '283尊品竹絲麻將-34mm(黑)': {
        image: '../assets/image/mahjong-tiles-5.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-5.jpg'],
        price: '$ 1,890',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '192至尊竹紋-34mm (綠)': {
        image: '../assets/image/mahjong-tiles-6.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-6.jpg'],
        price: '$ 1,790',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '136東方巨無霸-36mm(藍)': {
        image: '../assets/image/mahjong-tiles-7.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-7.jpg'],
        price: '$ 1,690',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '275尊品竹絲-34mm(乳白)': {
        image: '../assets/image/mahjong-tiles-8.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-8.jpg'],
        price: '$ 1,790',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
    },
    '132東方無聲派-33mm (綠)': {
        image: '../assets/image/mahjong-tiles-9.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-9.jpg'],
        price: '$ 2,290',
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