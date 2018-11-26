/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/


function kebabize(str) {
      let finalStr = '';
      let capArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      let numArray = [,'1','2','3','4','5','6','7','8','9','0']
      for (let i = 0; i < str.length; i++){
        let curChar = str[i];
        if (capArray.includes(curChar) && finalStr.length === 0){
          finalStr += curChar.toLowerCase();
        }
        else if (capArray.includes(curChar)){
          finalStr += '-'
          finalStr += curChar.toLowerCase();
        }
        else if (!numArray.includes(curChar)){
          finalStr += curChar;
        }
  
      }
      return finalStr;
    }