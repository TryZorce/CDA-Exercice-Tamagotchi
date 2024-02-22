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
}

const tamagotchi1 = new Tamagotchi("Tama1", "Dragon");
const tamagotchi2 = new Tamagotchi("Tama2", "Unicorn");

tamagotchi1.cry();
tamagotchi2.cry();
tamagotchi1.puke();
tamagotchi2.yawn();