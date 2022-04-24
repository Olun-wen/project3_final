let oLeft = document.querySelector(".left");
let oRight = document.querySelector(".right");
let oImgList = document.querySelector(".img-list");

let clonefirstImg = oImgList.firstElementChild.cloneNode();
oImgList.appendChild(clonefirstImg);

let index = 0;

let lock = true;
function handleRightBtn() {
  if (!lock) return;
  index++;
  oImgList.style.left = index * -720 + "px";
  oImgList.style.transition = "0.5s ease";

  if (index === 12) {
    index = 0;
    setTimeout(() => {
      oImgList.style.left = 0;
      oImgList.style.transition = "none";
    }, 500);
  }

  setCircles();
  lock = false;
  setTimeout(() => {
    lock = true;
  }, 500);
}

oRight.addEventListener("click", handleRightBtn);

oLeft.addEventListener("click", () => {
  if (!lock) return;
  index--;
  if (index === -1) {
    oImgList.style.left = 12 * -720 + "px";
    oImgList.style.transition = "none";
    index = 11;
    setTimeout(() => {
      oImgList.style.left = index * -720 + "px";
      oImgList.style.transition = "0.5s ease";
    }, 0);
  } else {
    oImgList.style.left = index * -720 + "px";
  }

  setCircles();

  lock = false;
  setTimeout(() => {
    lock = true;
  }, 500);
});

const circles = document.querySelectorAll(".circle");

function setCircles() {
  for (let i = 0; i < circles.length; i++) {
    if (i === index) {
      circles[i].classList.add("active");
    } else {
      circles[i].classList.remove("active");
    }
  }
}

const oCircle = document.querySelector(".circle-list");

oCircle.addEventListener("click", (e) => {
  if (e.target.nodeName.toLowerCase() === "li") {
    const n = Number(e.target.getAttribute("data-n"));
    index = n;
    setCircles();
    oImgList.style.transition = "0.5s ease";
    oImgList.style.left = index * -720 + "px";
  }
});

let autoplay = setInterval(handleRightBtn, 2000);
const oWrap = document.getElementById("wrap");

oWrap.addEventListener("mouseenter", () => {
  clearInterval(autoplay);
});

oWrap.addEventListener("mouseleave", () => {
  clearInterval(autoplay);
  autoplay = setInterval(handleRightBtn, 2000);
});