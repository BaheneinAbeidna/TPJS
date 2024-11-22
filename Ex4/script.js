function afficherTable() {
  const nombre = document.getElementById("nombre").value;
  let resultat = "";
  for (let i = 1; i <= 10; i++) {
    resultat += `${nombre} x ${i} = ${nombre * i}<br>`;
  }
  document.getElementById("resultat").innerHTML = resultat;
}
