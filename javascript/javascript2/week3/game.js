const btnTag = document.getElementById("btn");
const inputTag = document.getElementById("input");
const sNumberTag = document.getElementById("sNumber");
const lNumberTag = document.getElementById("lNumber");
const sideS = document.getElementById("sideS");
const sideL = document.getElementById("sideL");
const resetBtn = document.getElementById("reset-btn");
const countdownTag = document.getElementById("countdown");

let sCount = 0;
let lCount = 0;
let validKeyPress = true;


const runGame = (event) => {
  const gameTime = inputTag.value * 1000;
  event.preventDefault();
  
  if (inputTag.value === "") {
    alert("Please set a time")
    return;
  }

  let remainingTime = gameTime;
  const intervalId = setInterval(() => {
    remainingTime -= 1000;
    countdownTag.innerText = Math.ceil(remainingTime / 1000);
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      document.removeEventListener("keydown", keyPress);
      if (validKeyPress) {
        getWinner();
      }
      setTimeout(()=> {document.location.reload()}, 4000)
    }
  }, 1000);

  // setTimeout(() => {
  //   document.removeEventListener("keydown", keyPress);
  //   if (validKeyPress) {
  //     getWinner();
  //   }
  // }, gameTime);

  const keyPress = (event) => {
    let keyName = event.key;

    if (keyName === "s") {
      sCount++;
      sNumberTag.innerText = sCount;
    } else if (keyName === "l") {
      lCount++;
      lNumberTag.innerText = lCount;
    } else {
      alert("Please press S and L keys");
      validKeyPress = false;
      document.location.reload()
    }
  };

  document.addEventListener("keydown", keyPress);
  
};

btnTag.addEventListener("click", runGame);

const getWinner = () => {
  if (sCount > lCount) {
    alert("S i won")
    sideS.classList.add("winner"); 
  } else if (lCount > sCount) {
    alert("L i won")
    sideL.classList.add("winner"); 
  } else if (validKeyPress) {
    alert("It was a draw!");
    sideS.classList.add("winner");
    sideL.classList.add("winner"); 
  }
};

resetBtn.addEventListener("click", ()=> {document.location.reload()})



let iconTag = document.getElementById("icon");

iconTag.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    iconTag.src = "https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/sun-512.png"
  }else {
    iconTag.src = "https://cdn3.iconfinder.com/data/icons/meteocons/512/moon-symbol-1024.png"
  }
})