const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let num = document.getElementById("num");

btn1.addEventListener("click", () => {
  num.textContent = "1";
});

btn2.addEventListener("click", () => {
  num.textContent = "2";
});


