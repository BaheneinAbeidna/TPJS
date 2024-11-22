function maj() {
  const age = parseFloat(document.getElementById("age").value); // Get input value
  const resultElement = document.getElementById("result"); // Select result element

  if (isNaN(age)) {
    resultElement.textContent = "Please enter a valid age."; // Handle invalid input
  } else if (age >= 18) {
    resultElement.textContent = "Majeur"; // Age 18 or above
  } else if (age >= 0 && age < 18) {
    resultElement.textContent = "Mineur"; // Age between 0 and 18
  } else {
    resultElement.textContent = "Age can't be negative"; // Handle negative age
  }
}
