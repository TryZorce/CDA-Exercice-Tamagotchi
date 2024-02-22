console.log('tamagotchi file is loaded');

class Tamagotchi {
  constructor(name, creatureType) {
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }

  cry() {
    if (this.foodInTummy > 0) {
      this.foodInTummy -= 1;
      console.log(`${this.name} says: WAHH!!! Food in Tummy: ${this.foodInTummy}`);
    } else {
      console.log(`${this.name} is too hungry to cry!`);
      this.health -= 1;
    }
    this.updateHTML();
  }

  puke() {
    if (this.foodInTummy > 0) {
      this.foodInTummy -= 1;
      console.log(`${this.name} says: BLEH!!! Food in Tummy: ${this.foodInTummy}`);
    } else {
      console.log(`${this.name} is too hungry to puke!`);
      this.health -= 1;
    }
    this.updateHTML();
  }

  yawn() {
    if (this.restedness > 0) {
      this.restedness -= 1;
      console.log(`${this.name} has current restedness of: ${this.restedness}`);
    } else {
      console.log(`${this.name} is too exhausted to yawn!`);
      this.health -= 1;
    }
    this.updateHTML();
  }

  start() {
    console.log(`${this.name} has started!`);
    this.hungerTimer = setInterval(() => this.cry(), 6000);
    this.yawnTimer = setInterval(() => this.yawn(), 10000);
    this.sickTimer = setInterval(() => this.puke(), 20000);
  }

  stop() {
    console.log(`${this.name} has stopped!`);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  }

  updateHTML() {
    const foodElement = document.getElementById(`food${this.name}`);
    if (foodElement) {
      foodElement.textContent = `Food: ${this.foodInTummy}`;
    }
    const restednessElement = document.getElementById(`restedness${this.name}`);
    if (restednessElement) {
      restednessElement.textContent = `Restedness: ${this.restedness}`;
    }
    const healthElement = document.getElementById(`health${this.name}`);
    if (healthElement) {
      healthElement.textContent = `Health: ${this.health}`;
    }
  }
}