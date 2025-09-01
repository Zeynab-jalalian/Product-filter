let products = {
  data: [
    {
      productName: "Black Scarf",
      category: "Scarf",
      price: "30",
      image: "img/scarf.webp",
    },
    {
      productName: "Red Scarf",
      category: "Scarf",
      price: "30",
      image: "img/Scarf2.webp",
    },
    {
      productName: "Black T-Shirt",
      category: "T-Shirt",
      price: "49",
      image: "img/TShirt.webp",
    },
    {
      productName: "Blue T-Shirt",
      category: "T-Shirt",
      price: "79",
      image: "img/TShirt2.jpg",
    },
    {
      productName: "Black Pants",
      category: "Pants",
      price: "99",
      image: "img/Pants.webp",
    },
    {
      productName: "Black (Type2) Pants",
      category: "Pants",
      price: "109",
      image: "img/Pants2.webp",
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements=document.querySelectorAll(".card");
  elements.forEach(element=>{
    if(value == "All"){
        element.classList.remove("hide");
    }else{
        if(element.classList.contains(value)){
            element.classList.remove("hide");
        }
        else{
            element.classList.add("hide");
        }
    }
  })
}

document.getElementById("search").addEventListener("click",()=>{
    let searchInput=document.getElementById("search-input").value;
    let product_name=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");

    product_name.forEach((pn,index)=>{
        if(pn.innerText.includes(searchInput.toUpperCase())){
             cards[index].classList.remove("hide");
        }else{
            cards[index].classList.add("hide");
        }
    })
})

window.onload = () => {
  filterProduct("All");
};
