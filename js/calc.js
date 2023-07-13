const costOptions = {
	minCost: 1500,
	medCost: 2500,
	maxCost: 5000,
  };
  
  const checkboxMoveSensor = document.getElementById("flexCheckDefault");
  const checkboxDoorSensor = document.getElementById("flexCheckChecked");
  let totalCost = costOptions.medCost;
  let totalCostElement = document.getElementById("total_cost");
  
  const btnradio1 = document.getElementById("btnradio1");
  const btnradio2 = document.getElementById("btnradio2");
  const btnradio3 = document.getElementById("btnradio3");
  
  btnradio1.addEventListener("click", () => {
	totalCost = calculateTotalCost();
	updateTotalCost();
  });
  
  btnradio2.addEventListener("click", () => {
	totalCost = calculateTotalCost();
	updateTotalCost();
  });
  
  btnradio3.addEventListener("click", () => {
	totalCost = calculateTotalCost();
	updateTotalCost();
  });
  
  checkboxMoveSensor.addEventListener("change", () => {
	totalCost = calculateTotalCost();
	updateTotalCost();
  });
  
  checkboxDoorSensor.addEventListener("change", () => {
	totalCost = calculateTotalCost();
	updateTotalCost();
  });
  
  function calculateTotalCost() {
	let additionalCost = 0;
	if (checkboxMoveSensor.checked) {
	  additionalCost += 250;
	}
	if (checkboxDoorSensor.checked) {
	  additionalCost += 110;
	}
	return totalCost + additionalCost;
  }
  
  function updateTotalCost() {
	totalCostElement.innerText = totalCost;
  }
  