let num1 = ""
let num2 = ""
let operator = ""
let res = ""
let resetScreen = false


function add(a,b){
    return parseFloat(Number(a + b).toFixed(2))
}
function substract(a,b){
    return parseFloat(Number(a - b).toFixed(2))
}
function multiply(a,b){
    return parseFloat(Number(a * b).toFixed(2))
}
function divide(a,b){
    if(b===0) return "Error"
    return parseFloat(Number(a / b).toFixed(2))
}

function operate(a,b,operator){
    a = Number(a)
    b = Number(b)

    if(operator === "+") return add(a,b)
    if(operator === "-") return substract(a,b)
    if(operator === "x") return multiply(a,b)
    if(operator === "/") return divide(a,b)
}


const results = document.getElementById("results")

const numbers = document.querySelectorAll(".numbers")

const point = document.getElementById("point")

point.addEventListener("click", ()=>{
    if(operator === ""){
        results.textContent = num1
    } 
    else{
        results.textContent = num2
    }
    point.disabled = true
})

numbers.forEach((num)=>{
    num.addEventListener("click", function(){
        results.textContent=num.textContent

        if(resetScreen){
            num1 = ""
            num2 = ""
            operator = ""
            results.textContent = ""
            resetScreen = false
        }

        if(operator===""){
            num1 += num.textContent
            results.textContent = num1
        }
        else{
            num2 += num.textContent
            results.textContent = num2
        }
        
    })
})

const operators = document.querySelectorAll(".operators")

operators.forEach((ops)=>{
    ops.addEventListener("click", function(){
        if(num1 !== "" && num2 !== ""){
            num1 = operate(num1,num2,operator)
            results.textContent = num1
            num2 = ""
        }
        operator = ops.textContent
        point.disabled = false
    })
})

const equal = document.getElementById("equal")

equal.addEventListener("click", ()=>{
    if(num1 !== "" && num2 !== "" && operator !== ""){
        res = operate(num1,num2,operator)
        results.textContent = res

        num1 = res
        num2 = ""
        operator = ""
        resetScreen = true
        point.disabled = false
    }
})

const clear = document.getElementById("clear")

clear.addEventListener("click", ()=>{
    results.textContent = ""
    num1 = ""
    num2 = ""
    res = ""
    operator = ""
    resetScreen = false
    point.disabled = false
})


