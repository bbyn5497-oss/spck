const foodsContainer = document.getElementById("foodsContainer");
const categoryList = document.getElementById("categoryList");
const categoryTitle = document.getElementById("categoryTitle");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultCount = document.getElementById("resultCount");
const loading = document.getElementById("loading");
const emptyMessage = document.getElementById("emptyMessage");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const orderNote = document.getElementById("orderNote");
const toast = document.getElementById("toast");
const orderModal = document.getElementById("orderModal");
const closeOrderModal = document.getElementById("closeOrderModal");
const continueShoppingBtn = document.getElementById("continueShoppingBtn");
const orderCode = document.getElementById("orderCode");
const orderTotal = document.getElementById("orderTotal");
const orderMessage = document.getElementById("orderMessage");
const authLink = document.getElementById("authLink");

let foods = [];
let selectedCategory = "all";
let cart = [];

const money = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function formatMoney(value) {
  return money.format(value).replace("₫", "đ");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function isLoggedIn() {
  return localStorage.getItem("isLogin") === "true";
}

function renderAuthLink() {
  if (isLoggedIn()) {
    authLink.textContent = "Đăng xuất";
    authLink.href = "#";
    authLink.classList.add("logged-in");
    return;
  }

  authLink.textContent = "Đăng nhập";
  authLink.href = "../login/login.html";
  authLink.classList.remove("logged-in");
}

function logout(event) {
  if (!isLoggedIn()) return;

  event.preventDefault();
  localStorage.setItem("isLogin", "false");
  renderAuthLink();
  showToast("Bạn đã đăng xuất.");
}

function renderCategories() {
  categoryList.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-btn ${category.id === selectedCategory ? "active" : ""}"
          data-category="${category.id}"
          type="button"
        >
          <span>${category.icon}</span>
          ${category.name}
        </button>
      `
    )
    .join("");
}

function getFilteredFoods() {
  const keyword = searchInput.value.trim().toLowerCase();

  let result = foods.filter((food) => {
    const matchCategory =
      selectedCategory === "all" || food.category === selectedCategory;
    const matchKeyword =
      food.name.toLowerCase().includes(keyword) ||
      food.description.toLowerCase().includes(keyword);

    return matchCategory && matchKeyword;
  });

  if (sortSelect.value === "price-asc") {
    result = result.sort((a, b) => a.price - b.price);
  }

  if (sortSelect.value === "price-desc") {
    result = result.sort((a, b) => b.price - a.price);
  }

  if (sortSelect.value === "rating") {
    result = result.sort((a, b) => b.rating - a.rating);
  }

  if (sortSelect.value === "popular") {
    result = result.sort((a, b) => b.sold - a.sold);
  }

  return result;
}

function renderFoods() {
  const result = getFilteredFoods();
  const currentCategory = categories.find(
    (category) => category.id === selectedCategory
  );

  categoryTitle.textContent = currentCategory
    ? currentCategory.name
    : "Tất cả món ăn";
  resultCount.textContent = `${result.length} món`;
  emptyMessage.classList.toggle("show", result.length === 0);

  foodsContainer.innerHTML = result
    .map(
      (food) => `
        <article class="food-card">
          <div class="food-image">
            <img src="${food.image}" alt="${food.name}" />
            <span>${food.tag}</span>
          </div>

          <div class="food-info">
            <div class="food-title">
              <h3>${food.name}</h3>
              <strong>${formatMoney(food.price)}</strong>
            </div>

            <p>${food.description}</p>

            <div class="food-meta">
              <span>${food.rating} điểm</span>
              <span>Đã bán ${food.sold}</span>
            </div>

            <button class="add-btn" data-id="${food.id}" type="button">
              Thêm vào giỏ
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function addToCart(foodId) {
  const food = foods.find((item) => item.id === foodId);
  const itemInCart = cart.find((item) => item.id === foodId);

  if (!food) return;

  if (itemInCart) {
    itemInCart.quantity += 1;
  } else {
    cart.push({ ...food, quantity: 1 });
  }

  renderCart();
  showToast(`Đã thêm ${food.name}`);
}

function changeQuantity(foodId, change) {
  const item = cart.find((cartItem) => cartItem.id === foodId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.id !== foodId);
  }

  renderCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="cart-empty">Chưa có món nào trong giỏ.</p>`;
    cartTotal.textContent = "0đ";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <span>${formatMoney(item.price)}</span>
          </div>

          <div class="qty-control">
            <button data-id="${item.id}" data-change="-1" type="button">-</button>
            <span>${item.quantity}</span>
            <button data-id="${item.id}" data-change="1" type="button">+</button>
          </div>
        </div>
      `
    )
    .join("");

  cartTotal.textContent = formatMoney(getCartTotal());
}

function openOrderModal(totalItems, totalPrice, note) {
  orderCode.textContent = `FH${Date.now().toString().slice(-5)}`;
  orderTotal.textContent = formatMoney(totalPrice);
  orderMessage.textContent = note
    ? `FoodHub đã nhận ${totalItems} món và ghi chú: "${note}".`
    : `FoodHub đã nhận ${totalItems} món. Cửa hàng sẽ chuẩn bị ngay.`;
  orderModal.classList.add("show");
  orderModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  orderModal.classList.remove("show");
  orderModal.setAttribute("aria-hidden", "true");
}

function checkout() {
  if (!isLoggedIn()) {
    showToast("Vui lòng đăng nhập trước khi đặt món.");

    setTimeout(() => {
      window.location.href = "../login/login.html";
    }, 900);

    return;
  }

  if (cart.length === 0) {
    showToast("Vui lòng chọn món trước khi đặt hàng.");
    return;
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getCartTotal();
  const note = orderNote.value.trim();

  openOrderModal(totalItems, totalPrice, note);
  cart = [];
  orderNote.value = "";
  renderCart();
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest(".category-btn");

  if (!button) return;

  selectedCategory = button.dataset.category;
  renderCategories();
  renderFoods();
});

foodsContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".add-btn");

  if (!button) return;

  addToCart(Number(button.dataset.id));
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  changeQuantity(Number(button.dataset.id), Number(button.dataset.change));
});

searchInput.addEventListener("input", renderFoods);
sortSelect.addEventListener("change", renderFoods);
checkoutBtn.addEventListener("click", checkout);
authLink.addEventListener("click", logout);
closeOrderModal.addEventListener("click", closeModal);
continueShoppingBtn.addEventListener("click", closeModal);
orderModal.addEventListener("click", (event) => {
  if (event.target === orderModal) closeModal();
});

async function startApp() {
  renderAuthLink();
  renderCategories();
  renderCart();
  loading.classList.add("show");

  foods = await fetchFoods();

  loading.classList.remove("show");
  renderFoods();
}

startApp();
