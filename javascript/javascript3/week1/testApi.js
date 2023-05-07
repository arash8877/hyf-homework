// const jsonData = {
//   pet: "dog",
//   age: 3,
//   name: "dogy",
//   color: "white",
// };



const getAnimals = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const jsonData = await response.json();
      const imageURL = jsonData.message;
      const imageTag = document.getElementById("dog");
      imageTag.src = imageURL;
  
    } catch (error) {
      console.log(error);
    }
  };
  
  setInterval(getAnimals, 2000)