const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        switch (item.id) {
            case "clear":
                display.innerText = "";
                break;
            case "backspace":
                let displayText = display.innerText.toString();
                display.innerText = displayText.substr(0,displayText.length-1);
                break;
            case "equal":
                showResult();
                break;
            default:
                display.innerText += item.id;
        }
    }
})

showResult = () => {
    if (display.innerText != "") {
        display.innerText = eval(display.innerText);
    } else {
        display.innerText = "Null";
        setTimeout(() => {
            display.innerText = "";
        }, 2000);
    }
}

const themeToogleButton = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

themeToogleButton.onclick = () => {
    calculator.classList.toggle("dark");
    themeToogleButton.classList.toggle("active");
}
