const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//menülerin ülkelere göre ayrılması

let china = menu.filter(menu=>{
  if(menu.category === "China"){
    return menu;
  }
});

let japan = menu.filter(menu=>{
  if(menu.category === "Japan"){
    return menu;
  }
});

let korea = menu.filter(menu=>{
  if(menu.category === "Korea"){
    return menu;
  }
});
let butonDiv = document.querySelector("#btnCon");


document.addEventListener("DOMContentLoaded", ekran);



function ekran(){

  //butonlar
  let btnAll=document.createElement("button");
  btnAll.classList.add("btn-item","btn","btn-outline-dark");
  btnAll.innerHTML = "All";
  butonDiv.append(btnAll);

  let btnKorea=document.createElement("button");
  btnKorea.classList.add("btn-item","btn","btn-outline-dark");
  btnKorea.innerHTML = "Korea";
  butonDiv.append(btnKorea);
  
  let btnJapan=document.createElement("button");
  btnJapan.classList.add("btn-item","btn","btn-outline-dark");
  btnJapan.innerHTML = "Japan";
  butonDiv.append(btnJapan);
  
  let btnChina=document.createElement("button");
  btnChina.classList.add("btn-item","btn","btn-outline-dark");
  btnChina.innerHTML = "China";
  butonDiv.append(btnChina);

  btnAll.addEventListener("click", allMenu);
  btnKorea.addEventListener("click", koreaMenu);
  btnJapan.addEventListener("click", japanMenu);
  btnChina.addEventListener("click", chinaMenu);
  let menuDiv = document.querySelector("#photo");

  allMenu();

  function allMenu(){
    menuDiv.innerHTML = "";
    menu.forEach(menu=>{
      createMenu(menu.img,menu.title,menu.price,menu.desc);
    })
  }

  function koreaMenu(){
    menuDiv.innerHTML = "";
    korea.forEach(menu=>{
      createMenu(menu.img,menu.title,menu.price,menu.desc);
    })
  }

  function japanMenu(){
    menuDiv.innerHTML = "";
    japan.forEach(menu=>{
      createMenu(menu.img,menu.title,menu.price,menu.desc);
    })
  }

  function chinaMenu(){
    menuDiv.innerHTML = "";
    china.forEach(menu=>{
      createMenu(menu.img,menu.title,menu.price,menu.desc);
    })
  }

  //MENU OLUŞTURMA FONKSİYONU

  function createMenu(photo,baslik,fiyat,aciklama){

    let menuDiv = document.querySelector("#photo");

    let menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");
    

    let photos = document.createElement("img");
    photos.classList.add("photo");
    photos.src = `${photo}`;
   

    let menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");
    

    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    

    let h4Baslik = document.createElement("h4");
    h4Baslik.innerText = `${baslik}`;
    

    let h4Fiyat = document.createElement("h4");
    h4Fiyat.innerText = `${fiyat}`;
    

    let menuText = document.createElement("p");
    menuText.classList.add("menu-text");
    menuText.innerText = `${aciklama}`;

    menuTitle.appendChild(h4Baslik);
    menuTitle.appendChild(h4Fiyat);
    menuInfo.appendChild(menuTitle);
    menuInfo.appendChild(menuText);
    menuItems.appendChild(photos);
    menuItems.appendChild(menuInfo);
    menuDiv.appendChild(menuItems);

  }
  
  
}
