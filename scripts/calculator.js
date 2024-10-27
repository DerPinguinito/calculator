export default class Calculator {
    static firstValue = ''
    static secondValue = ''
    static output = ''
    static operator = ''
    static eraseScreen = false

    static add(a, b) {
        this.output = a + b
    }
    static subtract(a, b) {
        this.output = a - b
    }
    static multiply(a, b) {
        this.output = a * b
    }
    static divide(a, b) {
        if (b === 0) {
            alert("ERROR")
            return
        }
        this.output = a / b
    }

    static valueToNeg(value) {
        let x = value.split('')
        x.unshift('-')
        this.output = x.join('')
    }
    static valueToPos(value) {
        let x = value.split('')
        x.shift('')
        this.output = x.join('')
    }
    static changeValueToPosOrNeg(value) {
        if (value[0] === "-") {
            this.valueToPos(value)
            return
        }
        this.valueToNeg(value)
    }

    static operate(operator, a, b) {
        switch(operator) {
            case "+":
                this.add(a, b)
                break
            case "-":
                this.subtract(a, b)
                break
            case "*":
                this.multiply(a, b)
                break
            case "/":
                this.divide(a, b)
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