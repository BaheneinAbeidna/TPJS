const nombre = 42;
const chaine = "Bonjour, monde!";
const booleen = true;

console.log("Nombre :", nombre);
console.log("Chaîne :", chaine);
console.log("Booléen :", booleen);

// Select the output div
const outputDiv = document.getElementById("output");

// Display variable values on the page
outputDiv.innerHTML = `
<p>Nombre : ${nombre}</p>
<p>Chaîne : ${chaine}</p>
<p>Booléen : ${booleen}</p>
`;
