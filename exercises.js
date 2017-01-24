/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";
    //...
    if (num1 > num2){
      return num1;
    } else if (num2 > num1){
      return num2;
    }
}

console.assert(max(3,5)===5);


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";
    //...
    if (num1 > num2 && num1 > num3){
      return num1;
    } else if (num1 < num2 && num2 > num3){
      return num2;
    } else if (num3 > num1 && num2 < num3){
      return num3;
    }
}

console.assert(maxOfThree(1,2,3)===3);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
      return true;
    } else {
      return false;
    }

}

console.assert(isVowel("e"));

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
    var spraketTalk ="";
    for (var i=0; i <= phrase.length; i++){
      if (isVowel(phrase.charAt(i))){
        spraketTalk += phrase.charAt(i);
        // console.log(phrase.charAt(i));
      } else {
        spraketTalk = spraketTalk + phrase.charAt(i) + "o" + phrase.charAt(i);
        // console.log(phrase.charAt(i) + "o" + phrase.charAt(i));
      }
    }
    return spraketTalk;
}

console.assert(rovarspraket("sprak this"));
console.log(rovarspraket("sprak this"));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(inputArray){
    "use strict";
    //...
    var totalSum = 0;
    for(var i=0; i<inputArray.length; i++){
      totalSum += inputArray[i];
    }
    return totalSum;
}

console.assert([2,3,6]);
console.log(sum([2,3,6]));

function multiply(inputArray){
    "use strict";
    //...
    var multiplier = 1;
    for(var i=0; i<inputArray.length; i++){
      multiplier = multiplier * inputArray[i];
    }
    return multiplier;
}

console.assert([3, 3, 4]);
console.log(multiply([3,3,4]));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(inputString){
    "use strict";
    //...
    var reversedString = "";
    for(var i=0; i<=inputString.length; i++){
      reversedString += inputString.charAt(inputString.length-(i));
    }
    return reversedString;
}


console.assert(reverse("This is the test."));
console.log(reverse("This is the test."));
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
    var longestWord = 0;
    var wordLength = 0;
    for (var i = 0; i<words.length; i++){
      wordLength = words[i].length;
      if (wordLength > longestWord){
        longestWord = wordLength;
      }
    }
    return longestWord;
}

console.assert(findLongestWord(["banana", "football", "dog", "word"]));
console.log(findLongestWord(["banana", "football", "dog", "word"]));

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
    for (j=0; j< words.length; )
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
