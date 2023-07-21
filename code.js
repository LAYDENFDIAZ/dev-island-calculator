const numnbersOperators = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "+",
  "-",
  "/",
  "%",
  "*",
  "AC",
];

const btnContainer = document.getElementById("btnContainer");

for (let i = 0; i < numnbersOperators.length; i++) {
  const button = document.createElement("button");
  button.innerText = numnbersOperators[i];
  btnContainer.appendChild(button);
  if (typeof numnbersOperators[i] == "string") {
    button.style.backgroundColor = "orange";
  }
}

const add = function (number1, number2) {};

add();
