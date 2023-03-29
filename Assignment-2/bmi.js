/**
 * Build a BMI Calculator using JavaScript and deploy it to Netlify
 **/

const calculateBtn = document.getElementById("calculateBtn"),
  result = document.getElementById("result"),
  reset = document.getElementById("reset");

  /**
   * calculates the Body Mass Index (BMI) of a person when the "calculateBtn" is clicked.
   **/
  calculateBtn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
  e.preventDefault();
  let height = parseInt(document.querySelector("#heightInput").value);
  let weight = parseInt(document.querySelector("#weightInput").value);

  // Validate Input
  if ((height === "" || isNaN(height))&&(weight === "" || isNaN(weight))) {
    result.innerHTML = "Provide a valid Height! & Weight! only numeric value";
 }
  else if (height === "" || isNaN(height)) {
     result.innerHTML = "Provide a valid Height! only numeric value";
  } else if (weight === "" || isNaN(weight)) {
     result.innerHTML = "Provide a valid Weight! only numeric value";
  } else {
   /**
    * BMI - weight (kg) / (height (m) * height (m)).[kg/m2]
    * Normal - 18.5 -24.9
    * Underweight - < 18.5
    * Overweight -  25 - 29.9
    * Obese -  30 and above
    **/
    let bmi = (weight / (Math.pow(height, 2))).toFixed(2);
    if (bmi < 18.5) {
      showResult(`Underweight: <span>${bmi}</span>`, "orange");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      showResult(`Normal: <span>${bmi}</span>`, "green");
    } else if (bmi >= 25.0 && bmi < 29.9) {
      showResult(`Overweight: <span>${bmi}</span>`, "red");
    } else {
      showResult(`Obese: <span>${bmi}</span>`, "red");
    }
  }
  reset.style.display = "block";
}

function showResult(val, color) {
  result.style.backgroundColor = color;
  return (result.innerHTML = val);
}

reset.addEventListener("click", () => {
  document.querySelector("form").reset();
  reset.style.display = "none";
  result.style.display = "none";
});