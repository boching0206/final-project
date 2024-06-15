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
        description: ['這款經典木質牌尺以高品質實木精製而成，手感溫潤，外觀典雅。自然的木紋和細緻的手工打磨，彰顯出古樸的氣質。無論是居家娛樂還是朋友聚會，這款牌尺都能為您的麻將遊戲增添一份優雅的氛圍。底部設計防滑墊，穩固耐用，不易滑動。'],
    },
    '輸不起牌尺': {
        image: '../assets/image/mahjong-accessories-2.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-2.jpg'],
        price: '$ 250',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款便攜折疊牌尺專為旅行和外出設計，採用輕質耐用的塑料材料製成，便於攜帶和存放。折疊設計使其在不使用時可以輕鬆收納，不佔空間。展開後穩定性強，牌面不易滑落，是您出行時的麻將好伴侶。適合經常出差和旅行的麻將愛好者。'],
    },
    '踏雪尋梅壓克力牌尺': {
        image: '../assets/image/mahjong-accessories-3.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-3.jpg'],
        price: '$ 750',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款珍藏玉石牌尺以天然玉石精雕細琢而成，每一款都展現出獨特的天然紋理和光澤，手感冰涼細膩，極具收藏價值。牌尺設計莊重典雅，為您的麻將遊戲增添一份高貴的氛圍。適合作為禮物送給麻將愛好者或作為高端收藏品。附帶高檔收納盒，提升整體質感。'],
    },
    '陶瓷籌碼（圓）盒裝（80片/盒）': {
        image: '../assets/image/mahjong-accessories-4.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-4.jpg'],
        price: '$ 1,500',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款高端陶瓷籌碼套裝專為追求品質和專業感的玩家設計。每個籌碼均由高品質陶瓷製成，重量適中，手感舒適。精美的圖案設計和鮮豔的顏色，讓您的賭局更加精彩。套裝內含500個籌碼，搭配精緻的鋁合金收納箱，便於攜帶和存放，是高端聚會和賭場愛好者的理想選擇。'],
    },
    '陶瓷方碼（50萬）': {
        image: '../assets/image/mahjong-accessories-5.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-5.jpg'],
        price: '$ 1,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款經典塑料籌碼組適合各種家庭聚會和朋友聚會使用。籌碼採用耐用的塑料材質製成，重量輕便且耐磨損。每組包含300個籌碼，配有不同顏色和面值，滿足不同遊戲需求。附帶堅固的塑料收納盒，便於整理和存放，是您居家娛樂的好幫手。'],
    },
    '摔不破方向環': {
        image: '../assets/image/mahjong-accessories-6.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-6.jpg'],
        price: '$ 170',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款竹製麻將方向環採用高品質天然竹材製成，質感細膩，外觀典雅。環面刻有清晰的東南西北字樣，便於辨識方向。耐用且環保，為您的麻將遊戲增添一份自然的氣息。附帶精緻木質收納盒，方便攜帶和存放，是麻將愛好者的理想選擇。'],
    },
    '不鏽鋼方向骰（顆）': {
        image: '../assets/image/mahjong-accessories-7.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-7.jpg'],
        price: '$ 350',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款金屬旋轉麻將方向環以高品質金屬製作，堅固耐用。精密的旋轉結構設計，使用流暢，刻有東南西北字樣，方便快速確定方向。時尚的外觀設計，提升整體遊戲體驗。附帶高級收納盒，方便整理和攜帶，是專業麻將玩家的最佳選擇。'],
    },
    '301撲克牌': {
        image: '../assets/image/mahjong-accessories-8.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-8.jpg'],
        price: '$ 275',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款高級防水撲克牌採用特殊塑料材質製成，具有優異的防水性能和耐用性。牌面設計精美，色彩鮮艷且不易褪色，手感光滑，易於洗牌。適合海灘、泳池邊或戶外活動使用，讓您無論在哪裡都能享受撲克遊戲的樂趣。附帶防水收納盒，便於攜帶和存放。'],
    },
    '塑膠德州撲克牌（大字版）': {
        image: '../assets/image/mahjong-accessories-9.jpg',
        thumbnails: ['../assets/image/mahjong-accessories-9.jpg'],
        price: '$ 840',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['這款經典紙質撲克牌以高品質紙張製成，牌面印刷清晰，色彩鮮明。採用雙層覆膜工藝，增加耐用性和手感，適合各種撲克遊戲和魔術表演使用。每副撲克牌均附帶精美的紙盒包裝，方便攜帶和存放，是家庭娛樂和朋友聚會的必備品。'],
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
messageForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單默認提交行為

    // 獲取用戶輸入的留言內容
    const message = messageInput.value.trim();

    // 如果留言不為空,則顯示成功提交訊息
    if (message !== '') {
        alert('您已成功提交留言!');
        messageInput.value = ''; // 清空留言輸入框
    }
});