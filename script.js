/* -------------------- SMOOTH REDIRECT -------------------- */
function smoothRedirect(page) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = page;
  }, 600);
}

/* -------------------- PASSWORD CHECK -------------------- */
function checkPassword() {
  const input = document.getElementById("password").value.trim().toLowerCase();
  const error = document.getElementById("error");

  const validPasswords = [
    "shrily","angella","shoharji","rits","ritu","ana","anu","sagnika","jabeda","pallabi"
  ];

  if (validPasswords.includes(input)) {
    createFloatingHearts();
    setTimeout(() => smoothRedirect("reasons.html"), 1500);
  } else {
    error.innerText = "Hmm that's not what I call you💔 Try again!";
  }
}

function goToProposal() {
  smoothRedirect("proposal.html");
}

/* -------------------- YES FLOW -------------------- */
function sayYes() {

  // Play music
  const audio = document.getElementById("bgMusic");
  audio.play();
  localStorage.setItem("musicPlaying", "true");

  // Hide proposal
  document.getElementById("proposalSection").classList.add("hidden");

  // Show YAY
  document.getElementById("yaySection").classList.remove("hidden");

  // Confetti
  startConfetti();

  // After 2 seconds show final page
  setTimeout(() => {

    document.getElementById("yaySection").classList.add("hidden");
    document.getElementById("finalSection").classList.remove("hidden");

    // Fill Love Meter
    document.getElementById("loveFill").style.width = "100%";

  }, 2000);
}

/* -------------------- SECRET BUTTON -------------------- */
document.addEventListener("DOMContentLoaded", () => {

  // Resume music on next page
  const audio = document.getElementById("bgMusic");
  if (audio && localStorage.getItem("musicPlaying") === "true") {
    audio.play();
  }

  // Secret reveal
  const secretBtn = document.getElementById("secretBtn");
  if (secretBtn) {
    secretBtn.addEventListener("click", () => {
      document.getElementById("secretMessage").classList.remove("hidden");
      document.getElementById("signature").classList.remove("hidden");
    });
  }

});

/* -------------------- NO BUTTON RUN AWAY -------------------- */
function moveNo(button) {
  button.style.position = "absolute";
  button.style.top = Math.random() * 400 + "px";
  button.style.left = Math.random() * 400 + "px";
}

/* -------------------- CONFETTI -------------------- */
let confettiAnimation;

function startConfetti() {
  const canvas = document.getElementById("confetti");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({length:150}).map(() => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*6+2,
    color: `hsl(${Math.random()*360},100%,70%)`
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += 3;
      if (p.y > canvas.height) p.y = 0;
    });
    confettiAnimation = requestAnimationFrame(draw);
  }
  draw();
}

function stopConfetti() {
  cancelAnimationFrame(confettiAnimation);
}

/* -------------------- RANDOM HEART FLOAT AFTER UNLOCK -------------------- */
function createFloatingHearts() {
  for (let i=0;i<20;i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "random-heart";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (Math.random()*3+2)+"s";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),4000);
  }
}

/* -------------------- BACKGROUND FLOATING HEARTS -------------------- */
function createBackgroundHeart() {
  const heart = document.createElement("div");
  heart.className = "bg-heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 6 + 6) + "s";
  heart.style.animationDelay = Math.random() * 5 + "s";

  const container = document.querySelector(".floating-hearts");
  if (container) container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

/* Generate hearts continuously */
setInterval(createBackgroundHeart, 800);

/* -------------------- TYPEWRITER -------------------- */
function typeWriter(text, element) {
  let i = 0;
  element.innerHTML = "";

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }

  typing();
             }
        
