function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  const bmi = (weight/(height*0.01) ** 2)
  let BMIState;

  if (bmi < 18.5) {BMIState = 'Underweight'}
  else if (bmi >= 18.5 && bmi < 25) {BMIState = 'Healthy weight'}
  else if (bmi >= 25 && bmi < 30) {BMIState = 'Overweight'}
  else {BMIState = 'Obese'}

  let normalBMIbottom = 19;
  let normalBMItop = 24;

  if (age > 24) {normalBMIbottom += 1; normalBMItop += 1}
  if (age > 34) {normalBMIbottom += 1; normalBMItop += 1}
  if (age > 44) {normalBMIbottom += 1; normalBMItop += 1}
  if (age > 54) {normalBMIbottom += 1; normalBMItop += 1}
  if (age > 64) {normalBMIbottom += 1; normalBMItop += 1}

  const health = (bmi >= normalBMIbottom && bmi <= normalBMItop) ? 'Healthy' : 'Not Healthy'

  alert(`Challenge 1: Your BMI is ${Math.round(bmi)} \nChallenge 2: Your BMI state is ${BMIState} \nChallenge 3: You are ${health}`)
}