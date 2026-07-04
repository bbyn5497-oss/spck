const container = document.getElementById("foods-container");

container.innerHTML = foods.map(food => `
<div class="food-card">

<img src="${food.image}">
<h3>${food.name}</h3>
<p>${food.price}</p>

<button>Đặt món</button>

</div>
`).join("");