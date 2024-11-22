function ajouterNote() {
  const input = document.createElement("input");
  input.type = "number";
  input.className = "note";
  input.placeholder = "Entrez une note";
  document.getElementById("notes-container").appendChild(input);
}

function calculerMoyenne() {
  const notes = document.querySelectorAll(".note");
  let somme = 0;
  let nombreNotes = 0;

  notes.forEach((note) => {
    const valeur = parseFloat(note.value);
    if (!isNaN(valeur)) {
      somme += valeur;
      nombreNotes++;
    }
  });

  const moyenne =
    nombreNotes > 0 ? (somme / nombreNotes).toFixed(2) : "Aucune note valide";
  document.getElementById("resultat").textContent = `Moyenne : ${moyenne}`;
}
