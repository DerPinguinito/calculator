import calc from "./calculator.js"

export default class MyUI {
    static #updateScreen() {
        const OUTPUT = document.getElementById("output")
        if (OUTPUT) {
            console.log("Output element found")
            OUTPUT.textContent ? null : calc.output = '0'
            OUTPUT.textContent = calc.output
        }
    }
    static #updateValue() {
        if (calc.output[0] === '0' && calc.output[1] != '.') {
            calc.output = calc.output.substring(1)
        }
        if (calc.output[0] === '0' && calc.output[1] === '0') {
            calc.output = '0'
        }    
    }
    static #setEventToOperatorButton(button) {
        button.addEventListener('click', (e) => {
            calc.operator = e.target.id
        })
    }
    static #setEventToNumericButton(button) {
        button.addEventListener('click', (e) => {
            calc.output += e.target.textContent
            MyUI.#updateValue()
            MyUI.#updateScreen()
        })
    }
    static #sortButtonEvents(button) {
        switch(true) {
            case (["+", "-", "*", "/"]).includes(button.id):
                break
            default:
                MyUI.#setEventToNumericButton(button)
                break
        }
    }
    static #main() {
        MyUI.#updateScreen()
        const BUTTONS = document.body.querySelectorAll("button")
        BUTTONS.forEach(button => MyUI.#sortButtonEvents(button))      
    }

    #initiate = MyUI.#main()
}