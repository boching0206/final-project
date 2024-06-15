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
        ratingCount: '(20 評論)',
        description: ['這款經典款麻將牌採用高品質樹脂材質製成，手感溫潤，質地堅硬耐磨。牌面設計傳統、字跡清晰，確保每次摸牌都能帶來經典的遊戲體驗。無論是家庭聚會還是好友相聚，都是不二選擇。附精美便攜盒，方便攜帶與收納。'],
    },
    '276方玉竹皮-34mm(透白)': {
        image: '../assets/image/mahjong-tiles-2.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-2.jpg'],
        price: '$ 1,590',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款高級豪華款麻將牌精選天然玉石材質，質感非凡，每一張牌都經過精心打磨與拋光，光滑細膩。牌面採用雕刻工藝，圖案生動，字跡清晰。適合高端聚會和專業比賽使用，彰顯您的品味與檔次。附高級木質收納盒，提升整體質感。'],
    },
    '164尊品竹絲-34mm(藍田綠)': {
        image: '../assets/image/mahjong-tiles-3.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-3.jpg'],
        price: '$ 1,690',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款新潮創意款麻將牌採用大膽的色彩和時尚的圖案設計，打破傳統，讓您在遊戲中展現個性與創意。材料選用高強度樹脂，耐磨損，使用壽命長。非常適合年輕一代和喜歡新鮮事物的麻將愛好者。附創意包裝盒，極具收藏價值。'],
    },
    '143東方大竹紋-34mm(灰)': {
        image: '../assets/image/mahjong-tiles-4.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-4.jpg'],
        price: '$ 1,790',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款旅行便攜款麻將牌專為旅行設計，採用輕質塑膠材質製成，方便攜帶。牌面設計緊湊，字跡清晰，雖然體積小巧，但不失去遊戲樂趣。附帶便攜包，讓您在旅途中也能隨時享受麻將帶來的歡樂時光。'],
    },
    '283尊品竹絲麻將-34mm(黑)': {
        image: '../assets/image/mahjong-tiles-5.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-5.jpg'],
        price: '$ 1,890',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款復古陶瓷麻將牌選用優質陶瓷材質，手感厚重，質地細膩。牌面圖案和字體設計復古典雅，讓您彷彿置身於古代的麻將對局之中。適合收藏和高端娛樂使用。附帶復古木質收納盒，提升整體質感，讓每一次遊戲都成為藝術享受。'],
    },
    '192至尊竹紋-34mm (綠)': {
        image: '../assets/image/mahjong-tiles-6.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-6.jpg'],
        price: '$ 1,790',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款創意彩色麻將牌以鮮豔的色彩和時尚的圖案設計打破傳統，讓您在遊戲中展現個性與創意。高強度樹脂材質，耐磨損，使用壽命長。非常適合年輕一代和喜愛新鮮事物的麻將愛好者。附帶創意包裝盒，既美觀又實用。'],
    },
    '136東方巨無霸-36mm(藍)': {
        image: '../assets/image/mahjong-tiles-7.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-7.jpg'],
        price: '$ 1,690',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款旅行便攜麻將牌專為旅行設計，選用輕質塑料製作，體積小巧但字跡清晰，方便隨身攜帶。附帶便攜包，讓您無論身處何地都能隨時享受麻將遊戲的樂趣。是旅行愛好者和經常出差人士的最佳選擇。'],
    },
    '275尊品竹絲-34mm(乳白)': {
        image: '../assets/image/mahjong-tiles-8.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-8.jpg'],
        price: '$ 1,790',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款玉石高端麻將牌採用天然玉石製作，每張牌都經過精心雕琢與打磨，光滑細膩，手感極佳。牌面設計古典優雅，適合高端聚會和專業比賽使用，展現您獨特的品味與檔次。附帶豪華木質收納盒，提升整體質感，堪稱藝術品。'],
    },
    '132東方無聲派-33mm (綠)': {
        image: '../assets/image/mahjong-tiles-9.jpg',
        thumbnails: ['../assets/image/mahjong-tiles-9.jpg'],
        price: '$ 2,290',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款經典竹製麻將牌以高品質天然竹材精製而成，牌面雕刻細膩，字跡清晰，手感輕盈而不失堅固。竹子的天然質感與精美的雕刻工藝相得益彰，是家庭聚會和好友相聚的理想選擇。附帶精緻收納盒，方便攜帶和存放。'],
    }
};


// 獲取需要更新的元素
const mainImage = document.querySelector('.main-img');
const thumbnailsContainer = document.querySelector('.product-thumbnails');
const productNameElement = document.querySelector('.product-name');
const productPriceElement = document.querySelector('.product-price');
const productRatingElement = document.querySelector('.rating-stars');
const productRatingCountElement = document.querySelector('.rating-count');
const productDescriptionElement = document.querySelector('.product-description');
const addToCartButton = document.querySelector('.add-to-cart');

// 更新產品詳細資訊
if (productDetails[productName]) {
    const product = productDetails[productName];
    mainImage.src = product.image;
    productNameElement.textContent = productName;
    productPriceElement.textContent = product.price;
    productRatingElement.textContent = product.rating;
    productRatingCountElement.textContent = product.ratingCount;
    productDescriptionElement.textContent = product.description;

    // 清空原有的描述內容
    productDescriptionElement.innerHTML = '';

    // 使用無序列表呈現條列式描述
    const descriptionList = document.createElement('ul');
    product.description.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        descriptionList.appendChild(listItem);
    });
    productDescriptionElement.appendChild(descriptionList);

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
}
else {
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
// 獲取 form 和 messageInput 元素
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');

// 監聽表單提交事件
messageForm.addEventListener('submit', function (event) {
    event.preventDefault(); // 防止表單默認提交行為

    // 獲取用戶輸入的留言內容
    const message = messageInput.value.trim();

    // 如果留言不為空,則顯示成功提交訊息
    if (message !== '') {
        alert('您已成功提交留言!');
        messageInput.value = ''; // 清空留言輸入框
    }
});