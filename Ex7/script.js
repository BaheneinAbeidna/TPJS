function calculateArea() {
  const radius = parseFloat(document.getElementById("radius").value);
  if (isNaN(radius) || radius <= 0) {
    alert("Veuillez entrer un rayon valide.");
  } else {
    const area = Math.PI * Math.pow(radius, 2);
    document.getElementById(
      "result"
    ).textContent = `L'aire du cercle est : ${area.toFixed(2)}`;
  }
}
