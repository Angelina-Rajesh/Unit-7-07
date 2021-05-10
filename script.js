// Connects "multiply" button to the "calculate" function
document.getElementById('multiply').addEventListener('click', calculate)
let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0

function calculate () {
  // get user input and convert to an integer
  firstNum = document.getElementById('first').value
  secondNum = document.getElementById('second').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)
  // Counter to see how many times it's looped through
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  // Writing to show the answer
  document.getElementById('answer').innerHTML = ('The answer is: ' + answer)
}
