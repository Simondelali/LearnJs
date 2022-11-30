/*alert('JavaScript file linked Succesfully')
function sayHello(){
    console.log ('Hello guys')
}
*/

function sayName(arg){
    console.log(arg)

}
sayName('Simon','Atiegar')
 function sum(num1,num2){
    return num1 + num2
 }
 const result = sum(6,90)
 console.log(result)
sayName('Your name is simon Atiegar')

const ten = () => 10
const Ten = _ => 10
console.log(ten(),Ten())  

const logger = (param) => {
    console.log(param)
}
logger("The day is bright")

const add = (n1 , n2) => {
    return n1 + n2
}
console.log(add(2,67))

const james = 22
const valerie = 25
const kenneth = 27

const age = 26
if (age < james){
    console.log('You are younger than James')
}
else if (age > valerie){
    console.log(`You're older than Valerie`)
   
}
else{
    console.log(`You're not younger than James`)
}
console.log(!false)

const firstHuman = document.querySelector('li')
console.log(firstHuman) // <li>Gandalf</li>
