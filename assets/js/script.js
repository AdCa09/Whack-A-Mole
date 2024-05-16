window.onload = function () {
    document.getElementById("button").addEventListener("click", startGame);
}

function startGame() {
    game();
    document.getElementById("button").style.display = "none";
}
let moleTile;
let score = 0;
function game() {
    for (let i = 0; i < 9; i++) {
        let newDiv = document.createElement('div')
        newDiv.id = i.toString();
        newDiv.addEventListener("click", selectTile)
        document.getElementById('container').appendChild(newDiv);
    }
    setInterval(createMole, 850);
}

function random() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function createMole() {

    if (moleTile) {
        moleTile.innerHTML = "";
    }
    let mole = document.createElement('img');
    mole.src = "assets/images/kim.png";
    mole.style.pointerEvents = "none";

    let num = random();
    moleTile = document.getElementById(num);
    moleTile.appendChild(mole);
}

function selectTile() {
    if (this === moleTile) {
        score += 1;
        document.getElementById("score").innerText = "score : " + score.toString();
        insertAlert();
    }
}

function insertAlert() {
    if (score === 10) {
        alert("Wow, you really don't like Kim Jong Un, be careful (don't continue)");
    } if (score === 15) {
        alert("I tell you to be careful, have a good day now :)(watch out for your ears)");
        insertGifWithSound();
    }
}
function insertGifWithSound() {
    let container = document.getElementById("container");
    let gifContainer = document.getElementById("gifContainer");

    let gif = document.createElement("img");
    gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDUwZGtocmc0NnlpeXFuZ2N2aGtkbzBxZGxkM2tteDFtNzVyN3BxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgmYU3ZVaCjGafm/giphy.gif";
    gif.width = 320;
    gif.height = 240;

    gifContainer.appendChild(gif);

    let audio = document.getElementById("audio");
    audio.play();

    container.style.visibility = 'hidden';
}



