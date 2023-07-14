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
  
  function updateTotalCost() {
	totalCostElement.innerText = totalCost + moveSensor + airSensor + tempSensor + smokeSensor;
  }
  