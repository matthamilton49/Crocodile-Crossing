class Zebra {
  constructor() {
    this.width = 10;
    this.height = 10;

    this.positionX = 40;
    this.positionY = 0;

    this.movementAmount = 10;

    this.zebraElement = null;
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

class Lion {
  constructor() {
    this.width = 10;
    this.height = 10;

    this.positionX = Math.floor(Math.random() * 10) * 10;
    this.positionY = 10;

    this.movementAmount = 10;

    this.lionElement = null;
    this.createLionElement();
  }

  createLionElement() {
    this.lionElement = document.createElement("div"); //step 1: create the DOM element

    this.lionElement.id = "lion"; //step 2: add content

    this.lionElement.style.width = this.width + "vw"; //player size
    this.lionElement.style.height = this.height + "vh";

    this.lionElement.style.bottom = this.positionY + "vh"; //player position
    this.lionElement.style.left = this.positionX + "vw";

    const gameBoardElement = document.getElementById("gameBoard"); //step 3: append to parent
    gameBoardElement.appendChild(this.lionElement);
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= this.movementAmount;
      this.lionElement.style.left = this.positionX + "vw";
    }
  }

  moveRight() {
    if (this.positionX < 100 - this.width) {
      this.positionX += this.movementAmount;
      this.lionElement.style.left = this.positionX + "vw";
    }
  }
}

class Sounds {
  constructor() {
    this.backgroundMusic = document.createElement("audio");
    this.backgroundMusic.src = "../images/river.wav";
    this.backgroundMusic.setAttribute("preload", "auto");
    this.backgroundMusic.setAttribute("controls", "none");
    this.backgroundMusic.style.display = "none";
    document.body.appendChild(this.backgroundMusic);
    this.play = function () {
      this.backgroundMusic.play();
    };
    this.stop = function () {
      this.backgroundMusic.pause();
    };
  }
}

class Game {
  constructor() {
    this.zebra = null;
    this.crocodiles = [];
    this.hippos = [];
    this.lions = [];
    this.level = 1;
  }

  startLevel(level) {
    const counter = document.getElementById("levelCounterSpan");
    counter.innerText = this.level;
    const instructions = document.getElementById("instructions");

    if (level === 1) {
      this.zebra = new Zebra();
      this.createCrocodiles(1);
    } else if (level === 2) {
      instructions.innerText =
        "Hippos are territorial and will only move a short distance from their original position";
      this.zebra = new Zebra();
      this.createCrocodiles(1);
      this.createHippos(1);
    } else if (level === 3) {
      instructions.innerText =
        "Lions parol the sandy banks looking for slow zebras";
      this.zebra = new Zebra();
      this.createCrocodiles(1);
      this.createHippos(1);
      this.createLions(1);
    } else if (level === 4) {
      instructions.innerText = "Looks like the crocodile has called his friend";
      this.zebra = new Zebra();
      this.createCrocodiles(2);
      this.createHippos(1);
      this.createLions(1);
    } else if (level === 5) {
      instructions.innerText = "Or is it one big crocodile family?";
      this.zebra = new Zebra();
      this.createCrocodiles(3);
      this.createHippos(1);
      this.createLions(1);
    } else if (level === 6) {
      instructions.innerText = "Watch out... Those hippos look hungry";
      this.zebra = new Zebra();
      this.createCrocodiles(2);
      this.createHippos(2);
      this.createLions(1);
    } else if (level === 7) {
      instructions.innerText = "There are more hippos here than crocodiles";
      this.zebra = new Zebra();
      this.createCrocodiles(2);
      this.createHippos(3);
      this.createLions(1);
    } else if (level === 8) {
      instructions.innerText = "Looks like we spoke too soon";
      this.zebra = new Zebra();
      this.createCrocodiles(3);
      this.createHippos(3);
      this.createLions(1);
    } else if (level === 9) {
      instructions.innerText = "Is that a second lion?";
      this.zebra = new Zebra();
      this.createCrocodiles(3);
      this.createHippos(3);
      this.createLions(2);
    } else if (level === 10) {
      instructions.innerText = "Jeepers...  You better be quick";
      this.zebra = new Zebra();
      this.createCrocodiles(4);
      this.createHippos(2);
      this.createLions(2);
    } else if (level === 11) {
      instructions.innerText =
        "Is the grass on the other side really worth it?";
      this.zebra = new Zebra();
      this.createCrocodiles(3);
      this.createHippos(4);
      this.createLions(2);
    } else if (level === 12) {
      instructions.innerText = "You have to be joking!!!";
      this.zebra = new Zebra();
      this.createCrocodiles(4);
      this.createHippos(4);
      this.createLions(2);
    } else if (level === 13) {
      instructions.innerText = "This is the last level";
      this.zebra = new Zebra();
      this.createCrocodiles(6);
      this.createHippos(6);
      this.createLions(4);
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

  addEventListenersEnemies() {
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
        const splashSound = new Audio("./splash.wav");
        splashSound.volume = 0.5;
        splashSound.play();
        this.crocMovement();
        this.hippoMovement();
        this.lionMovement();
        this.detectCollisionCroc();
        this.detectCollisionHippo();
        this.detectCollisionLion();
        this.detectWin();
      }
    });
  }

  createCrocodiles(number) {
    for (let i = 0; i < number; i++) {
      const newCroc = new Crocodile();
      this.crocodiles.push(newCroc);
    }
  }

  createHippos(number) {
    for (let i = 0; i < number; i++) {
      const newHippo = new Hippo();
      this.hippos.push(newHippo);
    }
  }

  createLions(number) {
    for (let i = 0; i < number; i++) {
      const newLion = new Lion();
      this.lions.push(newLion);
    }
  }

  crocMovement() {
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

  hippoMovement() {
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
    }
  }

  lionMovement() {
    for (let i = 0; i < this.lions.length; i++) {
      this.lions[i].randomNumber = Math.floor(Math.random() * 2);
      if (this.lions[i].randomNumber === 1) {
        this.lions[i].moveRight();
      } else {
        this.lions[i].moveLeft();
      }
    }
  }

  detectCollisionCroc() {
    for (let i = 0; i < this.crocodiles.length; i++) {
      if (
        this.zebra.positionX === this.crocodiles[i].positionX &&
        this.zebra.positionY === this.crocodiles[i].positionY
      ) {
        location.href = "./gameover.html";
      }
    }
  }

  detectCollisionHippo() {
    for (let i = 0; i < this.hippos.length; i++) {
      if (
        this.zebra.positionX === this.hippos[i].positionX &&
        this.zebra.positionY === this.hippos[i].positionY
      ) {
        location.href = "./gameover.html";
      }
    }
  }

  detectCollisionLion() {
    for (let i = 0; i < this.lions.length; i++) {
      if (
        this.zebra.positionX === this.lions[i].positionX &&
        this.zebra.positionY === this.lions[i].positionY
      ) {
        location.href = "./gameover.html";
      }
    }
  }

  detectWin() {
    if (this.zebra.positionY >= 80 && this.level === 13) {
      location.href = "./level.html";
    } else if (this.zebra.positionY >= 80) {
      this.level++;

      this.zebra.zebraElement.remove();
      for (let i = 0; i < this.crocodiles.length; i++) {
        this.crocodiles[i].crocElement.remove();
      }
      for (let j = 0; j < this.hippos.length; j++) {
        this.hippos[j].hippoElement.remove();
      }
      for (let k = 0; k < this.lions.length; k++) {
        this.lions[k].lionElement.remove();
      }
      this.crocodiles = [];
      this.hippos = [];
      this.lions = [];
      this.startLevel(this.level);
    }
  }
}



const game = new Game();
game.startLevel(1);
game.addEventListenerZebra();
game.addEventListenersEnemies();

