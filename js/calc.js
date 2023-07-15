const costOptions = {
	minCost: 1500,
	medCost: 2500,
	maxCost: 5000,
};

let checkboxMoveSensor = document.querySelector(".flexCheckMove");
let checkboxAirSensor = document.querySelector(".flexCheckAir");
let checkboxTempSensor = document.querySelector(".flexCheckTemp");
let checkboxSmokeSensor = document.querySelector(".flexCheckSmoke");

let moveSensor = checkboxMoveSensor.checked ? 500 : 0;
let airSensor = checkboxAirSensor.checked ? 780 : 0;
let tempSensor = checkboxTempSensor.checked ? 190 : 0;
let smokeSensor = checkboxSmokeSensor.checked ? 1110 : 0;

let totalCost = costOptions.medCost;

let totalCostElement = document.getElementById("total_cost");

checkboxMoveSensor.addEventListener("change", () => {
	moveSensor = checkboxMoveSensor.checked ? 500 : 0;
	updateTotalCost();
});

checkboxAirSensor.addEventListener("change", () => {
	airSensor = checkboxAirSensor.checked ? 780 : 0;
	updateTotalCost();
});

checkboxTempSensor.addEventListener("change", () => {
	tempSensor = checkboxTempSensor.checked ? 190 : 0;
	updateTotalCost();
});

checkboxSmokeSensor.addEventListener("change", () => {
	smokeSensor = checkboxSmokeSensor.checked ? 1110 : 0;
	updateTotalCost();
});

let btnradio1 = document.getElementById("btnradio1");
let btnradio2 = document.getElementById("btnradio2");
let btnradio3 = document.getElementById("btnradio3");

btnradio1.addEventListener("click", () => {
	totalCost = costOptions.minCost;
	updateTotalCost();
});

btnradio2.addEventListener("click", () => {
	totalCost = costOptions.medCost;
	updateTotalCost();
});

btnradio3.addEventListener("click", () => {
	totalCost = costOptions.maxCost;
	updateTotalCost();
});



// Додаю ще елементи зображень

let imageToggle1 = document.getElementById("imageToggle1");
let imageToggle2 = document.getElementById("imageToggle2");
let imageToggle3 = document.getElementById("imageToggle3");
let imageToggle4 = document.getElementById("imageToggle4");

let isChecked1 = false;
let isChecked2 = false;
let isChecked3 = false;
let isChecked4 = false;

let imageToggleCost1 = 0;
let imageToggleCost2 = 0;
let imageToggleCost3 = 0;
let imageToggleCost4 = 0;

imageToggle1.addEventListener("click", function() {
  isChecked1 = !isChecked1;
  if (isChecked1) {
    imageToggleCost1 = 3000;
    imageToggle1.classList.add("selected");
  } else {
    imageToggleCost1 = 0;
    imageToggle1.classList.remove("selected");
  }
  updateTotalCost();
});

imageToggle2.addEventListener("click", function() {
  isChecked2 = !isChecked2;
  if (isChecked2) {
    imageToggleCost2 = 4000;
    imageToggle2.classList.add("selected");
  } else {
    imageToggleCost2 = 0;
    imageToggle2.classList.remove("selected");
  }
  updateTotalCost();
});

imageToggle3.addEventListener("click", function() {
  isChecked3 = !isChecked3;
  if (isChecked3) {
    imageToggleCost3 = 5000;
    imageToggle3.classList.add("selected");
  } else {
    imageToggleCost3 = 0;
    imageToggle3.classList.remove("selected");
  }
  updateTotalCost();
});

imageToggle4.addEventListener("click", function() {
  isChecked4 = !isChecked4;
  if (isChecked4) {
    imageToggleCost4 = 7000;
    imageToggle4.classList.add("selected");
  } else {
    imageToggleCost4 = 0;
    imageToggle4.classList.remove("selected");
  }
  updateTotalCost();
});

function updateTotalCost() {
  totalCostElement.innerText = totalCost + moveSensor + airSensor + tempSensor + smokeSensor + imageToggleCost1 + imageToggleCost2 + imageToggleCost3 + imageToggleCost4;
}
