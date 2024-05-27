const display = document.querySelector(".display");
const changeBtn = document.querySelector(".change-btn");
const percentage = document.querySelector(".percentage");
function keys(input) {
    display.value += input;

}

function equal() {
    try{
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'Erro'
    }
}
document.querySelector(".clear").addEventListener("click", () => {
    display.value = "";
});

changeBtn.addEventListener("click", () => {
    if (display.value > 0) {
        display.value = -display.value;

    } else if (display.value < 0) {
       display.value = Math.abs(display.value);
    } else{
        display.value = 0;
    }
});

percentage.addEventListener("click", () => {
    const percentage = (num) =>{
   return num * 0.1;
    }
   const currentValue = parseFloat(display.value);
   if (!isNaN(currentValue)){
    display.value = percentage(currentValue);
   }
});

document.querySelector(".delete").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});