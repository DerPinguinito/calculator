export default class Calculator {
    static output = ''
    static operator = ''

    static add(a, b) {
        Calculator.output = a + b
    }
    static subtract(a, b) {
        Calculator.output = a - b
    }
    static multiply(a, b) {
        Calculator.output = a * b
    }
    static divide(a, b) {
        Calculator.output = a / b
    }

    static operate(operator, a, b) {
        switch(operator) {
            case "+":
                Calculator.add(a, b)
                break
            case "-":
                Calculator.subtract(a, b)
                break
            case "*":
                Calculator.multiply(a, b)
                break
            case "/":
                Calculator.divide(a, b)
                break
            default:
                null
        }
    }
}