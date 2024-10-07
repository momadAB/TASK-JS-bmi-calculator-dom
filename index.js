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

  

  alert(`Challenge 1: Your BMI is ${Math.round(bmi)} \nChallenge 2: Your BMI state is ${BMIState}`)
}