let storedCalculations = [];

function calculator(equation){
let arr = equation.split(" ")
let num1 = parseInt(arr[0]);
let num2 = parseInt(arr[2]);
if(arr[1] == '+'){
let result = num1 + num2;
storedCalculations.push(equation)
return console.log(equation, '=', result)
}
if(arr[1] == '-'){
let result = num1 - num2;
storedCalculations.push(equation)
return console.log(equation, '=', result)
}
if(arr[1] == '*'){
let result = num1 * num2;
storedCalculations.push(equation)
return console.log(equation, '=', result)
}
if(arr[1] == '/'){
let result = num1 / num2;
storedCalculations.push(equation)
return console.log(equation, '=', result)
}
}

function displayHistory() {
console.log('stored calculations: ' + storedCalculations)
}


//tests:
calculator('3 + 1')
calculator('41 - 5')
calculator('73 * 1')
calculator('73 / 54.3')
displayHistory()
calculator('345 + 3')
calculator('6 - 48')
calculator('23 * 13')
calculator('83 / 435.9')
displayHistory()