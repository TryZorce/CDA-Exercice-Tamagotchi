console.log('player file is loaded');

const player = {
  name: "Player",
  feedTamagotchi(tamagotchi) {
    console.log(`Feeding ${tamagotchi.name}`);
    tamagotchi.foodInTummy += 1;
    tamagotchi.updateHTML();
  },
  medicateTamagotchi(tamagotchi) {
    console.log(`Medicating ${tamagotchi.name}`);
    tamagotchi.health += 1;
    tamagotchi.updateHTML();
  },
  knockOutTamagotchi(tamagotchi) {
    console.log(`Knocking out ${tamagotchi.name}`);
    tamagotchi.restedness += 1;
    tamagotchi.updateHTML();
  }
};