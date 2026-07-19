const categories = [
  { id: "all", name: "Tất cả", icon: "All" },
  { id: "fastfood", name: "Đồ ăn nhanh", icon: "Fast" },
  { id: "family", name: "Món gia đình", icon: "Home" },
  { id: "rice", name: "Cơm và bún", icon: "Rice" },
  { id: "drink", name: "Đồ uống", icon: "Drink" },
  { id: "dessert", name: "Tráng miệng", icon: "Sweet" },
  { id: "healthy", name: "Healthy", icon: "Fresh" },
  { id: "combo", name: "Combo tiết kiệm", icon: "Combo" },
];

const mockFoods = [
  {
    id: 1,
    name: "Burger bò phô mai",
    category: "fastfood",
    price: 55000,
    rating: 4.8,
    sold: 124,
    tag: "Bán chạy",
    description: "Bò nướng, phô mai, rau tươi và sốt đặc biệt.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Pizza hải sản",
    category: "fastfood",
    price: 125000,
    rating: 4.7,
    sold: 88,
    tag: "Nhiều topping",
    description: "Tôm, mực, phô mai mozzarella và sốt cà chua.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Gà rán giòn cay",
    category: "fastfood",
    price: 69000,
    rating: 4.6,
    sold: 143,
    tag: "Giòn nóng",
    description: "Miếng gà lớn, vỏ giòn và vị cay vừa.",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Cơm gia đình 3 món",
    category: "family",
    price: 149000,
    rating: 4.9,
    sold: 76,
    tag: "Cho 2-3 người",
    description: "Cơm trắng, món mặn, món xào và canh nóng.",
    image:
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Cá kho tộ",
    category: "family",
    price: 79000,
    rating: 4.8,
    sold: 67,
    tag: "Đậm vị",
    description: "Cá kho tiêu, nước sốt sánh và cơm trắng.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Cơm gà xối mỡ",
    category: "rice",
    price: 59000,
    rating: 4.5,
    sold: 112,
    tag: "No bụng",
    description: "Gà da giòn, cơm vàng và rau ăn kèm.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "Bún bò Huế",
    category: "rice",
    price: 65000,
    rating: 4.7,
    sold: 91,
    tag: "Nước dùng ngon",
    description: "Bún, thịt bò, chả và nước dùng cay thơm.",
    image:
      "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Salad ức gà",
    category: "healthy",
    price: 72000,
    rating: 4.6,
    sold: 54,
    tag: "Ít dầu mỡ",
    description: "Ức gà áp chảo, rau xanh, bắp và sốt mè rang.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "Trà sữa trân châu",
    category: "drink",
    price: 39000,
    rating: 4.5,
    sold: 165,
    tag: "Best seller",
    description: "Trà sữa thơm béo, trân châu mềm dai.",
    image:
      "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10,
    name: "Nước ép cam",
    category: "drink",
    price: 35000,
    rating: 4.4,
    sold: 58,
    tag: "Tươi mát",
    description: "Cam vắt nguyên chất, có thể chọn ít đá.",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 11,
    name: "Bánh flan caramel",
    category: "dessert",
    price: 29000,
    rating: 4.6,
    sold: 73,
    tag: "Mềm mịn",
    description: "Flan trứng sữa, caramel thơm nhẹ.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 12,
    name: "Combo burger và nước",
    category: "combo",
    price: 79000,
    rating: 4.8,
    sold: 109,
    tag: "Tiết kiệm",
    description: "Một burger bò, khoai tây và nước ngọt.",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=700&q=80",
  },
];

function fetchFoods() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFoods);
    }, 800);
  });
}
