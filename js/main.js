class Zebra {
  constructor() {
    this.width = 10;
    this.height = 10;

    this.positionX = 40;
    this.positionY = 0;

    this.movementAmount = 10;

    this.crocElement = null;
    this.createCrocElement();
  }

  createCrocElement() {
    this.crocElement = document.createElement("div"); //step 1: create the DOM element

    this.crocElement.id = "zebra"; //step 2: add content

    this.crocElement.style.width = this.width + "vw"; //player size
    this.crocElement.style.height = this.height + "vh";

    this.crocElement.style.bottom = this.positionY + "vh"; //player position
    this.crocElement.style.left = this.positionX + "vw";

    const gameBoardElement = document.getElementById("gameBoard"); //step 3: append to parent
    gameBoardElement.appendChild(this.crocElement);
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= this.movementAmount;
      console.log("zebra position x axis...." + this.positionX);
      this.crocElement.style.left = this.positionX + "vw";
    }
  }

  moveRight() {
    if (this.positionX < 100 - this.width) {
      this.positionX += this.movementAmount;
      console.log("zebra position x axis...." + this.positionX);
      this.crocElement.style.left = this.positionX + "vw";
    }
  }

  moveUp() {
    if (this.positionY < 100 - this.height) {
      this.positionY += this.movementAmount;
      console.log("zebra position y axis...." + this.positionY);
      this.crocElement.style.bottom = this.positionY + "vh";
    }
  }

  moveDown() {
    if (this.positionY > 0) {
      this.positionY -= this.movementAmount;
      console.log("zebra position y axis...." + this.positionY);
      this.crocElement.style.bottom = this.positionY + "vh";
    }
  }
}

class Crocodile {
  constructor() {
    this.width = 10;
    this.height = 10;

    this.positionX = Math.floor(Math.random() * 10) * 10;
    this.positionY = Math.floor(Math.random() * (7 - 2) + 2) * 10;

    this.movementAmount = 10;

    this.crocElement = null;
    this.createCrocElement();
  }
  createCrocElement() {
    this.crocElement = document.createElement("div"); //step 1: create the croc div

    this.crocElement.id = "crocodile1"; //step 2: add content

    this.crocElement.style.width = this.width + "vw"; //croc size
    this.crocElement.style.height = this.height + "vh";

    this.crocElement.style.bottom = this.positionY + "vh"; //croc start position
    this.crocElement.style.left = this.positionX + "vw";

    const gameBoardElement = document.getElementById("gameBoard"); //step 3: append to parent
    gameBoardElement.appendChild(this.crocElement);
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= this.movementAmount;
      console.log("croc1 position x axis...." + this.positionX);
      this.crocElement.style.left = this.positionX + "vw";
    }
  }

  moveRight() {
    if (this.positionX < 100 - this.width) {
      this.positionX += this.movementAmount;
      console.log("croc1 position x axis...." + this.positionX);
      this.crocElement.style.left = this.positionX + "vw";
    }
  }

  moveUp() {
    if (this.positionY < 80 - this.height) {
      this.positionY += this.movementAmount;
      console.log("croc1 position y axis...." + this.positionY);
      this.crocElement.style.bottom = this.positionY + "vh";
    }
  }

  moveDown() {
    if (this.positionY > 20) {
      this.positionY -= this.movementAmount;
      console.log("croc1 position y axis...." + this.positionY);
      this.crocElement.style.bottom = this.positionY + "vh";
    }
  }
}

const zebra = new Zebra();
const crocodile1 = new Crocodile();
const crocodile2 = new Crocodile();

//key down event listener
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight" || event.key === "d") {
    zebra.moveRight();
  } else if (event.key === "ArrowLeft" || event.key === "a") {
    zebra.moveLeft();
  } else if (event.key === "ArrowUp" || event.key === "w") {
    zebra.moveUp();
  } else if (event.key === "ArrowDown" || event.key === "s") {
    zebra.moveDown();
  }
});

//crocdile random movement every key stroke
document.addEventListener("keydown", function (event) {
  if (
    event.key === "ArrowRight" ||
    event.key === "d" ||
    event.key === "ArrowLeft" ||
    event.key === "a" ||
    event.key === "ArrowUp" ||
    event.key === "w" ||
    event.key === "ArrowDown" ||
    event.key === "s"
  ) {
    const randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
      crocodile1.moveRight();
    } else if (randomNumber === 1) {
      crocodile1.moveUp();
    } else if (randomNumber === 2) {
      crocodile1.moveLeft();
    } else {
      crocodile1.moveDown();
    }
  }
  const randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber === 0) {
    crocodile2.moveRight();
  } else if (randomNumber === 1) {
    crocodile2.moveUp();
  } else if (randomNumber === 2) {
    crocodile2.moveLeft();
  } else {
    crocodile2.moveDown();
  }
  detectCollisionCroc1();
  detectCollisionCroc2();
  detectWin();
});

// detecting collisions
function detectCollisionCroc1() {
  if (
    zebra.positionX < crocodile1.positionX + crocodile1.width &&
    zebra.positionX + zebra.width > crocodile1.positionX &&
    zebra.positionY < crocodile1.positionY + crocodile1.height &&
    zebra.height + zebra.positionY > crocodile1.positionY
  ) {
    console.log("collision detected!!");
    location.href = "gameover.html";
  }
}

function detectCollisionCroc2() {
  if (
    zebra.positionX < crocodile2.positionX + crocodile2.width &&
    zebra.positionX + zebra.width > crocodile2.positionX &&
    zebra.positionY < crocodile2.positionY + crocodile2.height &&
    zebra.height + zebra.positionY > crocodile2.positionY
  ) {
    console.log("collision detected!!");
    location.href = "gameover.html";
  }
}
function detectWin() {
  if (zebra.positionY >= 80) {
    console.log("Winner");
    location.href = "level.html";
  }
}
