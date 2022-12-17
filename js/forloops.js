const numbers = [33,56,12,13,67,89,25,15]

for (i=0; i<numbers.length; i++){
    const num = numbers[i]
    if (num < 20){
        console.log(num + ' is less than 20')
    }
}
//for of 
const fruitBasket = ['banana','pear','guava']
for (let fruit of fruitBasket){
    console.log("There's a " + fruit + " in the basket")
}