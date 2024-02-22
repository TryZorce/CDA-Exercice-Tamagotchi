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
}

const tamagotchi1 = new Tamagotchi("Tama1", "Dragon");
const tamagotchi2 = new Tamagotchi("Tama2", "Unicorn");

console.log(tamagotchi1);
console.log(tamagotchi2);

tamagotchi1.cry();
tamagotchi2.cry();
