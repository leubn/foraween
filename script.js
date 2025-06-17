function startSequence() {
  document.getElementById("buttons").innerHTML = "";
  document.getElementById("tulipContainer").innerHTML = "";
  document.getElementById("dialogue").innerText = "";
  showStep(0);
}

function showStep(stepIndex) {
  const step = dialogueSequence[stepIndex];

  if (stepIndex === 1) {
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic && bgMusic.paused) {
      bgMusic.volume = 0.5;
      bgMusic.play().catch(() => {});
    }
  }

  const cat = document.getElementById("cat");
  const dialogue = document.getElementById("dialogue");
  const buttons = document.getElementById("buttons");

  buttons.innerHTML = "";
  buttons.style.opacity = 0;

  dialogue.innerText = "";

  if (step.sprite) {
    cat.style.opacity = 0;
    cat.src = step.sprite === "door"
      ? "assets/door.png"
      : "assets/" + step.sprite + ".gif";

    cat.onload = () => {
      cat.style.opacity = 1;

      setTimeout(() => {
        if (step.text && step.text.trim() !== "") {
          typeText(step.text, dialogue, () => {
            showButtons(step);
          });
        } else {
          showButtons(step);
        }
      }, 400);
    };
  } else {
    if (step.text && step.text.trim() !== "") {
      typeText(step.text, dialogue, () => {
        showButtons(step);
      });
    } else {
      showButtons(step);
    }
  }
}

function typeText(text, element, callback) {
  let i = 0;
  element.innerText = "";

  if (voiceReady) {
    voiceAudio.pause();
    voiceAudio.currentTime = Math.random() * (voiceAudio.duration - 1);
    voiceAudio.play().catch(() => {});
  }

  let speed = 80;
  let interval;

  function step() {
    element.innerText += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (voiceReady) voiceAudio.pause();
      if (callback) callback();
    }
  }

  interval = setInterval(step, speed);

  document.body.addEventListener("click", function speedUp(e) {
    if (e.target.classList.contains("btn")) return;
    speed = Math.max(10, speed / 2);
    clearInterval(interval);
    interval = setInterval(step, speed);
  }, { once: true });
}

function showButtons(step) {
  const buttons = document.getElementById("buttons");
  buttons.innerHTML = "";

  if (step.choices) {
    step.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.className = "btn";
      btn.innerText = choice;
      btn.onclick = () => showTulips(choice);
      buttons.appendChild(btn);
    });
  } else if (step.button) {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = step.button;
    btn.onclick = () => showStep(step.next);
    buttons.appendChild(btn);
  }

  buttons.style.opacity = 0;
  setTimeout(() => {
    buttons.style.opacity = 1;
  }, 50);
}

function showTulips(choice) {
  const tulipContainer = document.getElementById("tulipContainer");
  const cat = document.getElementById("cat");
  const dialogue = document.getElementById("dialogue");
  const buttons = document.getElementById("buttons");

  if (voiceReady) voiceAudio.pause();

  cat.style.opacity = 0;
  cat.onload = () => {
    cat.style.opacity = 1;
  };
  cat.src = "assets/catend.gif";

  dialogue.innerText = `${choice} tulips for aween`;
  dialogue.style.opacity = 0;
  setTimeout(() => {
    dialogue.style.opacity = 1;
  }, 200);

  buttons.innerHTML = "";
  buttons.style.opacity = 0;

  tulipContainer.innerHTML = "";

  const centerTulip = document.createElement("img");
  centerTulip.src = `assets/tulips-${choice.toLowerCase()}.png`;
  centerTulip.style.width = "80px";
  centerTulip.style.opacity = 0;
  tulipContainer.appendChild(centerTulip);
  setTimeout(() => {
    centerTulip.style.opacity = 1;
  }, 200);

  setTimeout(() => {
    fillTulips(choice.toLowerCase(), () => {
      showEmailButton(choice);
    });
  }, 1500);
}

function fillTulips(color, onComplete) {
  const tulipContainer = document.getElementById("tulipContainer");
  tulipContainer.innerHTML = "";

  tulipContainer.style.position = "fixed";
  tulipContainer.style.top = 0;
  tulipContainer.style.left = 0;
  tulipContainer.style.width = "100%";
  tulipContainer.style.height = "100%";
  tulipContainer.style.zIndex = 10;
  tulipContainer.style.pointerEvents = "none";
  tulipContainer.style.display = "grid";
  tulipContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(80px, 1fr))";
  tulipContainer.style.gridAutoRows = "80px";
  tulipContainer.style.justifyItems = "center";
  tulipContainer.style.alignItems = "center";
  tulipContainer.style.gap = "0";

  const rows = Math.ceil(window.innerHeight / 80);
  const cols = Math.ceil(window.innerWidth / 80);
  const total = rows * cols;

  const positions = Array.from({ length: total }, (_, i) => i);
  shuffleArray(positions);

  let index = 0;

  function spawnNext() {
    if (index >= total) {
      setTimeout(onComplete, 500);
      return;
    }

    const cell = document.createElement("img");
    cell.src = `assets/tulips-${color}.png`;
    cell.style.width = "100%";
    cell.style.height = "100%";
    cell.style.opacity = "0";
    cell.style.transition = "opacity 0.3s ease";
    cell.style.objectFit = "contain";

    tulipContainer.appendChild(cell);
    requestAnimationFrame(() => {
      cell.style.opacity = "1";
    });

    index++;
    setTimeout(spawnNext, 15);
  }

  spawnNext();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showEmailButton(choice) {
  const buttons = document.getElementById("buttons");
  buttons.innerHTML = "";

  const emailBtn = document.createElement("button");
  emailBtn.className = "btn";
  emailBtn.innerText = "let luben know";
  emailBtn.onclick = () => {
    const subject = encodeURIComponent("Tulips for Aween");
    const body = encodeURIComponent(`Aween likes ${choice.toLowerCase()} tulips. 😸`);
    window.location.href = `mailto:luben.business@gmail.com?subject=${subject}&body=${body}`;
  };

  buttons.appendChild(emailBtn);

  buttons.style.position = "fixed";
  buttons.style.top = "50%";
  buttons.style.left = "50%";
  buttons.style.transform = "translate(-50%, -50%)";
  buttons.style.zIndex = "999";
  buttons.style.pointerEvents = "auto";
  buttons.style.display = "block";
  buttons.style.opacity = 0;

  setTimeout(() => {
    buttons.style.opacity = 1;
  }, 300);
}

let voiceReady = false;
let voiceAudio = new Audio("assets/blips.mp3");
voiceAudio.volume = 0.5;
voiceAudio.loop = true;

document.body.addEventListener("click", () => {
  if (!voiceReady) {
    voiceAudio.play().then(() => {
      voiceReady = true;
    }).catch(() => {});
  }
}, { once: true });

window.addEventListener("DOMContentLoaded", () => {
  startSequence();
});
