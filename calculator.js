// program for a simple calculator
// declaring the variable
let result;

// take the operand input
// parsefloat takes in a string and makes it a float so that arithmetic operations can be run on it 
// im also using parsefloat because it is more versatile i.e it can take in both integers and floats,
// than parseint()
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));


// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// i can either use if ... else if ... else for this or switch. They pretty much react the same way.
switch(operator) {
    case '+':
         result = number1 + number2;
         alert("your answer is " + result)
        break;

    case '-':
         result = number1 - number2;
         alert("your answer is " + result)
        break;

    case '*':
         result = number1 * number2;
         alert("your answer is " + result)
        break;

    case '/':
         result = number1 / number2;
         alert("your answer is " + result)
        break;

    default:
        alert('Invalid input ');
        break;
}