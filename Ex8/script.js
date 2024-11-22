function changeBackgroundColor() {
  const colors = ["black", "red"];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}
