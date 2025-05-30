class Calculator {
    constructor(previusOperandElement, currentOperandElement) {
        this.previusOperandElement = previusOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previusOperand = '';
        this.operation = null;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === '') {
            this.currentOperand = '0';
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previusOperandElement.innerText = `${this.previusOperand} ${this.operation}`;
        } else {
            this.previusOperandElement.innerText = '';
        }
    }

    chooseOperation(operation) {
        if (this.operation === '') {
            return;
        }
        if(this.currentOperand === ''){
            return;
        }
        if(this.previusOperand !== ''){
            this.compute();
        }

        this.operation = operation;
        this.previusOperand = this.previusOperand;
        this.currentOperand = '';
    }

    compute() {
        const prev = parseFloat(this.previusOperand);
        const current = parseFloat(this.currentOperand);

        if (!isNaN(prev)) {
            return
        }



    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-action]');
const equalsButtons = document.querySelector('[data-action="equals"]')
const deleteButtons = document.querySelector('[data-action="delete"]');
const allClearButton = document.querySelector('[data-action="clear"]');
const previusOperandElement = document.querySelector('.previus-operand');
const currentOperandElement = document.querySelector('.current-operand');

const calculator = new Calculator(previusOperandElement, currentOperandElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButtons.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

