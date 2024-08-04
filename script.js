const numberKeys = document.querySelectorAll(".num");
const opKeys = document.querySelectorAll(".Op");
const resultKey = document.querySelector(".result");
const display = document.querySelector(".display");
const result = document.getElementById("btnResult");

let signal = false;
let decimal = false;

numberKeys.forEach((el) =>{
    el.addEventListener("click",(evt)=>{
        signal = false
        if(evt.target.innerHTML == "."){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0."
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
});

opKeys.forEach((el) =>{
    el.addEventListener("click", (evt)=>{
        if(!signal){
            signal = true
            decimal = false
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "X"){
                display.innerHTML += "*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
});

function back(){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length -1)
};

function clearDisplay(){
    decimal = false
    signal = false
    display.innerHTML = "0"
};

result.addEventListener("click", (evt) =>{
    signal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = parseFloat(res.toFixed(3))
});
