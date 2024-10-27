import calc from "./calculator.js"

export default class MyUI {
    static #updateScreen() {
        const OUTPUT = document.getElementById('output')
        if (OUTPUT) {
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
    static #setEventToEqualButton(button) {
        button.addEventListener('click', () => {
            calc.secondValue = calc.output
            calc.operate(calc.operator, parseFloat(calc.firstValue), parseFloat(calc.secondValue))
            calc.firstValue = calc.output
            calc.secondValue = '0'
            MyUI.#updateScreen()
        })
    }
    static #setEventToOperatorButton(button) {
        button.addEventListener('click', (e) => {
            calc.operator = e.target.id
            calc.eraseScreen = true
        })
    }
    static #setEventToDelButton(button) {
        button.addEventListener('click', () => {
            calc.reset()
            MyUI.#updateScreen()
        })
    }
    static #setEventToClearButton(button) {
        button.addEventListener('click', () => {
            calc.clear()
            MyUI.#updateScreen()
        })
    }
    static #setEventToPosNegButton(button) {
        button.addEventListener('click', () => {
            calc.changeValueToPosOrNeg(calc.output)
            MyUI.#updateScreen()
        })
    }
    static #storeValue() {
        if (calc.operator && calc.eraseScreen) {
            if (calc.firstValue) {
                calc.secondValue = calc.output
            }
            calc.firstValue = calc.output
            calc.output = '0'
        }
    }
    static #setEventToNumericButton(button) {
        button.addEventListener('click', (e) => {
            MyUI.#storeValue()
            calc.eraseScreen = false
            calc.output += e.target.textContent
            MyUI.#updateValue()
            MyUI.#updateScreen()
        })
    }
    static #sortButtonEvents(button) {
        switch(true) {
            case (['+', '-', '*', '/']).includes(button.id):
                MyUI.#setEventToOperatorButton(button)
                break
            case button.id === ''='':
                MyUI.#setEventToEqualButton(button)
                break
            case button.id === 'del':
                MyUI.#setEventToDelButton(button)
                break
            case button.id === 'clear':
                MyUI.#setEventToClearButton(button)
                break
            case button.id === 'pos-neg':
                MyUI.#setEventToPosNegButton(button)
                break
            default:
                MyUI.#setEventToNumericButton(button)
                break
        }
    }
    static #keyboardEventListener() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const ENTER = document.getElementById("=")
                ENTER.click()
                return
            }
            if (e.key === 'Backspace') {
                const BACKSPACE = document.getElementById('clear')
                BACKSPACE.click()
            }
            const BUTTON = document.getElementById(e.key)
            if (!BUTTON) {
                return
            }
            BUTTON.click()
        })     
    }
    static #main() {
        MyUI.#updateScreen()
        const BUTTONS = document.body.querySelectorAll('button')
        BUTTONS.forEach(button => MyUI.#sortButtonEvents(button))
        MyUI.#keyboardEventListener()      
    }

    #initiate = MyUI.#main()
}