let products = {
  data: [
    {
      productName: "Black Scarf",
      category: "Scarf",
      price: "30",
      image: "scarf.webp",
    },
    {
      productName: "Red Scarf",
      category: "Scarf",
      price: "30",
      image: "scarf2.webp",
    },
    {
      productName: "Black T-Shirt",
      category: "T-Shirt",
      price: "49",
      image: "TShirt.webp",
    },
    {
      productName: "Blue T-Shirt",
      category: "T-Shirt",
      price: "79",
      image: "TShirt2.jpg",
    },
    {
      productName: "Black Pants",
      category: "Pants",
      price: "99",
      image: "Pants.webp",
    },
    {
      productName: "Black (Type2) Pants",
      category: "Pants",
      price: "109",
      image: "Pants2.webp",
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

  document.getElementById("products");
}
