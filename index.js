const doc = document.documentElement || document.body;
let max = 0;
let current = 0;
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
const cursor = document.querySelector(".cursor");
const hoverable = document.querySelectorAll(".hoverable");
const name = document.querySelector("h1");
const subtitle = document.querySelector("h2");
const portfolioLink = document.querySelector("#portfolioLink");
const blogLink = document.querySelector("#blogLink");
const sailingLink = document.querySelector("#sailingLink");

//Listeners
document.addEventListener("scroll", updateScrollProgress);
name.addEventListener("click", portfolioOpen);
subtitle.addEventListener("click", portfolioOpen);
portfolioLink.addEventListener("click", portfolioOpen);
blogLink.addEventListener("click", () => {
  window.open("https://tallulahh.github.io/Blog-with-database/");
});
sailingLink.addEventListener("click", () => {
  window.open("https://tallulahh.github.io/sailing-barcelona/home.html");
});


icon1.addEventListener("click", () => {
    window.open("https://codepen.io/tallulahh");
  });

  icon2.addEventListener("click", () => {
    window.open("https://www.github.com/tallulahh");
  });

  icon3.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/tallulah-carlisle");
  });

document.addEventListener("resize", updateScrollProgress);

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < hoverable.length; i++) {
  hoverable[i].addEventListener('mouseenter', onMouseHover);
  hoverable[i].addEventListener('mouseleave', onMouseHoverOut);
}


//Functions

gsap.fromTo(name, {
  scale: 0,
  opacity: 0
}, {
  scale: 1,
  opacity: 1,
  duration: 1.2,
  ease:"back"
})
gsap.fromTo(subtitle, {
  scale: 0,
  opacity: 0
}, {
  scale: 1,
  opacity: 1,
  delay: 1,
  duration: 1.2,
  ease:"elastic"
});

function portfolioOpen() {
  window.open("https://tallulahh.github.io/portfolio");
}

function updateScrollProgress() {
  max = doc.scrollHeight - (window.innerHeight + 50);
  current = (doc.scrollTop - 50) / max;
  doc.style.setProperty("--progress", current);
}

var t1 = gsap.timeline({scrollTrigger: ".about", delay: 0.8});

t1.fromTo(".about", {
  y: 100,
  opacity: 0,
  duration: 0.5
}, {
  opacity: 1,
  y: 0
});

var t2 = gsap.timeline({scrollTrigger: ".experience", delay: 0.8});

t2.fromTo(".experience", {
  y: 100,
  opacity: 0,
  duration: 0.5
}, {
  opacity: 1,
  y: 0
});

var t3 = gsap.timeline({scrollTrigger: ".education", delay: 0.8});

t3.fromTo(".education", {
  y: 100,
  opacity: 0,
  duration: 0.5
}, {
  opacity: 1,
  y: 0
});

var t4 = gsap.timeline({scrollTrigger: ".footer", delay: 0.8});

t4.fromTo(".footer i", {
  scale: 0,
  opacity: 0,
  duration: 0.5

}, {
  opacity: 1,
  scale: 1,
  stagger: 0.3
});

// Move the cursor
function onMouseMove(e) {
  TweenMax.to(cursor, .4, {
    x: e.clientX - 15,
    y: e.clientY - 15
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to(cursor, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to(cursor, .3, {
    scale: 1
  })
}
