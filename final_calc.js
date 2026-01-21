//implement functions for addition, subtraction, multiplication, divison
//store each calculations details in an array (.push)
//display the calculations to the user

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
        if (num2 != 0) {
        let result = num1 / num2;
        }
        else{
            return result = undefined;
        }
    
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
calculator('73 / 0')
displayHistory()
calculator('3 + 1')
calculator('41 - 5')
calculator('73 * 1')
calculator('73 / 0')
calculator('0 / 32')
displayHistory()