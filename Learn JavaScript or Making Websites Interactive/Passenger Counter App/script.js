// document.getElementById("count").innerText = 5;

/* initialise the count as 0
listen for clicks on the increment button
increment the count variable when the button is clicked
change the count-el in the HTML
*/
let count = 0;
let countEl = document.getElementById("count-el"); //pass in arguments
function increment() {
  count += 1;
  countEl.textContent = count;
}
let saveEl = document.getElementById("save-el");
function save() {
  let saveEntry = count + " - ";
  saveEl.textContent += saveEntry;
  countEl.textContent = 0;
  count = 0;
}
save();