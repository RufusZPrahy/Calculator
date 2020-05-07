class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.readyToReset = false;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;

    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.currentOperand !== "" && this.previousOperand !== "") this.compute();
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation)  {

        case "+":
            computation = prev + current;
        break;

        case "-":
            computation = prev - current;
        break;

        case "*":
            computation = prev * current;
        break;

        case "÷":
            computation = prev / current;
        break;

    default:
        return;
        }
        this.readyToReset = true;
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let intDisplay
        if (isNaN(integerDigits)) {
            intDisplay = ""
        } else {
            intDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${intDisplay}.${decimalDigits}`
        } else {
            return intDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = "";
        }

    }
}


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement,
    currentOperandTextElement);

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
})

numberButtons.forEach(button => {
    button.addEventListener("click", () => {

        if(calculator.previousOperand === "" &&
        calculator.currentOperand !== "" &&
    calculator.readyToReset) {
            calculator.currentOperand = "";
            calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", button => {
    calculator.delete();
    calculator.updateDisplay();
})

let bodies = document.getElementsByTagName('body');

function changeColor(buttonThingy) {
    if (buttonThingy.value === 'bluegreen') {
        bluegreen();
    }
    else if (buttonThingy.value === 'yellowred') {
        yellowred();
    }
    else if (buttonThingy.value === 'light-darkblue') {
        lightdarkblue();
    }
    else if (buttonThingy.value === 'blackpurple') {
        blackpurple();
    }
    else if (buttonThingy.value === 'whitepink') {
        whitepink();
    }
}

function bluegreen() {
    /*document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #00AAFF, #00FF6C)';*/
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].classList.remove(bodies[i].classList[1]);
        bodies[i].classList.add('boby');
    }
}

function yellowred() {
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].classList.remove(bodies[i].classList[1]);
        bodies[i].classList.add('boby-1');
    }
}

function lightdarkblue() {
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].classList.remove(bodies[i].classList[1]);
        bodies[i].classList.add('boby-2');
    }
}

function blackpurple() {
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].classList.remove(bodies[i].classList[1]);
        bodies[i].classList.add('boby-3');
    }
}

function whitepink() {
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].classList.remove(bodies[i].classList[1]);
        bodies[i].classList.add('boby-4');
    }
}

/*let selects = document.getElementById('alu');
let selects2 = document.getElementById('alu1');

/*let selectsValue = selects.value;*/
/*let selects2Value = selects2.value;*/


/*function recountl() {
    if (selects.value === "cm" && selects2.value === "mm-2") {
        document.getElementById('pom').style.color = '#00AAFF';
    }
    /*else if (buttonThi.value === "m") {

    }
    else if (buttonThi.value === "m") {

    }
    else if (buttonThi.value === "m") {

    }
    else if (buttonThi.value === "m") {

    }
    else if (buttonThi.value === "mm") {

    }
    else if (buttonThi.value === "mm") {

    }
    else if (buttonThi.value === "mm") {

    }
    else if (buttonThi.value === "mm") {

    }
    else if (buttonThi.value === "mm") {

    }
    else if (buttonThi.value === "cm") {

    }
    else if (buttonThi.value === "cm") {

    }
    else if (buttonThi.value === "cm") {

    }
    else if (buttonThi.value === "cm") {

    }
    else if (buttonThi.value === "cm") {

    }
    else if (buttonThi.value === "dm") {

    }
    else if (buttonThi.value === "dm") {

    }
    else if (buttonThi.value === "dm") {

    }
    else if (buttonThi.value === "dm") {

    }
    else if (buttonThi.value === "dm") {

    }
    else if (buttonThi.value === "km") {

    }
    else if (buttonThi.value === "km") {

    }
    else if (buttonThi.value === "km") {

    }
    else if (buttonThi.value === "km") {

    }
    else if (buttonThi.value === "km") {

    }*/
// }

// recountl()


/*function recounth(buttonThing, buttonigo) {
    if (buttonThing.value === "kg") {

    }
    else if (buttonThing.value === "kg") {

    }
    else if (buttonThing.value === "kg") {

    }
    else if (buttonThing.value === "kg") {

    }
    else if (buttonThing.value === "kg") {

    }
    else if (buttonThing.value === "kg") {

    }
    else if (buttonThing.value === "g") {

    }
    else if (buttonThing.value === "g") {

    }
    else if (buttonThing.value === "g") {

    }
    else if (buttonThing.value === "g") {

    }
    else if (buttonThing.value === "g") {

    }
    else if (buttonThing.value === "g") {

    }
    else if (buttonThing.value === "q") {

    }
    else if (buttonThing.value === "q") {

    }
    else if (buttonThing.value === "q") {

    }
    else if (buttonThing.value === "q") {

    }
    else if (buttonThing.value === "q") {

    }
    else if (buttonThing.value === "q") {

    }
    else if (buttonThing.value === "t") {

    }
    else if (buttonThing.value === "t") {

    }
    else if (buttonThing.value === "t") {

    }
    else if (buttonThing.value === "t") {

    }
    else if (buttonThing.value === "t") {

    }
    else if (buttonThing.value === "t") {

    }
    else if (buttonThing.value === "dag") {

    }
    else if (buttonThing.value === "dag") {

    }
    else if (buttonThing.value === "dag") {

    }
    else if (buttonThing.value === "dag") {

    }
    else if (buttonThing.value === "dag") {

    }
    else if (buttonThing.value === "dag") {

    }
    else if (buttonThing.value === "mg") {

    }
    else if (buttonThing.value === "mg") {

    }
    else if (buttonThing.value === "mg") {

    }
    else if (buttonThing.value === "mg") {

    }
    else if (buttonThing.value === "mg") {

    }
    else if (buttonThing.value === "mg") {

    }
}*/

/*function recountvo(buttonThin, bagor) {
    if (buttonThin.value === "m3") {

    }
    else if (buttonThin.value === "m3") {

    }
    else if (buttonThin.value === "m3") {

    }
    else if (buttonThin.value === "m3") {

    }
    else if (buttonThin.value === "m3") {

    }
    else if (buttonThin.value === "m3") {

    }
    else if (buttonThin.value === "m3") {

    }
    else if (buttonThin.value === "m3") {

    }
    else if (buttonThin.value === "mm3") {

    }
    else if (buttonThin.value === "mm3") {

    }
    else if (buttonThin.value === "mm3") {

    }
    else if (buttonThin.value === "mm3") {

    }
    else if (buttonThin.value === "mm3") {

    }
    else if (buttonThin.value === "mm3") {

    }
    else if (buttonThin.value === "mm3") {

    }
    else if (buttonThin.value === "mm3") {

    }
    else if (buttonThin.value === "cm3") {

    }
    else if (buttonThin.value === "cm3") {

    }
    else if (buttonThin.value === "cm3") {

    }
    else if (buttonThin.value === "cm3") {

    }
    else if (buttonThin.value === "cm3") {

    }
    else if (buttonThin.value === "cm3") {

    }
    else if (buttonThin.value === "cm3") {

    }
    else if (buttonThin.value === "cm3") {

    }
    else if (buttonThin.value === "dm3") {

    }
    else if (buttonThin.value === "dm3") {

    }
    else if (buttonThin.value === "dm3") {

    }
    else if (buttonThin.value === "dm3") {

    }
    else if (buttonThin.value === "dm3") {

    }
    else if (buttonThin.value === "dm3") {

    }
    else if (buttonThin.value === "dm3") {

    }
    else if (buttonThin.value === "dm3") {

    }
    else if (buttonThin.value === "km3") {

    }
    else if (buttonThin.value === "km3") {

    }
    else if (buttonThin.value === "km3") {

    }
    else if (buttonThin.value === "km3") {

    }
    else if (buttonThin.value === "km3") {

    }
    else if (buttonThin.value === "km3") {

    }
    else if (buttonThin.value === "km3") {

    }
    else if (buttonThin.value === "km3") {

    }
    else if (buttonThin.value === "hl") {

    }
    else if (buttonThin.value === "hl") {

    }
    else if (buttonThin.value === "hl") {

    }
    else if (buttonThin.value === "hl") {

    }
    else if (buttonThin.value === "hl") {

    }
    else if (buttonThin.value === "hl") {

    }
    else if (buttonThin.value === "hl") {

    }
    else if (buttonThin.value === "hl") {

    }
    else if (buttonThin.value === "dl") {

    }
    else if (buttonThin.value === "dl") {

    }
    else if (buttonThin.value === "dl") {

    }
    else if (buttonThin.value === "dl") {

    }
    else if (buttonThin.value === "dl") {

    }
    else if (buttonThin.value === "dl") {

    }
    else if (buttonThin.value === "dl") {

    }
    else if (buttonThin.value === "dl") {

    }
    else if (buttonThin.value === "cl") {

    }
    else if (buttonThin.value === "cl") {

    }
    else if (buttonThin.value === "cl") {

    }
    else if (buttonThin.value === "cl") {

    }
    else if (buttonThin.value === "cl") {

    }
    else if (buttonThin.value === "cl") {

    }
    else if (buttonThin.value === "cl") {

    }
    else if (buttonThin.value === "cl") {

    }
}*/

/*function recounto(buttonThingo, buttonigor) {
    if (buttonThingo.value === "m2") {

    }
    else if (buttonThingo.value === "m2") {

    }
    else if (buttonThingo.value === "m2") {

    }
    else if (buttonThingo.value === "m2") {

    }
    else if (buttonThingo.value === "m2") {

    }
    else if (buttonThingo.value === "m2") {

    }
    else if (buttonThingo.value === "m2") {

    }
    else if (buttonThingo.value === "mm2") {

    }
    else if (buttonThingo.value === "mm2") {

    }
    else if (buttonThingo.value === "mm2") {

    }
    else if (buttonThingo.value === "mm2") {

    }
    else if (buttonThingo.value === "mm2") {

    }
    else if (buttonThingo.value === "mm2") {

    }
    else if (buttonThingo.value === "mm2") {

    }
    else if (buttonThingo.value === "cm2") {

    }
    else if (buttonThingo.value === "cm2") {

    }
    else if (buttonThingo.value === "cm2") {

    }
    else if (buttonThingo.value === "cm2") {

    }
    else if (buttonThingo.value === "cm2") {

    }
    else if (buttonThingo.value === "cm2") {

    }
    else if (buttonThingo.value === "cm2") {

    }
    else if (buttonThingo.value === "dm2") {

    }
    else if (buttonThingo.value === "dm2") {

    }
    else if (buttonThingo.value === "dm2") {

    }
    else if (buttonThingo.value === "dm2") {

    }
    else if (buttonThingo.value === "dm2") {

    }
    else if (buttonThingo.value === "dm2") {

    }
    else if (buttonThingo.value === "dm2") {

    }
    else if (buttonThingo.value === "km2") {

    }
    else if (buttonThingo.value === "km2") {

    }
    else if (buttonThingo.value === "km2") {

    }
    else if (buttonThingo.value === "km2") {

    }
    else if (buttonThingo.value === "km2") {

    }
    else if (buttonThingo.value === "km2") {

    }
    else if (buttonThingo.value === "km2") {

    }
    else if (buttonThingo.value === "hek") {

    }
    else if (buttonThingo.value === "hek") {

    }
    else if (buttonThingo.value === "hek") {

    }
    else if (buttonThingo.value === "hek") {

    }
    else if (buttonThingo.value === "hek") {

    }
    else if (buttonThingo.value === "hek") {

    }
    else if (buttonThingo.value === "hek") {

    }
    else if (buttonThingo.value === "ar") {

    }
    else if (buttonThingo.value === "ar") {

    }
    else if (buttonThingo.value === "ar") {

    }
    else if (buttonThingo.value === "ar") {

    }
    else if (buttonThingo.value === "ar") {

    }
    else if (buttonThingo.value === "ar") {

    }
    else if (buttonThingo.value === "ar") {

    }
}*/
