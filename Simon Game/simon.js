let gameSeq = [];
let userSeq = [];

let colors = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let highestScore = 0;

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

let h3 = document.querySelector("h3");

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let ranIndex = Math.floor(Math.random() * 4);
    let ranColor = colors[ranIndex];
    let ranButton = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    flash(ranButton);
}

function checkColor(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        if(highestScore < (level - 1)) {
            highestScore = level - 1;
        }
        h3.innerHTML = `Game over! Please press any key to start new game <br> Your Current Score is <b>${level - 1}<b> <br> Your Highest Score is <b>${highestScore}<b>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    // btn.classList.add(flash);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkColor(userSeq.length - 1); 
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}