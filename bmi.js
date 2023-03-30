function calculate() {
  var weight = document.getElementById("weight").value;
  document.getElementById("span-weight-val").innerText = weight + " Kg";

  var height = document.getElementById("height").value;
  document.getElementById("span-height-val").innerText = height + " cm";

  var bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  bmivalue.innerText = bmi;

  if (bmi < 18.5) {
    category = "Underweight";
    bmivalue.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
    bmivalue.style.color = "#0be881";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
    bmivalue.style.color = "#ff884d";
  } else {
    category = "Obese";
    bmivalue.style.color = "#ff5e57";
  }
  document.getElementById("category").innerText = category;
}
