function appendToDisplay(button) {
    const display = document.getElementById('display');
    display.value += button.innerText;
}

function clearDisplay() {
    document.getElementById('display').value = '';

}

function clearLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculateResult(){
    display.value=eval(display.value)
}
setTimeout(() => {
    if (display.value === "Welcome") {
        display.value = "";
        display.style.textAlign="right";
    }
}, 1000);