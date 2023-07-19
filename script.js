function add(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a + b;
   
    document.getElementById("result").innerHTML = "Addition is " + c;
   
}
function sub(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a - b;
   
    document.getElementById("result").innerHTML = "subtraction is " + c;
   
}
function mul(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a * b;
   
    document.getElementById("result").innerHTML = "multiplication is " + c;
   
}
function div(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a/b;
   
    document.getElementById("result").innerHTML = "division is " + c;
   
}