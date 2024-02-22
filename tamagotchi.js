console.log('tamagotchi file is loaded');

class Tamagotchi {
  constructor() {
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }

  cry() {
    this.foodInTummy -= 1;
    console.log("WAHH!!!");
    console.log("Food in Tummy: " + this.foodInTummy);
  }
}

const tamagotchi1 = new Tamagotchi();
const tamagotchi2 = new Tamagotchi();

tamagotchi1.cry();
tamagotchi2.cry();
