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
       else{ rotMessage += rotCurChar;}
    }
    return rotMessage;
}