import calc from "./calculator.js"

export default class MyUI {
    static #updateSCREEN() {
        const OUTPUT = document.getElementById("output")
        if (OUTPUT) {
            console.log("Output element found")
            OUTPUT.textContent = calc.output
            OUTPUT.textContent ? OUTPUT.textContent = null : OUTPUT.textContent = 0
        }
    }
    static #main() {
        MyUI.#updateSCREEN()
    }

    #initiate = MyUI.#main()
}