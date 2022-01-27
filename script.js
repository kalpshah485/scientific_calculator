var display = document.getElementById("display");
var result = document.getElementById("result");
var degToRadbtn = document.getElementById("degToRad");
const symbols = ["+","-","*","/","%"];
const functions = [
    "sin(",
    "cos(",
    "tan(",
    "cosec(",
    "sec(",
    "tan(",
    "cot(",
    "log(",
    "ln(",
    "tenRestTo(",
    "sqroot(",
    "exp(",
    "abs(",
    "oneBy(",
    "square(",
    "fact(",
    "pi",
    "e"
];
var e = Math.exp(1);
var pi = Math.PI;
var store = 0;
function doubleSymbol(num) {
    if(symbols.includes(display.innerText.slice(-1))){
        if (display.innerText.slice(-2,-1) == "*") {
            back();
        }
        back();
        btn(num);
    }else{
        if (display.innerText == 0 && (num == "-" || num == "+")) {
            display.innerText = num;
        }else {
            display.innerText += num;
        }
    }
}
// display function
function btn(num) {
    if(isNaN(num)){
        if(symbols.includes(num)) {
            doubleSymbol(num);
        }else if (num == "**") {
            doubleSymbol("**");
        }
        else if (num == "(" || num == ")") {
            if (symbols.includes(display.innerText.slice(-1)) ) {
                display.innerText += num;
            }else {
                if (display.innerText == 0) {
                    display.innerText = num;
                }else{
                    if ((display.innerText.slice(-1) == ")" || !isNaN(Number(display.innerText.slice(-1)))) && num == "(") {
                        btn('*'); 
                    }
                    display.innerText += num;
                }
            }
        }
        else if (functions.includes(num)) {
            if (symbols.includes(display.innerText.slice(-1)) ) {
                display.innerText += num;
            }else {
                if (display.innerText == 0) {
                    display.innerText = num;
                }else{
                    if (display.innerText.slice(-1) == ")" || !isNaN(Number(display.innerText.slice(-1)))) {
                        btn('*');
                    }
                    display.innerText += num;
                }
            }
        }else if (num == ".") {
            display.innerText += ".";
        }
    }else{
        if(display.innerText == '0'){
            display.innerText = num;
        }else{
            display.innerText += num;
        }
    }
}
function plusMinus() {
    if (display.innerText.charAt(0) == "-") {
        display.innerText = display.innerText.substring(1,display.innerText.length);
    }else{
        display.innerText = "-"+display.innerText;
    }
}
function toggleFixToExp() {
    answer();
    if (display.innerText.includes("e")) {
        display.innerText = Number(result.innerText).toFixed(15);
    }else{
        display.innerText = Number(result.innerText).toExponential(4);
    }
}
function answer() {
    try {
        result.innerText = eval(display.innerText);
    } catch (error) {
        result.innerText = error;
    }
}
function clearDisplay() {
    display.innerText = 0;
    result.innerText = 0;
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
function square(num) {
    return Math.pow(num,2);
}
function ln(num) {
    return Math.log(num);
}
function log(num) {
    return Math.log10(num);
}
function tenRestTo(num) {
    return Math.pow(10,num);
}
function sqroot(num) {
    return Math.sqrt(num);
}
function exp(num) {
    return Math.exp(num);
}
function abs(num) {
    return Math.abs(num);
}
function oneBy(num) {
    return 1/num;
}
function square(num) {
    return Math.pow(num,2);
}

// Trigonometry Functions
function toggleDegRad(event) {
    if (event.target.value == "DEG") {
        event.target.value = "RAD";
        event.target.innerText = "RAD";
    }else {
        event.target.value = "DEG";
        event.target.innerText = "DEG";
    }
}
function degToRad(angle) {
    if (degToRadbtn.value == "DEG") {
        return angle * (pi/180);
    }
    return angle;
}
function sin(radNum) {
    return Math.sin(degToRad(radNum));
}
function cos(radNum) {
    return Math.cos(degToRad(radNum));
}
function tan(radNum) {
    return Math.tan(degToRad(radNum));
}
function sec(radNum) {
    return 1 / Math.cos(degToRad(radNum));
}
function cosec(radNum) {
    return 1 / Math.sin(degToRad(radNum));
}
function cot(radNum) {
    return 1 / Math.tan(degToRad(radNum));
}

// Memory Functions
function memory() {
    if (result.innerText == 0) {
        store = eval(display.innerText);
    }else{
        store = eval(result.innerText);
    }
}
function memoryplus() {
    if (result.innerText == 0) {
        store += eval(display.innerText);
    }else{
        store += eval(result.innerText);
    }
}
function memoryminus() {
    if (result.innerText == 0) {
        store -= eval(display.innerText);
    }else{
        store -= eval(result.innerText);
    }
}
function memoryread() {
    result.innerText = store;
}
function memoryclear() {
    store = 0;
}