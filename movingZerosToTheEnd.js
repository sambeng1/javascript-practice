/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

Example: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

var moveZeros = function (arr) {
    let newArr = [];
    let zeroArr = [];

    for (let i = 0; i < arr.length; i++){
      let curEl = arr[i];
      if (curEl === 0){
        zeroArr.push(curEl);
      }
      else{newArr.push(curEl);}
    }
    return newArr.concat(zeroArr);
  }