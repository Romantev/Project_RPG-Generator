function changeBackground() {
  let red = document.querySelector("#red").value;
  let green = document.querySelector("#green").value;
  let blue = document.querySelector("#blue").value;
  let color = "rgb(" + red + ", " + green + ", " + blue + ")";

  document.querySelector("main").style.backgroundColor = color;
  document.querySelector("#result").value = color;

  document.querySelector("#red").addEventListener("input", changeBackground);
  document.querySelector("#green").addEventListener("input", changeBackground);
  document.querySelector("#blue").addEventListener("input", changeBackground);
}
