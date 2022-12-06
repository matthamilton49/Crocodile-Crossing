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

    this.crocElement.id = "crocodile"; //step 2: add content

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

class Game {
  constructor() {
    this.zebra = null;
    this.crocodiles = [];
    this.hippos = [];
    this.level = 1;
  }

  startLevel(level) {
    const counter = document.getElementById("levelCounterSpan");
    counter.innerText = this.level;
    const instructions = document.getElementById("instructions");
    if (level === 1) {
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      this.crocodiles.push(croc1);
    } else if (level === 2) {
      instructions.innerText = "Crocodiles will only move 1 space, and only when Zach moves";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
    } else if (level === 3) {
      instructions.innerText = "Crocodiles can only move 'Up, Down, Left and Right'";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      const croc3 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
      this.crocodiles.push(croc3);
    } else if (level === 4) {
      instructions.innerText = "More and more crocodiles can smell fresh zebra!";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      const croc3 = new Crocodile();
      const croc4 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
      this.crocodiles.push(croc3);
      this.crocodiles.push(croc4);
    } 

  movementZebra() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "d") {
        this.zebra.moveRight();
      } else if (event.key === "ArrowLeft" || event.key === "a") {
        this.zebra.moveLeft();
      } else if (event.key === "ArrowUp" || event.key === "w") {
        this.zebra.moveUp();
      } else if (event.key === "ArrowDown" || event.key === "s") {
        this.zebra.moveDown();
      }
      console.log(this.crocodiles[0].movementAmount);
    });
  }

  movementCrocodile() {
    document.addEventListener("keydown", (event) => {
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
        for (let i = 0; i < this.crocodiles.length; i++) {
          this.crocodiles[i].randomNumber = Math.floor(Math.random() * 4);
          if (this.crocodiles[i].randomNumber === 0) {
            this.crocodiles[i].moveRight();
          } else if (this.crocodiles[i].randomNumber === 1) {
            this.crocodiles[i].moveUp();
          } else if (this.crocodiles[i].randomNumber === 2) {
            this.crocodiles[i].moveLeft();
          } else {
            this.crocodiles[i].moveDown();
          }
        }
      }
      this.detectCollision();
      this.detectWin();
    });
  }

  detectCollision() {
    for (let i = 0; i < this.crocodiles.length; i++) {
      if (
        this.zebra.positionX <
          this.crocodiles[i].positionX + this.crocodiles[i].width &&
        this.zebra.positionX + this.zebra.width >
          this.crocodiles[i].positionX &&
        this.zebra.positionY <
          this.crocodiles[i].positionY + this.crocodiles[i].height &&
        this.zebra.height + this.zebra.positionY > this.crocodiles[i].positionY
      ) {
        console.log("collision detected!!");
        location.href = "gameover.html";
      }
    }
  }

  detectWin() {
    if (this.zebra.positionY >= 80) {
      this.level++;
      console.log("Winner");
      this.zebra.crocElement.remove();
      for (let i = 0; i < this.crocodiles.length; i++) {
        this.crocodiles[i].crocElement.remove();
      }

      this.startLevel(this.level);
    }
  }
}

const game = new Game();
game.startLevel(1);
game.movementZebra();
game.movementCrocodile();
