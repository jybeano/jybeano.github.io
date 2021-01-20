const counter = document.querySelector('.hex__counter')
const display = counter.querySelector('.counter__display')

window.addEventListener('keypress',myFunction)

function myFunction(e) {
    if(e.keyCode === 13) {
        console.log("Pressed Enter Key")
        const displayedNum = display.textContent

        if(displayedNum !== "FF") {
            hexStr = parseInt(displayedNum,16)
            hexStr += 1
            display.textContent = hexStr.toString(16).toUpperCase()
            console.log(display.textContent)
        } else {
            display.textContent = '0'
            console.log(display.textContent)
        }
    }
}
    
