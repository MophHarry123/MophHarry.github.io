let firstNumber = document.getElementById("fisNum");
let secondNumber = document.getElementById("secNum");
let operator = document.getElementById("operator");
let calculateBtn = document.getElementById("calbtn");
let result = document.getElementById("result");


calbtn.addEventListener("click",addition);

function addition(){
    let answer;
    let num1 = firstNumber.value;
    let num2 = firstNumber.value;

    if(operator.value === "+")
    {
        answer =parseFloat(num1) + parseFloat(num2);
    }
    else if (operator.value==="-")
    {
        answer = parseFloat(num1) - parseFloat(num2);
    }
    else if (operator.value==="*")
    {
        answer = parseFloat(num1) * parseFloat(num2);
    }
    else if (operator.value==="/")
    {
        answer = parseFloat(num1) / parseFloat(num2);
    }
    
  result.innerText = answer;
}
