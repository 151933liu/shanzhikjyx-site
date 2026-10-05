const products = [
  {
    name: "智能清洁机器人",
    category: "home",
    categoryLabel: "家居",
    price: 249,
    rating: "4.9",
    description: "适合阿拉伯家庭的高效清洁方案，智能避障，低噪音。",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    badge: "热卖"
  },
  {
    name: "高保湿修护霜",
    category: "beauty",
    categoryLabel: "美妆",
    price: 39,
    rating: "4.8",
    description: "针对干燥天气设计，深层保湿，适合中东气候环境。",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    badge: "Top"
  },
  {
    name: "电动搅拌机",
    category: "kitchen",
    categoryLabel: "厨房",
    price: 89,
    rating: "4.7",
    description: "小型家用厨房神器，便携、高效率，适合日常烹饪需求。",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    badge: "新款"
  },
  {
    name: "蓝牙无线耳机",
    category: "electronics",
    categoryLabel: "数码",
    price: 119,
    rating: "4.9",
    description: "长续航、运动轻便，可用于通勤、健身与办公场景。",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    badge: "爆款"
  },
  {
    name: "多功能厨房刀具套装",
    category: "kitchen",
    categoryLabel: "厨房",
    price: 64,
    rating: "4.8",
    description: "高端外观，适合家庭使用，兼顾实用性与展示价值。",
    image:
      "https://images.unsplash.com/photo-1592150621744-accd7ba5e6ab?auto=format&fit=crop&w=900&q=80",
    badge: "热销"
  },
  {
    name: "玻尿酸面膜套装",
    category: "beauty",
    categoryLabel: "美妆",
    price: 52,
    rating: "4.9",
    description: "深层补水、修护屏障，以清洁和保养为核心卖点。",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    badge: "必买"
  }
];

const productGrid = document.querySelector("#product-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProducts(filter = "all") {
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((item) => item.category === filter);

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
            <span class="product-badge">${product.badge}</span>
          </div>
          <div class="product-content">
            <div class="product-meta">
              <span class="product-category">${product.categoryLabel}</span>
              <span>⭐ ${product.rating}</span>
            </div>
            <h3>${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <div class="product-footer">
              <div class="price">$${product.price}<small> USD</small></div>
              <button>查看详情</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

renderProducts();
