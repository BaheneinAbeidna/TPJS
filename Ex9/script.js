function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  if (!name || !email) {
    message.textContent = "Tous les champs sont requis.";
    message.style.color = "red";
    message.style.marginTop = "10px";
    message.style.fontSize = "18px";
    message.style.fontWeight = "bold";
  } else {
    message.textContent = "Formulaire soumis avec succès.";
    message.style.color = "green";
    message.style.marginTop = "10px";
    message.style.fontSize = "18px";
    message.style.fontWeight = "bold";
  }
}
