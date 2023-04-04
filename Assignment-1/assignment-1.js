/**
 * @assignment_no : 01
 * @author : "Md Arif Hossain Chowdhuary"
 * @date : March 22, 2023
 * @
 */
/**
 * Create a JavaScript function called "multiplicationTable"
 * that takes a single argument "num" (an integer) as input.
 * */
function multiplicationTable(num) {
  /*Inside the function, create a for loop that iterates from 1 to 10.*/
  let i;
  let sum = 0;
  for (i = 1; i <= 10; i++) {
    /** Inside the loop, multiply the current iteration number
     * by the input "num" to generate the product.
     **/
    let product = num * i;
    /** 
   * Log the product to the console 
   * in the format "num x iteration = product".
   **/
    console.log(`${num}*${i} = `,product);
  }
}
/**
 * Call the multiplication table function and
 * Test the function with different input numbers 
 * to generate multiplication tables.
 */
// let randomNumber = Math.round((Math.random() * 100+1));
// multiplicationTable(randomNumber); //With random number

let givenNumber = 7;
multiplicationTable(givenNumber); //With given number

