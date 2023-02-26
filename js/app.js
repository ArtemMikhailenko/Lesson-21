//Завдання 1

let a = +prompt('Enter number a:');
let b = +prompt('Enter number b');
alert(maxNumber(a,b));

function maxNumber(a,b){
    if (a > b){
        alert(a);
    } else if (a === b){
        alert('a=b');
    }else {
        alert(b);
    }
}


//Завдання 2

let num = +prompt("Enter the number")
revers(num);
function revers(number){
if (num === 0){
    alert("Number is zero")
} else {
    alert(num * (-1));
}
}


//Завдання 3

let number = +prompt("Enter the number");
let count = +prompt("Enter the count");
alert(three(+number, +count))
function three(number, count){
    for (i=1; i <= count; i++ ){
       number = number + 3
}
return number;
}


//Завдання 4

let km = +prompt("enter the km");
let metric = prompt("Enter the metric");
function KmToM(km) {
  m = km * 1000;
  alert(m);
}
function KmToCm(km) {
  cm = km * 100000;
  alert(cm);
}
function getMetric(metric,km,m,cm){
    if (metric == "m"){
        KmToM(km);
    } else if(metric == "cm") {
        KmToCm(km);
    } else {
        alert("The parameter is set incorrectly") 
    }
    
}
alert(getMetric(metric,km))