const products = getAvailableProducts();
console.log(products);

function renderProducts() {
  const ulTag = document.getElementById("ul");

  products.map((product) => {
    const liTag = document.createElement("li");
    const h2Tag = document.createElement("h2");
    const p1Tag = document.createElement("p");
    const p2Tag = document.createElement("p");
    h2Tag.innerText = product.name;
    p1Tag.innerText = `Price: ${product.price}`;
    p2Tag.innerText = `Rating: ${product.rating}`;
    liTag.appendChild(h2Tag);
    liTag.appendChild(p1Tag);
    liTag.appendChild(p2Tag);
    ulTag.appendChild(liTag);
  });
}

renderProducts();
