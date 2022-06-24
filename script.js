// i've decided to take on the theme flipper first
let theme1 = document.getElementById("button1");
let theme2 = document.getElementById("button2");
let theme3 = document.getElementById("button3");
let calculatorPage = document.getElementById("calculatorPage");
let calculator = document.getElementById("calculator")
let calculatorTexts = document.querySelectorAll(".calcText");
let calculatorHeader = document.getElementById("calculatorHeader");
let themeButtons = document.querySelectorAll(".themeButtons");
let calculatorDisplay = document.getElementById("calculatorDisplay");
let calculatorButtons = document.getElementById("calculatorButtons");
let operands = document.querySelectorAll(".operands");
let deleteBtn = document.querySelector(".deleteBtn");
let additionBtn = document.querySelector(".additionBtn");
let subtractionBtn = document.querySelector(".subtractionBtn");
let decimalPoint = document.querySelector(".decimalPoint");
let divisionBtn = document.querySelector(".divisionBtn");
let multiplicationBtn = document.querySelector(".multiplicationBtn");
let allClear = document.querySelector(".allClear");
let equalityBtn = document.querySelector(".equalsToBtn");
theme1.addEventListener("click",firstTheme);
theme2.addEventListener("click",secondTheme);
theme3.addEventListener("click",thirdTheme);
function firstTheme(){
    calculatorPage.style.background = "rgb(60,73,103)";
    calculator.style.background = "rgb(60,73,103)"
    calculatorTexts.forEach(calculatorText => {
        calculatorText.style.color = "white";
    });
    calculatorHeader.style.color = "white";
    themeButtons.forEach(themeButton => {
       themeButton.style.background = "rgb(35,44,67)";
    });
    theme1.style.background = "rgb(208,63,47)";
    theme2.style.background = "rgb(35,44,67)";
    theme3.style.background = "rgb(35,44,67)";
    //calculator header style change ends here
    calculatorDisplay.style.background = "rgb(24,32,52)";
    calculatorDisplay.style.color = "white"
    // calculator display style ends here
    calculatorButtons.style.background = "rgb(24,32,52)";
    operands.forEach(operand => {
        operand.style.background = "white"
        operand.style.color = "rgb(68,75,90)";
        operand.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    });
    deleteBtn.style.background = "hsl(225, 21%, 49%)";
    deleteBtn.style.color = "white";
    deleteBtn.style.boxShadow = "0px 4px 0px hsl(224, 28%, 35%)";
    additionBtn.style.background = "white";
    additionBtn.style.color = "rgb(68,75,90)";
    additionBtn.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    subtractionBtn.style.background = "white";
    subtractionBtn.style.color = "rgb(68,75,90)";
    subtractionBtn.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    decimalPoint.style.background = "white";
    decimalPoint.style.color = "rgb(68,75,90)";
    decimalPoint.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    divisionBtn.style.background = "white";
    divisionBtn.style.color = "rgb(68,75,90)";
    divisionBtn.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    multiplicationBtn.style.background = "white";
    multiplicationBtn.style.color = "rgb(68,75,90)";
    multiplicationBtn.style.boxShadow = "0px 4px 0px rgb(180,165,151)";
    allClear.style.background ="hsl(225, 21%, 49%)";
    allClear.style.color = "white"
    allClear.style.boxShadow = "0px 4px 0px hsl(224, 28%, 35%)";
    equalityBtn.style.background = "hsl(6, 63%, 50%)";
    equalityBtn.style.color = "white";
    equalityBtn.style.boxShadow = "0px 4px 0px hsl(6, 70%, 34%)";
}
function secondTheme(){
    calculatorPage.style.background = "hsl(0, 0%, 90%)";
    calculator.style.background = "hsl(0, 0%, 90%)";
    calculatorTexts.forEach(calculatorText => {
        calculatorText.style.color =  "hsl(60, 10%, 19%)";
    });
    calculatorHeader.style.color = "hsl(60, 10%, 19%)";
    themeButtons.forEach(themeButton => {
       themeButton.style.background = "hsl(0, 5%, 81%)";
    });
    theme1.style.background = "hsl(0, 5%, 81%)";
    theme2.style.background = "hsl(25, 98%, 40%)";
    theme3.style.background = "hsl(0, 5%, 81%)";
    //calculator header style change ends here
    calculatorDisplay.style.background = "hsl(0, 0%, 93%)";
    calculatorDisplay.style.color = "hsl(60, 10%, 19%)";
    // calculator display style ends here
    calculatorButtons.style.background = "hsl(0, 5%, 81%)"
    operands.forEach(operand => {
        operand.style.background = "hsl(45, 7%, 89%)";
        operand.style.color =  "hsl(60, 10%, 19%)";
        operand.style.boxShadow = "0px 4px 0px hsl(35, 11%, 61%)";
    });
    deleteBtn.style.background = "hsl(185, 42%, 37%)";
    deleteBtn.style.color = "white"
    deleteBtn.style.boxShadow = "0px 4px 0px hsl(185, 58%, 25%)"
    additionBtn.style.background = "hsl(45, 7%, 89%)";
    additionBtn.style.color =  "hsl(60, 10%, 19%)";
    additionBtn.style.boxShadow =  "0px 4px 0px hsl(35, 11%, 61%)";
    subtractionBtn.style.background = "hsl(45, 7%, 89%)";
    subtractionBtn.style.color =  "hsl(60, 10%, 19%)";
    subtractionBtn.style.boxShadow =  "0px 4px 0px hsl(35, 11%, 61%)";
    decimalPoint.style.background = "hsl(45, 7%, 89%)";
    decimalPoint.style.color =  "hsl(60, 10%, 19%)";
    decimalPoint.style.boxShadow =  "0px 4px 0px hsl(35, 11%, 61%)";
    divisionBtn.style.background = "hsl(45, 7%, 89%)";
    divisionBtn.style.color =  "hsl(60, 10%, 19%)";
    divisionBtn.style.boxShadow =  "0px 4px 0px hsl(35, 11%, 61%)";
    multiplicationBtn.style.background = "hsl(45, 7%, 89%)";
    multiplicationBtn.style.color =  "hsl(60, 10%, 19%)";
    multiplicationBtn.style.boxShadow =  "0px 4px 0px hsl(35, 11%, 61%)";
    allClear.style.background = "hsl(185, 42%, 37%)";
    allClear.style.color = "white"
    allClear.style.boxShadow = "0px 4px 0px hsl(185, 58%, 25%)";
    equalityBtn.style.background = "hsl(25, 98%, 40%)";
    equalityBtn.style.color = "white"
    equalityBtn.style.boxShadow = "0px 4px 0px hsl(25, 99%, 27%)";
}
function thirdTheme(){
    calculatorPage.style.background = "hsl(268, 75%, 9%)"
    calculator.style.background = "hsl(268, 75%, 9%)"
    calculatorTexts.forEach(calculatorText => {
        calculatorText.style.color = "hsl(52, 100%, 62%)"
    });
    calculatorHeader.style.color = "hsl(52, 100%, 62%)"
    themeButtons.forEach(themeButton => {
       themeButton.style.background = "hsl(268, 71%, 12%)"
    });
    theme1.style.background = "hsl(268, 71%, 12%)"
    theme2.style.background = "hsl(268, 71%, 12%)"
    theme3.style.background =  "hsl(177, 92%, 70%)"
    //calculator header style change ends here
    calculatorDisplay.style.background = "hsl(268, 71%, 12%)"
    calculatorDisplay.style.color = "hsl(52, 100%, 62%)"
    // calculator display style ends here
    calculatorButtons.style.background = "hsl(268, 71%, 12%)"
    operands.forEach(operand => {
        operand.style.background = "hsl(268, 47%, 21%)"
        operand.style.color = "hsl(52, 100%, 62%)"
        operand.style.boxShadow = "0px 4px 0px hsl(290, 70%, 36%)"
    });
    deleteBtn.style.background = "hsl(281, 89%, 26%)";
    deleteBtn.style.color = "white" 
    deleteBtn.style.boxShadow = "0px 4px 0px hsl(285, 91%, 52%)"
    additionBtn.style.background = "hsl(268, 47%, 21%)"
    additionBtn.style.color = "hsl(52, 100%, 62%)"
    additionBtn.style.boxShadow = "0px 4px 0px hsl(290, 70%, 36%)"
    subtractionBtn.style.background = "hsl(268, 47%, 21%)"
    subtractionBtn.style.color = "hsl(52, 100%, 62%)"
    subtractionBtn.style.boxShadow = "0px 4px 0px hsl(290, 70%, 36%)"
    decimalPoint.style.background = "hsl(268, 47%, 21%)"
    decimalPoint.style.color = "hsl(52, 100%, 62%)"
    decimalPoint.style.boxShadow = "0px 4px 0px hsl(290, 70%, 36%)"
    divisionBtn.style.background = "hsl(268, 47%, 21%)"
    divisionBtn.style.color = "hsl(52, 100%, 62%)"
    divisionBtn.style.boxShadow = "0px 4px 0px hsl(290, 70%, 36%)"
    multiplicationBtn.style.background = "hsl(268, 47%, 21%)"
    multiplicationBtn.style.color = "hsl(52, 100%, 62%)"
    multiplicationBtn.style.boxShadow = "0px 4px 0px hsl(290, 70%, 36%)"
    allClear.style.background = "hsl(281, 89%, 26%)"
    allClear.style.color = "white"
    allClear.style.boxShadow = "0px 4px 0px hsl(285, 91%, 52%)"
    equalityBtn.style.background = "hsl(176, 100%, 44%)"
    equalityBtn.style.color = "hsl(198, 20%, 13%)"
    equalityBtn.style.boxShadow = "0px 4px 0px hsl(177, 92%, 70%)"
}
// THE CALCULATOR CODE STARTS HERE
let clearButton = document.querySelector(".allClear")
let deleteButton = document.querySelector(".deleteBtn")
// let calculatorDisplay = document.getElementById("calculatorDisplay");
let secondDisplayContainer = document.querySelector(".secondDisplayContainer");
let signs = document.querySelector(".signs");
// let decimalPoint = document.querySelector(".decimalPoint")
let NumberButton = document.querySelectorAll(".operands")
let firstDisplay = document.querySelector(".first-display")
let dummyDisplay = document.querySelector(".dummy-display")
let add = document.querySelector(".additionBtn")
let subtract = document.querySelector(".subtractionBtn")
let multiply = document.querySelector(".multiplicationBtn")
let divide = document.querySelector(".divisionBtn")
let operationButton = document.querySelector(".equalsToBtn")
let secondDisplay = document.createElement("div");
NumberButton.forEach(button => {
   button.addEventListener("click",eachnumber)
    function eachnumber(){
      firstDisplay.textContent += button.textContent
      add.disabled = false
      subtract.disabled = false
      multiply.disabled = false
      divide.disabled = false
    }
});
add.addEventListener("click",added)
subtract.addEventListener("click",subtracted)
multiply.addEventListener("click",multiplied)
divide.addEventListener("click",divided)
decimalPoint.addEventListener("click", decima)
operationButton.addEventListener("click",operate)
clearButton.addEventListener("click",allclear)
deleteButton.addEventListener("click",deleteCurrentDisplay)
function decima(){
    firstDisplay.textContent += "."
    if(firstDisplay.textContent.includes(".")){
        decimalPoint.disabled = true
    }
    else{
        decimalPoint.disabled = false
    }
}
function deleteCurrentDisplay(){
 firstDisplay.textContent = firstDisplay.textContent.substring(0, firstDisplay.textContent.length -1);
}
function allclear(){
    firstDisplay.textContent = ""
    secondDisplay.textContent = ""
    signs.textContent = ""
    decimalPoint.disabled = false
    add.disabled = true
    divide.disabled = true
    subtract.disabled = true
    multiply.disabled = true
}
add.disabled = true
function added(){
disableButtonRepeat()
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "+"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
        secondDisplay.classList.toggle("second-display");
        dummyDisplay.classList.remove("dummy-display");
        secondDisplay.textContent =  firstDisplay.textContent;
        signs.textContent = "+"
      if(firstDisplay.textContent === "")return
        else{
            clearFirstDisplay()
        } 
    }
}
subtract.disabled = true
function subtracted(){
   disableButtonRepeat()
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "-"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
        secondDisplay.classList.toggle("second-display");
        dummyDisplay.classList.remove("dummy-display");
        secondDisplay.textContent =  firstDisplay.textContent;
        signs.textContent = "-"
        if(firstDisplay.textContent === "")return
        else{
            clearFirstDisplay()
        }
    }
}
multiply.disabled = true
function multiplied(){
 disableButtonRepeat()
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "X"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
    secondDisplay.classList.toggle("second-display");
    dummyDisplay.classList.remove("dummy-display");
    secondDisplay.textContent =  firstDisplay.textContent;
    signs.textContent = "X"
    if(firstDisplay.textContent === "")return
    else{
        clearFirstDisplay()
    } 
    }
}
divide.disabled = true
function divided(){
    disableButtonRepeat()
    if(firstDisplay.textContent !=="" && secondDisplay.textContent !== "" && signs.textContent !== ""){
        calculate()
        secondDisplay.textContent = firstDisplay.textContent
        signs.textContent = "÷"
        firstDisplay.textContent = ""
    }
    else{
        secondDisplayContainer.appendChild(secondDisplay);
        secondDisplay.classList.toggle("second-display");
        dummyDisplay.classList.remove("dummy-display");
        secondDisplay.textContent =  firstDisplay.textContent;
        signs.textContent = "÷"
        if(firstDisplay.textContent === "")return
        else{
            clearFirstDisplay()
        }
    }
}
 function operate(){
    calculate()
 }
function clearFirstDisplay(){
    firstDisplay.textContent = ""
}
 function calculate(){
    let autocalculate;
     if(signs.textContent === "+"){
     autocalculate = +secondDisplay.textContent + +firstDisplay.textContent
     }
     else if(signs.textContent === "-"){
     autocalculate = +secondDisplay.textContent - +firstDisplay.textContent
     }
     else if(signs.textContent === "X"){
        autocalculate = +secondDisplay.textContent * +firstDisplay.textContent
     }
     else if(signs.textContent === "÷"){
        autocalculate = +secondDisplay.textContent / +firstDisplay.textContent
     }
     firstDisplay.textContent = autocalculate;
     secondDisplay.textContent = ""
     signs.textContent = ""
 }
function disableButtonRepeat(){
    add.disabled = true
    divide.disabled = true
    subtract.disabled = true
    multiply.disabled = true
    decimalPoint.disabled = false
}
