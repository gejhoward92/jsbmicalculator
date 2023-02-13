function calculate(e) {

const height = document.getElementById("height").value;
const weight = document.getElementById("weight").value;

console.log(height)
console.log(weight)


bmi = ( weight / ( height * height ) );

document.getElementById("result").innerHTML = bmi

}