const newTamagotchiForm = document.getElementById("newTamagotchiForm");
const tamagotchiContainer = document.getElementById("tamagotchiContainer");

newTamagotchiForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const tamagotchiName = document.getElementById("tamagotchiName").value;
  const creatureType = document.getElementById("creatureType").value;
  const newTamagotchi = new Tamagotchi(tamagotchiName, creatureType);
  newTamagotchi.start(); // Démarrage automatique du nouveau Tamagotchi
  const tamagotchiDiv = document.createElement("div");
  tamagotchiDiv.id = tamagotchiName; // Utiliser le nom du Tamagotchi comme ID pour référence future
  tamagotchiDiv.innerHTML = `${newTamagotchi.name} (${newTamagotchi.creatureType}):<br>
    <span id="food${tamagotchiName}">Food: ${newTamagotchi.foodInTummy}</span>, 
    <span id="restedness${tamagotchiName}">Restedness: ${newTamagotchi.restedness}</span>, 
    <span id="health${tamagotchiName}">Health: ${newTamagotchi.health}</span>`;

  const feedButton = document.createElement("button");
  feedButton.textContent = "Feed";
  feedButton.addEventListener("click", function() {
    newTamagotchi.foodInTummy += 1;
    document.getElementById(`food${tamagotchiName}`).textContent = `Food: ${newTamagotchi.foodInTummy}`;
  });

  const restButton = document.createElement("button");
  restButton.textContent = "Rest";
  restButton.addEventListener("click", function() {
    newTamagotchi.restedness += 1;
    document.getElementById(`restedness${tamagotchiName}`).textContent = `Restedness: ${newTamagotchi.restedness}`;
  });

  const medicateButton = document.createElement("button");
  medicateButton.textContent = "Medicate";
  medicateButton.addEventListener("click", function() {
    newTamagotchi.health += 1;
    document.getElementById(`health${tamagotchiName}`).textContent = `Health: ${newTamagotchi.health}`;
  });

  tamagotchiDiv.appendChild(feedButton);
  tamagotchiDiv.appendChild(restButton);
  tamagotchiDiv.appendChild(medicateButton);

  tamagotchiContainer.appendChild(tamagotchiDiv);
});