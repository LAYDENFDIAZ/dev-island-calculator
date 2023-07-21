const OPPERATIONS_BOX = document.querySelector(".opperations-box");
const CLEAR_BUTTON = document.querySelector(".clear-button");
const BTN_EQUALS = document.querySelector(".button-equals");

let opperand1 = null;
let opperand2 = null;
let opperator = null;

let shouldClearOpperationsBox = false;

CLEAR_BUTTON.style.backgroundColor = "purple";

const onNumberBtnClicked = (e) => {
  if (shouldClearOpperationsBox) {
    OPPERATIONS_BOX.value = "";
  }

  shouldClearOpperationsBox = false;

  OPPERATIONS_BOX.value += e.target.innerHTML;
};

const setNumberButtonClickHandlers = () => {
  const numberButtons = document.querySelectorAll(".number-button");

  numberButtons.forEach((button) => {
    button.addEventListener("click", onNumberBtnClicked);
  });
};

const onEqualsBtnClicked = () => {
  if (!OPPERATIONS_BOX.value || !opperator) return;

  opperand2 = Number(OPPERATIONS_BOX.value);

  OPPERATIONS_BOX.value = evaluateExpression();

  opperand1 = null;
  opperand2 = null;

  opperator = null;
};

const onClearBtnClicked = () => {
  OPPERATIONS_BOX.value = "";

  opperand1 = null;
  opperand2 = null;

  opperator = null;
};

const evaluateExpression = () => {
  switch (opperator) {
    case "+":
      return opperand1 + opperand2;
    case "-":
      return opperand1 - opperand2;
    case "*":
      return opperand1 * opperand2;
    case "/":
      return opperand1 / opperand2;
    case "%":
      return opperand1 % opperand2;
    default:
      return 0;
  }
};

const onOpperatorButtonClicked = (e) => {
  if (!OPPERATIONS_BOX.value || opperator) return;
  shouldClearOpperationsBox = true;
  opperand1 = Number(OPPERATIONS_BOX.value);
  opperator = e.target.innerHTML;
};

const setOpperatorsBtnClickHandlers = () => {
  const opperatorButtons = document.querySelectorAll(".opperator-button");

  opperatorButtons.forEach((opperatorButton) => {
    opperatorButton.addEventListener("click", onOpperatorButtonClicked);
  });
};

setNumberButtonClickHandlers();
setOpperatorsBtnClickHandlers();
CLEAR_BUTTON.addEventListener("click", onClearBtnClicked);
BTN_EQUALS.addEventListener("click", onEqualsBtnClicked);
