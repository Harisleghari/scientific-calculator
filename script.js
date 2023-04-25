document.addEventListener('DOMContentLoaded', function(){
    const display = document.getElementById("calc-display");
    const buttons = document.getElementsByClassName("btn");
    
    let currentValue = "";

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener("click", function () {
            const buttonValue = button.innerHTML;

            if(buttonValue == "AC"){
                currentValue = "";
                display.value = currentValue;
            } else {
                currentValue += buttonValue;
                display.value = currentValue;
            }
        })
        
    }
});