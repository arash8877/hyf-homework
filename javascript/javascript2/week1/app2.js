//Spirit animal name generator

const buttonTag = document.getElementById("name-btn");
const inputTag = document.getElementById("inputTag");

const spiritNames = [
  "moon wolf",
  "patience ant",
  "bravery alligator",
  "Divine buffalo",
  "wisdom bee",
  "Magic cat",
  "freedom cheetah",
  "caring deer",
  "attentive crane",
  "Loyalty dog",
];

function getName(event) {
  const userName = document.getElementById("inputTag").value;
  const form = document.getElementById("form");
  const randomSpiritName =
    spiritNames[Math.floor(Math.random() * spiritNames.length)];

  document.getElementById(
    "h2tag"
  ).innerText = `${userName} - ${randomSpiritName}`;

  form.addEventListener("submit", (event) => {
    if (userName === "") {
      event.preventDefault();
    }
  });
}

buttonTag.addEventListener("click", getName);
//inputTag.addEventListener("mouseover", getName);
