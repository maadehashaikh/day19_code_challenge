// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.
var numbers = [1, 3, 4, 5, 7];
var double_numbers = numbers.map(function (numbers) { return numbers * 2; });
console.log(double_numbers);
//Explanation :In TypeScript, a "double number" in an array typically refers to a number that is exactly twice the value of another number in the same array. For example, if you have an array [2, 4, 6, 8], the number 8 is a double number because it is twice the value of 4, which is also in the array. 
// let array = [2,4,6,8];
// function double_numb(){
//   for(let i=0 ; i<array.length ; i++){
//    let twice = array[i]*2;
//    console.log(twice);
//      if(array.includes(twice)){
//       return array[i];
//      }
//    }
//   }
// console.log(double_numb());
