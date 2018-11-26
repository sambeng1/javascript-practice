/*

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

function rot13(message){
    
    let ROT13Dictionary = {}
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetUpper = alphabet.toUpperCase();

    for (let i = 0; i < alphabet.length; i++){
        let curLetter = alphabet[i];
        let curLetterUpper = alphabetUpper[i];
        let ROT13UpperLetter = alphabetUpper[i+13]
        let ROT13Letter = alphabet[i+13];
        if (ROT13Letter && ROT13UpperLetter){
          ROT13Dictionary[curLetter] = ROT13Letter;
          ROT13Dictionary[curLetterUpper] = ROT13UpperLetter
        }
        if (ROT13Letter === undefined || ROT13UpperLetter === undefined){
          ROT13Dictionary[curLetter] = alphabet[i-13]
          ROT13Dictionary[curLetterUpper] = alphabetUpper[i-13];
        }
    }

    let rotMessage = '';

    for (let i = 0; i < message.length; i++){
        let curChar = message[i];
        let rotCurChar = ROT13Dictionary[curChar];
        if (rotCurChar === undefined){
            rotMessage += curChar;
        }
       else{rotMessage += rotCurChar;}
    }
    return rotMessage;
}