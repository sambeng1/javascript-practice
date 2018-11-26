/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
  let highest = '';
  let lowest = '';
  let curNumString = '';
    for (let i = 0; i < numbers.length; i++){
        let curChar = numbers[i];
        if (curChar !== ' '){
            curNumString += curChar;
        }
        if (curChar === ' ' || i === numbers.length-1){

          if (Number(curNumString) < lowest || lowest === ''){
            lowest = (Number(curNumString));
            }

          if (Number(curNumString) > highest || highest === ''){
            highest = (Number(curNumString));
            }

          curNumString = '';
        }
        
    }
    return String(highest + ' ' + lowest)
  }