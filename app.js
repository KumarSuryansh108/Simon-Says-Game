let userSeq = [];
let gameSeq = [];

let box = ["box1", "box2", "box3", "box4"];

let started = false;
let level = 0;

document.addEventListener("keyup", function () {
    if (started == false) {
        started = true;
        levelup();
    }
});

function gameflash(box) {
    box.classList.add("flash");
    setTimeout(function () {
        box.classList.remove("flash");
    }, 250);
}
function userflash(box) {
    box.classList.add("userflash");
    setTimeout(function () {
        box.classList.remove("userflash");
    }, 250);
}

let h2 = document.querySelector("h2");

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randName = box[randIdx];
    let randBox = document.querySelector(`.${randName}`);
    gameSeq.push(randName);
    gameflash(randBox);
}

function checkSeq(id) {
    if (userSeq[id] === gameSeq[id]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = ` GAMEOVER <br> Your Score : ${level}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "lightgrey";
        }, 150)
        reset();
    }
}


function boxPress() {
    let box = this;
    userflash(box);
    let boxName = this.classList[1];
    userSeq.push(boxName);
    checkSeq(userSeq.length - 1);
}

let allboxs = document.querySelectorAll(".box");
for (boxs of allboxs) {
    boxs.addEventListener("click", boxPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}