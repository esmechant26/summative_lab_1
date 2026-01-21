//implement functions for addition, subtraction, multiplication, divison
//store each calculations details in an array (.push)
//display the calculations to the user

//create empty stored calculations array
let storedCalculations = [];


function calculator(equation){
    let result;
    let arr = equation.split(" ")
    let num1 = parseFloat(arr[0]);
    let num2 = parseFloat(arr[2]);

//function that adds calculations to stored calculations array
function addToHistory(){
storedCalculations.push(equation + ' = ' + result)
return
}

//if statements that perform equations depending on the user's input
   if(arr[1] == '+'){
    result = num1 + num2;
    addToHistory();
    return console.log(equation, '=', result)
   
   }
    if(arr[1] == '-'){
    result = num1 - num2;
    addToHistory();
    return console.log(equation, '=', result)
   }
   if(arr[1] == '*'){
    result = num1 * num2;
    addToHistory();
    return console.log(equation, '=', result)
   }
    if(arr[1] == '/'){
        if (num2 != 0) {
       result = num1 / num2;
        }
        else{
            console.log(equation, '= undefined');
            return undefined;
        }
        addToHistory();
    return console.log(equation, '=', result)
   }
}

//function that displays the calculation history or returns 'no stored calculations'
function displayHistory() {
    if (storedCalculations.length == 0){
        return console.log('No stored calculations');
    }
    else{
        console.log('stored calculations: ' + storedCalculations)
    }
    
}

//tests
calculator('3 + 1')
calculator('41 - 5')
calculator('73 * 1')
calculator('73 / 0')
displayHistory()
calculator('4 + -11')
calculator('45 - 5345')
calculator('73.3 * -51')
calculator('-86 / 0')
calculator('0 / 32')
calculator('0 / -32')
displayHistory()