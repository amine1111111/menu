const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "3.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
];
let sectionCenter = document.querySelector(".section-center");
let btnContainer = document.querySelector(".btn-container");
//let btns = document.querySelectorAll(".filter-btn"); 

window.addEventListener("DOMContentLoaded", _ => {
displayMenuitems(menu)
displayMenuBtns();
})









function displayMenuitems(menuItems){
  let display = menuItems.map(item => {
        
    return `<article class="menu-item">
                     <img src=${item.img}  class="photo" />
              <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                  </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
    })

    display = display.join("") ;
    sectionCenter.innerHTML = display ;
}





function displayMenuBtns(){

  let categories = menu.reduce((values, item) => {

  
    !values.includes(item.category) ? values.push(item.category) : 0;
  
    return values
  },  ["all"]
  );
  
  const categoryBtns = categories.map((category) => {
    return `<button type="button" class="filter-btn" data-id="${category}">${category} </button>`;
  })
  .join("");
  btnContainer.innerHTML = categoryBtns ;
  let btns = document.querySelectorAll(".filter-btn"); 
  
  
  btns.forEach(btn=> btn.addEventListener("click", e => {
  
    const category = e.target.dataset.id ;
  
    const menuCtegory = menu.filter( menuItem => {
      
      if(category === menuItem.category) {
        return menuItem
      }
  })
  
      category === "all" ?   displayMenuitems(menu) : displayMenuitems(menuCtegory) ;
      
  }
  
  ))
  
}