const costOptions = {
	minCost: 2500,
	medCost: 4500,
	maxCost: 6900,
};

let checkboxMoveSensor = document.querySelector(".flexCheckMove");
let checkboxAirSensor = document.querySelector(".flexCheckAir");
let checkboxTempSensor = document.querySelector(".flexCheckTemp");
let checkboxSmokeSensor = document.querySelector(".flexCheckSmoke");

let moveSensor = checkboxMoveSensor.checked ? 1000 : 0;
let airSensor = checkboxAirSensor.checked ? 1000 : 0;
let tempSensor = checkboxTempSensor.checked ? 300 : 0;
let smokeSensor = checkboxSmokeSensor.checked ? 200 : 0;

let totalCost = costOptions.medCost;



checkboxMoveSensor.addEventListener("change", () => {
	moveSensor = checkboxMoveSensor.checked ? 1000 : 0;
	updateTotalCost();
});

checkboxAirSensor.addEventListener("change", () => {
	airSensor = checkboxAirSensor.checked ? 1000 : 0;
	updateTotalCost();
});

checkboxTempSensor.addEventListener("change", () => {
	tempSensor = checkboxTempSensor.checked ? 300 : 0;
	updateTotalCost();
});

checkboxSmokeSensor.addEventListener("change", () => {
	smokeSensor = checkboxSmokeSensor.checked ? 200 : 0;
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
    imageToggleCost1 = 1000;
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
    imageToggleCost2 = 1000;
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
    imageToggleCost3 = 1000;
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
    imageToggleCost4 = 1000;
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


let textOfferMin = document.querySelector(".offer_text_min");
let textOfferMed = document.querySelector(".offer_text_med");
let textOfferMax = document.querySelector(".offer_text_max");


let activeTextBlock = textOfferMed; // Початковий активний блок
hideAllTextBlocks();
btnradio1.addEventListener("change", () => {
  if (btnradio1.checked) {
    hideAllTextBlocks();
    activeTextBlock = textOfferMin;
    showActiveTextBlock();
  }
});

btnradio2.addEventListener("change", () => {
  if (btnradio2.checked) {
    hideAllTextBlocks();
    activeTextBlock = textOfferMed;
    showActiveTextBlock();
  }
});

btnradio3.addEventListener("change", () => {
  if (btnradio3.checked) {
    hideAllTextBlocks();
    activeTextBlock = textOfferMax;
    showActiveTextBlock();
  }
});

function hideAllTextBlocks() {
  textOfferMin.style.display = "none";
  textOfferMed.style.display = "none";
  textOfferMax.style.display = "none";
}

function showActiveTextBlock() {
  activeTextBlock.style.display = "block";
}

// Показати початковий активний блок
showActiveTextBlock();


// document.getElementById("satedbtn").addEventListener("click", function () {
//   document.querySelector(".total_cost").style.display = "none";
// })

let totalCostElement = document.getElementById("total_cost");

// const satedbtnElement = document.getElementById("satedbtn");

// satedbtnElement.addEventListener("click", function () {
//   if (totalCostElement.style.display === "none") {
//     totalCostElement.style.display = "inline";
//   } else {
//     totalCostElement.style.display = "none";
//   }
// });
