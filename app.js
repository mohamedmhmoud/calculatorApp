const buttons = document.querySelectorAll("button");
const ClearBtn = document.querySelector(".Clear");
const displayP = document.querySelector(".displayP");
// functions
const calculator = {
  items: [],
  display: 0,
};

const calculateFn = (values) => {
  const expression = values.filter((v) => v !== "=").join("");
  console.log(expression);
  const result = eval(expression);
  calculator.items = [{ value: result.toString() }];
  console.log(result);
  calculator.display = result;
  displayP.textContent = calculator.display || 0;
  console.log(calculator);
};

const displayImediatly = (values) => {
  console.log(values);
  if (!values) return;
  const expression = values.filter((v) => v.value !== "=").join("");
  displayP.textContent = expression;
};

// events
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.items.push(button);

    const values = calculator.items.map((btn) => btn.value);
    displayImediatly(values);
    if (button.value === "=") {
      calculateFn(values);
    }
  });
});

ClearBtn.addEventListener("click", () => {
  calculator.items = [];
  calculator.display = 0;
  displayP.textContent = 0;
  console.log(calculator);
});
