let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum = document.getElementById("sum-el");
function add() {
  let ans = num1 + num2;
  sum.textContent = "Sum: " + ans;
}
function subtract() {
  let ans = num1 - num2;
  sum.textContent = "Subtraction: " + ans;
}
function divide() {
  let ans = num1/num2;
  sum.textContent = "Division: " + ans;
}
function multiply() {
  let ans = num1 * num2;
  sum.textContent = "Product: " + ans;
}