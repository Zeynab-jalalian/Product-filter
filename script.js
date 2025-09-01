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
      image: "img/scarf2.webp",
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
  card.classList.add("card", i.category);

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

  let price=document.createElement("h6");
  price.innerText="$"+i.price;
  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("products").appendChild(card);
}
