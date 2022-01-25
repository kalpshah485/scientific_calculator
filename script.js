var historyUp = document.getElementById("history");
var display = document.getElementById("display");
var result = document.getElementById("result");
const symbols = ["+","-","*","/","%"]
var e = Math.exp(1);
var pi = Math.PI;
var store = 0;
function doubleSymbol(num) {
    if(symbols.includes(display.innerText.charAt(display.innerText.length-1))){
        if (display.innerText.charAt(display.innerText.length - 2) == "*") {
            back();
        }
        back();
        display.innerText += num;
    }else{
        display.innerText += num;
    }
}
function btn(num) {
    if(isNaN(num)){
        if(symbols.includes(num)) {
            doubleSymbol(num);
        }else if (num == "^") {
            doubleSymbol("**");
        }
        else if (num == "(" || num == ")") {
            if (symbols.includes(display.innerText.charAt(display.innerText.length-1))) {
                display.innerText += num;
            }else {
                if (num == "(") {
                    btn('*');   
                }
                display.innerText += num;
            }
        }
        else if (num == "e" || num == "pi") {
            if(display.innerText == 0){
                display.innerText = num;
            }else{
                display.innerText += num;
            }
        }
        else if(num == "=" || num == "Enter") {
            answer();
        }else if (num == "Backspace") {
            back();
        }
    }else{
        if(display.innerText == 0){
            display.innerText = num;
        }else{
            display.innerText += num;
        }
    }
}
function changeAns() {
    historyUp.innerText = display.innerText;
    display.innerText = result.innerText;   
}
function answer() {
    try {
        result.innerText = eval(display.innerText);
        result.style.color = "green";
        changeAns();
    } catch (error) {
        result.innerText = error;
        result.style.color = "red";
    }
}
function clearDisplay() {
    display.innerText = 0;
    result.innerText = 0;
    console.log(display.innerText);
}
function back() {
    if(display.innerText.length == 1 || (display.innerText.length == 2 && display.innerText == "pi")){
        display.innerText = 0;
    }else{
        if (display.innerText.substring(display.innerText.length-2,display.innerText.length) == "pi") {
            display.innerText = display.innerText.substring(0,display.innerText.length-2);   
        }else {
            display.innerText = display.innerText.substring(0,display.innerText.length-1);
        }
    }
}
function toggleDegRad(event) {
    if (event.target.value == "DEG") {
        event.target.value = "RAD";
        event.target.innerText = "RAD";
    }else {
        event.target.value = "DEG";
        event.target.innerText = "DEG";
    }
}
function square() {
    btn("^");
    btn(2);
}
function log() {
    try {
        result.innerText = Math.log10(eval(display.innerText));   
        result.style.color = "green";
    } catch (error) {
        result.innerText = error;
        result.style.color = "red";
    }
}
function ln() {
    try {
        result.innerText = Math.log(eval(display.innerText));  
        result.style.color = "green"; 
    } catch (error) {
        result.innerText = error;
        result.style.color = "red";
    }
}
function tenx(){
    btn(10);
    btn('^');
}
function memory() {
    if (result.innerText == 0) {
        store = eval(display.innerText);
        console.log(store);
    }else{
        store = eval(result.innerText);
        console.log(store);
    }
}
function memoryplus() {
    if (result.innerText == 0) {
        store += eval(display.innerText);
        console.log(store);
    }else{
        store += eval(result.innerText);
        console.log(store);
    }
}
function memoryminus() {
    if (result.innerText == 0) {
        store -= eval(display.innerText);
        console.log(store);
    }else{
        store -= eval(result.innerText);
        console.log(store);
    }
}
function memoryread() {
    result.innerText = store;
}
function memoryclear() {
    store = 0;
}
function sqroot() {
    try {
        result.innerText = Math.sqrt(eval(display.innerText));
        result.style.color = "green";
    } catch (error) {
        result.innerText = error;
        result.style.color = "red";
    }
}
