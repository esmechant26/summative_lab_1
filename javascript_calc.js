
const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

let storedCalculations = [];

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const equation = display.value;
  const result = calculator(equation);
  display.value = result;
}

function calculator(equation) {
  let operator;

  if (equation.includes('+')) operator = '+';
  else if (equation.includes('-')) operator = '-';
  else if (equation.includes('*')) operator = '*';
  else if (equation.includes('/')) operator = '/';
  else return "";

  const parts = equation.split(operator);
  const num1 = parseFloat(parts[0]);
  const num2 = parseFloat(parts[1]);

  let result;

  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (operator === '*') result = num1 * num2;
  if (operator === '/') {
    if (num2 === 0) return "Error";
    result = num1 / num2;
  }

  const historyEntry = `${equation} = ${result}`;
  addToHistory(historyEntry);

  return result;
}

function addToHistory(entry) {
  storedCalculations.push(entry);

  let html = "";
  for (let calc of storedCalculations) {
    html += `<li>${calc}</li>`;
  }

  historyList.innerHTML = html;
}

function clearHistory() {
  storedCalculations = [];
  historyList.innerHTML = "";
}