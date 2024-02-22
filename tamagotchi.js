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
    this.foodInTummy -= 1;
    console.log(`${this.name} says: WAHH!!! Food in Tummy: ${this.foodInTummy}`);
  }

  puke() {
    this.foodInTummy -= 1;
    console.log(`${this.name} says: BLEH!!! Food in Tummy: ${this.foodInTummy}`);
  }

  yawn() {
    this.restedness -= 1;
    console.log(`${this.name} has current restedness of: ${this.restedness}`);
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
}

const tamagotchi1 = new Tamagotchi("Tama1", "Dragon");
const tamagotchi2 = new Tamagotchi("Tama2", "Unicorn");

tamagotchi1.start();
tamagotchi2.start();

setTimeout(() => {
  tamagotchi1.stop();
  tamagotchi2.stop();
}, 30000);
