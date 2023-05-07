const inputTag = document.getElementById("input");
const buttonTag = document.getElementById("search");
const gifContainer = document.getElementById("gif-container");
const gifHome = document.getElementById("gif");

const getGif = async (event) => {
  event.preventDefault();
  const inputWord = inputTag.value;
  try {
    const gifData = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=4yuK4dsvVSfDiN1Fb1uCV8AONV0AgkSu&q=${inputWord}&limit=10&offset=0&rating=g&lang=en`
    );
    const response = await gifData.json();
    console.log(response);
    const dataArray = response.data;
    gifContainer.innerHTML = "";
    dataArray.forEach((item) => {
      const element = document.createElement("img");
      element.src = item.images.original.url;
      gifContainer.appendChild(element);
    });
    const gifUrl = response.data.url;
    gifHome.src = gifUrl;
  } catch (error) {
    console.log(error);
  }
};

buttonTag.addEventListener("click", getGif);
