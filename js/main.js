class Zebra {
  constructor() {
    this.width = 10;
    this.height = 10;

    this.positionX = Math.floor(Math.random() * 10) * 10; //zebra can start on random tile on bottom
    this.positionY = 0;

    this.movementAmount = 10;

    this.crocElement = null;
    this.createZebraElement();
  }

  createZebraElement() {
    this.zebraElement = document.createElement("div"); //step 1: create the DOM element

    this.zebraElement.id = "zebra"; //step 2: add content

    this.zebraElement.style.width = this.width + "vw"; //player size
    this.zebraElement.style.height = this.height + "vh";

    this.zebraElement.style.bottom = this.positionY + "vh"; //player position
    this.zebraElement.style.left = this.positionX + "vw";

    const gameBoardElement = document.getElementById("gameBoard"); //step 3: append to parent
    gameBoardElement.appendChild(this.zebraElement);
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= this.movementAmount;
      this.zebraElement.style.left = this.positionX + "vw";
    }
  }

  moveRight() {
    if (this.positionX < 100 - this.width) {
      this.positionX += this.movementAmount;
      this.zebraElement.style.left = this.positionX + "vw";
    }
  }

  moveUp() {
    if (this.positionY < 100 - this.height) {
      this.positionY += this.movementAmount;
      this.zebraElement.style.bottom = this.positionY + "vh";
    }
  }

  moveDown() {
    if (this.positionY > 0) {
      this.positionY -= this.movementAmount;
      this.zebraElement.style.bottom = this.positionY + "vh";
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
      this.crocElement.style.left = this.positionX + "vw";
    }
  }

  moveRight() {
    if (this.positionX < 100 - this.width) {
      this.positionX += this.movementAmount;
      this.crocElement.style.left = this.positionX + "vw";
    }
  }

  moveUp() {
    if (this.positionY < 80 - this.height) {
      this.positionY += this.movementAmount;
      this.crocElement.style.bottom = this.positionY + "vh";
    }
  }

  moveDown() {
    if (this.positionY > 20) {
      this.positionY -= this.movementAmount;
      this.crocElement.style.bottom = this.positionY + "vh";
    }
  }
}

class Hippo {
  constructor() {
    this.width = 10;
    this.height = 10;

    this.startingPositionX = Math.floor(Math.random() * (8 - 1) + 1) * 10;
    this.startingPositionY = Math.floor(Math.random() * (6 - 3) + 3) * 10;

    console.log(
      `hippoX ${this.startingPositionX}  hippoY ${this.startingPositionY}`
    );

    this.positionX = this.startingPositionX;
    this.positionY = this.startingPositionY;

    this.movementAmount = 10;
    this.movementArray = ["start"];

    this.hippoElement = null;
    this.createHippoElement();
  }
  createHippoElement() {
    this.hippoElement = document.createElement("div"); //step 1: create the hippo div

    this.hippoElement.id = "hippo"; //step 2: add content

    this.hippoElement.style.width = this.width + "vw"; //hippo size
    this.hippoElement.style.height = this.height + "vh";

    this.hippoElement.style.bottom = this.positionY + "vh"; //hippo start position
    this.hippoElement.style.left = this.positionX + "vw";

    const gameBoardElement = document.getElementById("gameBoard"); //step 3: append to parent
    gameBoardElement.appendChild(this.hippoElement);
  }

  moveLeft() {
    this.positionX -= this.movementAmount;
    this.hippoElement.style.left = this.positionX + "vw";
  }

  moveRight() {
    this.positionX += this.movementAmount;
    this.hippoElement.style.left = this.positionX + "vw";
  }

  moveUp() {
    this.positionY += this.movementAmount;
    this.hippoElement.style.bottom = this.positionY + "vh";
  }

  moveDown() {
    this.positionY -= this.movementAmount;
    this.hippoElement.style.bottom = this.positionY + "vh";
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
      instructions.innerText =
        "Crocodiles will only move 1 space, and only when Zach moves";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
    } else if (level === 3) {
      instructions.innerText =
        "Crocodiles can only move 'Up, Down, Left and Right'";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      const croc3 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
      this.crocodiles.push(croc3);
    } else if (level === 4) {
      instructions.innerText =
        "More and more crocodiles can smell fresh zebra!";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      const croc3 = new Crocodile();
      const croc4 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
      this.crocodiles.push(croc3);
      this.crocodiles.push(croc4);
    } else if (level === 5) {
      instructions.innerText =
        "Hippos are territorial, they will only move one space before returning to their starting position";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
      const hippo1 = new Hippo();
      this.hippos.push(hippo1);
    } else if (level === 6) {
      instructions.innerText = "More hippos means less space for Zach to cross";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
      const hippo1 = new Hippo();
      this.hippos.push(hippo1);
      const hippo2 = new Hippo();
      this.hippos.push(hippo2);
    } else if (level === 7) {
      instructions.innerText =
        "uh oh! Looks like more crocodiles are swimming around";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      const croc3 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
      this.crocodiles.push(croc3);
      const hippo1 = new Hippo();
      this.hippos.push(hippo1);
      const hippo2 = new Hippo();
      this.hippos.push(hippo2);
    } else if (level === 8) {
      instructions.innerText =
        "Whoa! Now more hippos are making homes in the river";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      const croc3 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
      this.crocodiles.push(croc3);
      const hippo1 = new Hippo();
      this.hippos.push(hippo1);
      const hippo2 = new Hippo();
      this.hippos.push(hippo2);
      const hippo3 = new Hippo();
      this.hippos.push(hippo3);
    } else if (level === 8) {
      instructions.innerText = "You're joking right???!!!";
      this.zebra = new Zebra();
      const croc1 = new Crocodile();
      const croc2 = new Crocodile();
      const croc3 = new Crocodile();
      const croc4 = new Crocodile();
      this.crocodiles.push(croc1);
      this.crocodiles.push(croc2);
      this.crocodiles.push(croc3);
      this.crocodiles.push(croc4);
      const hippo1 = new Hippo();
      this.hippos.push(hippo1);
      const hippo2 = new Hippo();
      this.hippos.push(hippo2);
      const hippo3 = new Hippo();
      this.hippos.push(hippo3);
      const hippo4 = new Hippo();
      this.hippos.push(hippo4);
    }
  }
  addEventListenerZebra() {
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
    });
  }

  addEventListenerCrocodile() {
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
      this.detectCollisionCroc();
      this.detectWin();
    });
  }

  addEventListenerHippo() {
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
        for (let i = 0; i < this.hippos.length; i++) {
          if (this.hippos[i].movementArray.length % 2 === 1) {
            this.hippos[i].randomNumber = Math.floor(Math.random() * 4);
            if (this.hippos[i].randomNumber === 0) {
              this.hippos[i].moveRight();
              this.hippos[i].movementArray.push("right");
            } else if (this.hippos[i].randomNumber === 1) {
              this.hippos[i].moveUp();
              this.hippos[i].movementArray.push("up");
            } else if (this.hippos[i].randomNumber === 2) {
              this.hippos[i].moveLeft();
              this.hippos[i].movementArray.push("left");
            } else {
              this.hippos[i].moveDown();
              this.hippos[i].movementArray.push("down");
            }
          } else if (
            this.hippos[i].movementArray.length % 2 === 0 &&
            this.hippos[i].movementArray[
              this.hippos[i].movementArray.length - 1
            ] === "right"
          ) {
            this.hippos[i].moveLeft();
            this.hippos[i].movementArray.push("left");
          } else if (
            this.hippos[i].movementArray.length % 2 === 0 &&
            this.hippos[i].movementArray[
              this.hippos[i].movementArray.length - 1
            ] === "left"
          ) {
            this.hippos[i].moveRight();
            this.hippos[i].movementArray.push("right");
          } else if (
            this.hippos[i].movementArray.length % 2 === 0 &&
            this.hippos[i].movementArray[
              this.hippos[i].movementArray.length - 1
            ] === "up"
          ) {
            this.hippos[i].moveDown();
            this.hippos[i].movementArray.push("down");
          } else {
            this.hippos[i].moveUp();
            this.hippos[i].movementArray.push("up");
          }
          console.log(
            `hippoX ${this.hippos[i].positionX}  hippoY ${this.hippos[i].positionY}`
          );
        }
        this.detectCollisionHippo();
        this.detectWin();
      }
    });
  }

  detectCollisionCroc() {
    for (let i = 0; i < this.crocodiles.length; i++) {
      if (
        this.zebra.positionX === this.crocodiles[i].positionX &&
        this.zebra.positionY === this.crocodiles[i].positionY
      ) {
        console.log("collision detected!!");
        console.log(
          `crocX ${this.crocodiles[i].positionX}, crocY ${this.crocodiles[i].positionY} `
        );
        console.log(
          `zebraX ${this.zebra.positionX}, zebraY ${this.zebra.positionY} `
        );
        // location.href = "../gameover.html";
      }
    }
  }

  detectCollisionHippo() {
    for (let i = 0; i < this.hippos.length; i++) {
      if (
        this.zebra.positionX === this.hippos[i].positionX &&
        this.zebra.positionY === this.hippos[i].positionY
      ) {
        console.log("collision detected!!");
        console.log(
          `hippoX${this.hippos[i].positionX}, hippoY${this.hippos[i].positionY} `
        );
        console.log(
          `zebraX ${this.zebra.positionX}, zebraY ${this.zebra.positionY} `
        );
        //location.href = "./gameover.html";
      }
    }
  }

  detectWin() {
    if (this.zebra.positionY >= 80 && this.level === 8) {
      location.href = "./level.html";
    } else if (this.zebra.positionY >= 80) {
      this.level++;
      console.log("Winner");
      this.zebra.zebraElement.remove();
      for (let i = 0; i < this.crocodiles.length; i++) {
        this.crocodiles[i].crocElement.remove();
      }
      for (let j = 0; j < this.hippos.length; j++) {
        this.hippos[j].hippoElement.remove();
      }
      this.crocodiles = [];
      this.hippos = [];
      this.startLevel(this.level);
    }
  }
}

const game = new Game();
game.startLevel(5);
game.addEventListenerZebra();
game.addEventListenerCrocodile();
game.addEventListenerHippo();
