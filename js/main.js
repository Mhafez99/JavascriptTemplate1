
// -------------------------------- Landing  -------------------------------------
let landing = document.querySelector(".landing-page");
let prevButton = document.querySelector(".landing-page .left");
let nextButton = document.querySelector(".landing-page .right");
let bulletUl = document.querySelector(".landing-page .bullets");
let bulletLis = document.querySelectorAll(".landing-page .bullets li");
let imgsArray = ["shuffle-05.jpg", "Landing-2.jpg", "Landing-3.png"];
let slideCount = imgsArray.length;
let randNum = Math.ceil(Math.random() * slideCount);
let currentSlide = randNum;

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

theChecker();
function prevSlide() {
    currentSlide--;
    theChecker();
};
function nextSlide() {
    currentSlide++;
    theChecker();
};
function theChecker() {
    rvActive(bulletLis);
    bulletUl.children[currentSlide - 1].classList.add("active");
    landing.style.backgroundImage = `url(images/${imgsArray[currentSlide - 1]})`;

    if (currentSlide == 1) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }
    if (currentSlide == slideCount) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }

};
function rvActive(elements) {
    elements.forEach((ele) => {
        ele.classList.remove("active");
    });
}

for (let i = 0; i < bulletLis.length; i++) {
    bulletLis[i].onclick = function() {
        currentSlide = i + 1;
        theChecker();
    };
}







// -------------------------------- Portfolio -------------------------------------
let shuffleLis = document.querySelectorAll(".shuffle li");
let imgBox = document.querySelectorAll(".imgs-container .box");

shuffleLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

function removeActive() {
    shuffleLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
function manageImgs() {
    imgBox.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((img) => {
        img.style.display = "block";
    });
}

let more = document.querySelector(".portfolio .more");
let cloneImg = [];

more.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
        cloneImg.push(imgBox[Math.floor(Math.random() * imgBox.length)].cloneNode(true));
        Array.from(imgBox)[imgBox.length - 1].after(cloneImg[i]);
    }
    more.remove();
});
// -------------------------------- Video ------------------------------------
let videoText = document.querySelector(".video .text");
videoText.onclick = function() {
    this.style.display = "none";
};
// -------------------------------- About || Skills --------------------------------
let stat = document.querySelector(".stat");
let nums = document.querySelectorAll(".stat .box .number");
let skillSec = document.querySelectorAll(".our-skill");
let skill = document.querySelectorAll(".our-skill .prog span");
let started = false;
window.onscroll = function() {
    if (window.scrollY >= stat.offsetTop) {
        if (!started) {
            nums.forEach((num) => {startCount(num);});
        }
        started = true;
    }
    if (window.scrollY >= stat.offsetTop + 300) {
        skill.forEach((el) => {
            el.style.width = el.dataset.skill;
        });
    } else {
        skill.forEach((el) => {
            el.style.width = 0;
        });
    }
};
function startCount(el) {
    let goal = el.dataset.number;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
// --------------------------------  ------------------------------------



