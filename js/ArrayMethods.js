/*
1.Find the position of an item
2.Add an item to the array
3.Remove an item from the array
*/

// You can use indexOf 
const fruitBasket = ['apple','banana','orange','pear']
const posOfBanana = fruitBasket.indexOf('banana')
const posOfKiwi = fruitBasket.indexOf('Banana')
console.log(posOfKiwi,posOfBanana)

/*
indexOf only works with primitive values.
If you want to find the index of an object, array,or function
you need to use findIndex*/ 

//Adding Items
//Start
const array = [3,4,5]
array.unshift(2)
array.unshift(4,8)
//End
array.push(78,90)
console.log(array)

//removing items
//start
const newArray = [3,4,5]
const itemOne = newArray.shift()
//End
const lastItem = newArray.pop()
console.log(newArray)

//Splice Method
//You can use splice to add items to the start of an array.

const spliceArray =[3,4,5]
spliceArray.splice(0,0,1,2)
console.log(spliceArray)
//Adding elements to the middle
spliceArray.splice(3,0,6,7)
console.log(spliceArray)

//Deleting
spliceArray.splice(0,3)
console.log(spliceArray)

//Making a copy of an array
//You can make a copy of an array with slice

const copy =  array.slice()
copy.push(45)
console.log(copy)



