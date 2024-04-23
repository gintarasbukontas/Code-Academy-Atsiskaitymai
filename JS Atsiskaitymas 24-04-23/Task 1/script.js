/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const searchBar = document.querySelector("#search");
const submitButton = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output");

let kg;
let lb;
let g;
let oz;

function kgToLb() {
  kg = searchBar.value;
  lb = kg * 2.2046;
  const lbText = document.createElement("p");
  lbText.classList.add("outputText");
  lbText.textContent = `lb: ${lb}`;
  outputDiv.append(lbText);
}

function kgToG() {
  kg = searchBar.value;
  g = kg / 0.001;
  const gText = document.createElement("p");
  gText.classList.add("outputText");
  gText.textContent = `g: ${g}`;
  outputDiv.append(gText);
}

function kgToOz() {
  kg = searchBar.value;
  oz = kg * 35.274;
  const ozText = document.createElement("p");
  ozText.classList.add("outputText");
  ozText.textContent = `oz: ${oz}`;
  outputDiv.append(ozText);
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  outputDiv.innerHTML = "";
  kgToLb();
  kgToG();
  kgToOz();
});
