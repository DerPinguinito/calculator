export default class Calculator {
    static firstValue = ''
    static secondValue = ''
    static output = ''
    static operator = ''
    static eraseScreen = false

    static #add(a, b) {
        this.output = a + b
    }
    static #subtract(a, b) {
        this.output = a - b
    }
    static #multiply(a, b) {
        this.output = a * b
    }
    static #divide(a, b) {
        if (b === 0) {
            alert("ERROR")
            return
        }
        this.output = a / b
    }

    static #valueToNeg(value) {
        let x = value.split('')
        x.unshift('-')
        this.output = x.join('')
    }
    static #valueToPos(value) {
        let x = value.split('')
        x.shift('')
        this.output = x.join('')
    }
    static changeValueToPosOrNeg(value) {
        if (value[0] === "-") {
            Calculator.#valueToPos(value)
            return
        }
        Calculator.#valueToNeg(value)
    }

    static operate(operator, a, b) {
        switch(operator) {
            case "+":
                Calculator.#add(a, b)
                break
            case "-":
                Calculator.#subtract(a, b)
                break
            case "*":
                Calculator.#multiply(a, b)
                break
            case "/":
                Calculator.#divide(a, b)
                break
            default:
                null
        }
    }
    
    static clear() {
        this.output = '0'
    }
    static reset() {
        this.firstValue = ''
        this.secondValue = ''
        this.output = '0'
        this.operator = ''
        this.eraseScreen = false
    }
}