const products = [
  {
    id: 1,
    name: '智能清洁机器人',
    category: 'home',
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    reviews: 2450,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80',
    badge: '热卖'
  },
  {
    id: 2,
    name: '高保湿修护霜',
    category: 'beauty',
    price: 39,
    originalPrice: 49,
    rating: 4.8,
    reviews: 1820,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80',
    badge: 'Top'
  },
  {
    id: 3,
    name: '电动搅拌机',
    category: 'kitchen',
    price: 89,
    originalPrice: 119,
    rating: 4.7,
    reviews: 980,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80',
    badge: '新款'
  },
  {
    id: 4,
    name: '蓝牙无线耳机',
    category: 'electronics',
    price: 119,
    originalPrice: 159,
    rating: 4.9,
    reviews: 3150,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80',
    badge: '爆款'
  },
  {
    id: 5,
    name: '多功能厨房刀具套装',
    category: 'kitchen',
    price: 64,
    originalPrice: 89,
    rating: 4.8,
    reviews: 650,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1592150621744-accd7ba5e6ab?auto=format&fit=crop&w=400&q=80',
    badge: '热销'
  },
  {
    id: 6,
    name: '玻尿酸面膜套装',
    category: 'beauty',
    price: 52,
    originalPrice: 69,
    rating: 4.9,
    reviews: 2100,
    stock: 89,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=400&q=80',
    badge: '必买'
  },
  {
    id: 7,
    name: '便携式USB风扇',
    category: 'electronics',
    price: 29,
    originalPrice: 39,
    rating: 4.6,
    reviews: 540,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1572365992253-3cb3e56dd362?auto=format&fit=crop&w=400&q=80',
    badge: '促销'
  },
  {
    id: 8,
    name: '婴儿护肤套装',
    category: 'mother',
    price: 45,
    originalPrice: 59,
    rating: 4.8,
    reviews: 890,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4d4b3f0?auto=format&fit=crop&w=400&q=80',
    badge: '安心'
  },
  {
    id: 9,
    name: '智能温度计',
    category: 'electronics',
    price: 32,
    originalPrice: 42,
    rating: 4.7,
    reviews: 420,
    stock: 3,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
    badge: '库存少'
  },
  {
    id: 10,
    name: '收纳盒套装',
    category: 'home',
    price: 28,
    originalPrice: 38,
    rating: 4.6,
    reviews: 730,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80',
    badge: '热销'
  },
  {
    id: 11,
    name: '洁面仪',
    category: 'beauty',
    price: 76,
    originalPrice: 99,
    rating: 4.8,
    reviews: 1250,
    stock: 42,
    image: 'https://images.unsplash.com/photo-1631730486211-cbb2c70f6581?auto=format&fit=crop&w=400&q=80',
    badge: '美妆'
  },
  {
    id: 12,
    name: '水杯热水瓶',
    category: 'home',
    price: 35,
    originalPrice: 45,
    rating: 4.7,
    reviews: 890,
    stock: 78,
    image: 'https://images.unsplash.com/photo-1497636577773-f1231844b47b?auto=format&fit=crop&w=400&q=80',
    badge: '实用'
  }
];

let cart = [];
let currentCarouselIndex = 0;

function initCarousel() {
  const dotsContainer = document.querySelector('.carousel-dots');
  [0, 1, 2].forEach((index) => {
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });

  document.querySelector('.carousel-prev').onclick = prevSlide;
  document.querySelector('.carousel-next').onclick = nextSlide;

  setInterval(autoSlide, 5000);
}

function showSlide(index) {
  const items = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');

  items.forEach((item) => item.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  items[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentCarouselIndex = (currentCarouselIndex + 1) % 3;
  showSlide(currentCarouselIndex);
}

function prevSlide() {
  currentCarouselIndex = (currentCarouselIndex - 1 + 3) % 3;
  showSlide(currentCarouselIndex);
}

function goToSlide(index) {
  currentCarouselIndex = index;
  showSlide(currentCarouselIndex);
}

function autoSlide() {
  nextSlide();
}

function renderProducts(filteredProducts = products) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
            <span class="product-badge">${product.badge}</span>
          </div>
          <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span>${product.rating}</span>
              <span>(${product.reviews})</span>
            </div>
            <div class="product-price">
              <span class="current-price">$${product.price}</span>
              <span class="original-price">$${product.originalPrice}</span>
            </div>
            <div class="product-stock ${product.stock < 10 ? 'low' : ''}">
              ${product.stock > 0 ? `库存: ${product.stock}件` : '缺货'}
            </div>
            <div class="product-actions">
              <button class="btn-cart" onclick="addToCart(${product.id}, '${product.name}')">
                加入购物车
              </button>
              <button class="btn-wishlist" onclick="addToWishlist()">❤️</button>
            </div>
          </div>
        </div>
      `
    )
    .join('');
}

function renderFlashDeal() {
  const grid = document.getElementById('flash-grid');
  const flashProducts = products.slice(0, 6);
  grid.innerHTML = flashProducts
    .map(
      (product) => `
        <div class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
            <span class="product-badge">${product.badge}</span>
          </div>
          <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
              <span class="current-price">$${product.price}</span>
              <span class="original-price">$${product.originalPrice}</span>
            </div>
            <button class="btn-cart" onclick="addToCart(${product.id}, '${product.name}')">
              立即抢购
            </button>
          </div>
        </div>
      `
    )
    .join('');
}

function addToCart(productId, productName) {
  cart.push(productId);
  updateCartCount();
  showCartPopup(productName);
}

function updateCartCount() {
  document.querySelector('.cart-count').textContent = cart.length;
}

function showCartPopup(productName) {
  const popup = document.getElementById('cartPopup');
  document.getElementById('cartMessage').textContent = `${productName} 已加入购物车`;
  popup.classList.add('show');
  setTimeout(() => {
    popup.classList.remove('show');
  }, 2000);
}

function closeCartPopup() {
  document.getElementById('cartPopup').classList.remove('show');
}

function addToWishlist() {
  const count = parseInt(document.querySelector('.wishlist-count').textContent) + 1;
  document.querySelector('.wishlist-count').textContent = count;
}

document.querySelectorAll('.nav-item').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;
    const filtered =
      category === 'all' ? products : products.filter((p) => p.category === category);
    renderProducts(filtered);
  });
});

document.querySelectorAll('.sort-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sort-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const sort = btn.dataset.sort;
    let sorted = [...products];

    if (sort === 'new') {
      sorted.reverse();
    } else if (sort === 'price-low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      sorted.sort((a, b) => b.price - a.price);
    }

    renderProducts(sorted);
  });
});

initCarousel();
renderFlashDeal();
renderProducts();
updateCartCount();
