const products = getAvailableProducts();

const renderProducts = () => {
  const ulTag = document.getElementById("ul");
  let filteredProducts;

  const renderFilteredProducts = () => {
    filteredProducts.forEach((product) => {
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
  };

  const searchProducts = (event) => {
    filteredProducts = products.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    // Clear previous list of products
    ulTag.innerHTML = "";

    // Render the filtered products
    renderFilteredProducts();
  };

  const findLowPrice = (event) => {
    filteredProducts = products.filter((product) => {
      return product.price <= event.target.value;
    });

    // Clear previous list of products
    ulTag.innerHTML = "";

    // Render the filtered products
    renderFilteredProducts();
  };

  const divTag = document.getElementById("search");
  const inputTag = document.createElement("input");
  inputTag.placeholder = "Search for a product";
  divTag.appendChild(inputTag);
  inputTag.addEventListener("input", searchProducts);

  const div2Tag = document.getElementById("price");
  const input2Tag = document.createElement("input");
  input2Tag.placeholder = "Set max. price";
  div2Tag.appendChild(input2Tag);
  input2Tag.addEventListener("input", findLowPrice);

  const sortByRating = () => {
    filteredProducts = products.sort((a, b) => b.rating - a.rating);
    ulTag.innerHTML = "";
    renderFilteredProducts();
  };
  
  const sortByLowPrice = () => {
    filteredProducts = products.sort((a, b) => a.price - b.price);
    ulTag.innerHTML = "";
    renderFilteredProducts();
  }

  const sortByHighPrice = () => {
    filteredProducts = products.sort((a, b) => b.price - a.price);
    ulTag.innerHTML = "";
    renderFilteredProducts();
  }

  const sortProducts = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "rating") {
      sortByRating();
    } else if (selectedOption === "low-price") {
      sortByLowPrice();
    } else if (selectedOption === "high-price") {
      sortByHighPrice();
    }
  };

  const sortSelect = document.getElementById("sort-select");
  sortSelect.addEventListener("change", sortProducts);

  // Render all products initially
  products.forEach((product) => {
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
};

renderProducts();


let iconTag = document.getElementById("icon");

iconTag.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    iconTag.src = "https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/sun-512.png"
  }else {
    iconTag.src = "https://cdn3.iconfinder.com/data/icons/meteocons/512/moon-symbol-1024.png"
  }
})
