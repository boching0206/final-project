// 獲取URL查詢參數中的產品名稱
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product');

// 在這裡定義產品詳細資訊
const productDetails = {
    'H900-餐桌款': {
        image: '../assets/image/mahjong-tables-1.jpg',
        thumbnails: ['../assets/image/mahjong-tables-1.jpg'],
        price: '$ 26,800',
        rating: '★★★★☆',
        ratingCount: '(20 評論)',
        description: ['保固期:一年(核心馬達終身保固)', '獨家販售-內崁式桌燈-實用性極高', '防潮防濕-配置熱風除濕系統'],
    },
    'R8Ⅱ-極薄餐桌款': {
        image: '../assets/image/mahjong-tables-2.jpg',
        thumbnails: ['../assets/image/mahjong-tables-2.jpg'],
        price: '$ 29,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['保固期:一年(核心馬達終身保固)', '業界獨家專利-極薄桌款-極薄機身-空間大增', '冷熱風雙除濕功能-麻將不濕黏'],
    },
    'X2Ⅱ-餐桌款': {
        image: '../assets/image/mahjong-tables-3.jpg',
        thumbnails: ['../assets/image/mahjong-tables-3.jpg'],
        price: '$ 18,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['保固期:一年(核心馬達終身保固)', '可收式折疊款-讓您使用及收納上更為方便', '配置除濕系統-洗牌自動吹冷風']
    },
    'M2Ⅱ極薄過山車-餐桌款': {
        image: '../assets/image/mahjong-tables-4.jpg',
        thumbnails: ['../assets/image/mahjong-tables-4.jpg'],
        price: '$ 36,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['保固期:一年(核心馬達終身保固', '內部結構-強化塑鋼鍊條-耐磨耐熱靜音', '*極薄*機身設計-空間大大提升']
    },
    'A2Ⅱ-折疊款': {
        image: '../assets/image/mahjong-tables-5.jpg',
        thumbnails: ['../assets/image/mahjong-tables-5.jpg'],
        price: '$ 18,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['保固期:一年(核心馬達終身保固)', '可收式折疊款-讓您使用及收納上更為方便', '配置除濕系統-洗牌自動吹冷風']
    },
    '茶韻-奢華餐桌款': {
        image: '../assets/image/mahjong-tables-6.jpg',
        thumbnails: ['../assets/image/mahjong-tables-6.jpg'],
        price: '$ 46,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['保固期:三年(核心馬達終身保固)', '最新技術-科技木製造-看似原木質感-卻不變形', '業界獨家專利-超薄桌款-超薄機身-空間大增']
    },
    'M6ⅡS極薄過山車-餐桌款': {
        image: '../assets/image/mahjong-tables-7.jpg',
        thumbnails: ['../assets/image/mahjong-tables-7.jpg'],
        price: '$ 35,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['保固期:三年(核心馬達終身保固)', 'LED桌框燈-可獨立調控', '精密鐘錶齒輪-上牌結構-最穩定耐用', '新增電子靜音骰功能']
    },
    'M3ⅡS極薄過山車-含椅組合': {
        image: '../assets/image/mahjong-tables-8.jpg',
        thumbnails: ['../assets/image/mahjong-tables-8.jpg'],
        price: '$ 42,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['保固期:三年(核心馬達終身保固)', 'LED桌框燈-可獨立調控', '精密鐘錶齒輪上牌結構-最穩定耐用', '冷熱風雙除濕功能-麻將不濕黏']
    },
    'M3ⅡS極薄過山車-折疊款': {
        image: '../assets/image/mahjong-tables-9.jpg',
        thumbnails: ['../assets/image/mahjong-tables-9.jpg'],
        price: '$ 32,800',
        rating: '★★★★★',
        ratingCount: '(35 評論)',
        description: ['升級S版:四邊獨立調控-LED桌燈', '三年完整保固-給您安心有保障', '雙模骰控制盤-新增電子靜音骰功能', '冷熱風雙除濕功能-麻將不濕黏', '最新進化-洗牌超靜音-娛樂同時不擾鄰']
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