'use strict';
console.log(isPalindrom('atrrta'));
console.log(repeat('str1', 5));
console.log(operation(3, 5, summary));

function isPalindrom (word){
    let result;
    for(let i = 0; i<word.length/2; i++){
        if(word[i] === word[word.length-i-1]) result = 'true';
        else result = 'false';
    }
    return result;
}
function repeat(str = '', n = 2){
    let result = '';
    for(let i = 1; i<=n; i++){
        result += str;
    }
    return result;
}
function operation(a, b, sumCallback){
    a **= 2; 
    b **= 2;
    return sumCallback(a, b);
}
function summary(x, y){
    /* console.log(`${x} ${y}`); */
    return x + y;
}
