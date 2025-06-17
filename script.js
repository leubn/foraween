
const dialogue = document.getElementById("dialogue");
const buttons = document.getElementById("buttons");
const tulipContainer = document.getElementById("tulipContainer");

let step = 0;

function nextStep(choice) {
  step++;
  if (step === 1) {
    dialogue.innerText = "can i ask you a question";
    buttons.innerHTML = '<button onclick="nextStep()" class="btn">yes… maybe</button>';
  } else if (step === 2) {
    dialogue.innerText = "which color do you prefer";
    buttons.innerHTML = '<button onclick="showTulips('white')" class="btn">white</button><button onclick="showTulips('pink')" class="btn">pink</button>';
  }
}

function showTulips(color) {
  dialogue.innerText = color + " tulips for aween";
  buttons.innerHTML = '';
  const img = document.createElement("img");
  img.src = "assets/tulips-" + color + ".png";
  tulipContainer.appendChild(img);
}
