let num1=10
let num2=8
document.getElementById("num1").textContent=num1
document.getElementById("num2").textContent=num2

 let string=document.getElementById("result")

function add(){
   let sum=num1+num2
   string.textContent="Result="+sum
}
function sub(){
   let sum=num1-num2
   string.textContent="Result="+sum
}

function div(){
   let sum=num1/num2
   string.textContent="Result="+sum
}

function mul(){
   let sum=num1*num2
   string.textContent="Result="+sum
}


