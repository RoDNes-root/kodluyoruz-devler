// Yemek menusu listesi
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "rsm/rsm1.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "rsm/rsm3.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "rsm/rsm7.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "rsm/rsm9.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "rsm/rsm4.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "rsm/rsm5.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "rsm/rsm6.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "rsm/rsm2.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "rsm/rsm8.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// DOM seçimi
const buttonDOM = document.querySelector(".btn-container");
const menuDOM = document.querySelector(".section-center");

// Butonları oluşturma
const createButtons = () => {
  let allButtons = `
    <button id="all" class="btn btn-outline-dark btn-item" type="button">
      All
    </button>
    <button id="korea" class="btn btn-outline-dark btn-item" type="button">
      Korea
    </button>
    <button id="japan" class="btn btn-outline-dark btn-item" type="button">
      Japan
    </button>
    <button id="china" class="btn btn-outline-dark btn-item" type="button">
      China
    </button>
  `
  buttonDOM.innerHTML = allButtons;
}
createButtons();
// Yemekleri oluşturma yazma
const createFoods = (food) => {
  let html = `
    <div class="menu-items col-lg-6 col-sm-12">
      <img class="photo" src="${food.img}" alt="${food.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${food.title}</h4>
          <h4 class="price">${food.price}</h4>
        </div>
        <div class="menu-text">${food.desc}</div>
      </div>
    </div>  
  `
  return html;
}
// Hepsini listeleme
const listAllFoods = () => {
  let allFoods="";

  menu.map(item => {
    allFoods += createFoods(item)
  })
  menuDOM.innerHTML = allFoods;
}
document.addEventListener("DOMContentLoaded",listAllFoods);

// Çin yemeklerini listeleme
const listChinaFoods = () => {
  let chinaFoods="";

  menu.map(item => {
    if(item.category === "China"){
      chinaFoods += createFoods(item)
    }
  })
  menuDOM.innerHTML = chinaFoods;
}
// Japon yemeklerini listeleme
const listJapanFoods = () => {
  let japanFoods="";

  menu.map(item => {
    if(item.category === "Japan"){
      japanFoods += createFoods(item)
    }
  })
  menuDOM.innerHTML = japanFoods;
}
// kore yemeklerini listeleme
const listKoreaFoods = () => {
  let koreaFoods="";

  menu.map(item => {
    if(item.category === "Korea"){
      koreaFoods += createFoods(item)
    }
  })
  menuDOM.innerHTML = koreaFoods;
}
// Butonlara event listener ekleme 
document.querySelector("#korea").addEventListener("click",listKoreaFoods);
document.querySelector("#japan").addEventListener("click",listJapanFoods);
document.querySelector("#all").addEventListener("click",listAllFoods);
document.querySelector("#china").addEventListener("click",listChinaFoods);