function getDay() {
  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const number = parseInt(document.getElementById("dayNumber").value);
  if (number >= 1 && number <= 7) {
    alert(`Le jour correspondant est : ${days[number - 1]}`);
  } else {
    alert("Veuillez entrer un numéro valide entre 1 et 7.");
  }
}
