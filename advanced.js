/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
console.log("\n <== commonly used ==>")

function commUsed(str) {
    let max = 0
    maxChar = ''
    str.split('').forEach(function(char){
        if(str.split(char).length > max) {
            max = str.split(char).length
            maxChar = char
        }
    });
    console.log(maxChar)
}

commUsed('Hellllo')
commUsed('Common')

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --&gt; True
  anagrams('RAIL! SAFETY!', 'fairy tales') --&gt; True
  anagrams('Hi there', 'Bye there') --&gt; False
*/
console.log("\n <== anagrams ==>")

function anagrams(stra, strb){
    stra = stra.replace(/[^\w]/g, '').toLowerCase()
    strb = strb.replace(/[^\w]/g, '').toLowerCase()

    console.log(sortStr(stra) === sortStr(strb))
}

function sortStr(str) {
    return str.split('').sort().join('')
}

anagrams('rail safety', 'fairy tales')
anagrams('RAIL! SAFETY!', 'fairy tales')
anagrams('Hi there', 'Bye there')

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
console.log("\n <== select the correct sublist. ==>")

function sublists(str, arry){
    str = str.replace(/[^\w]/g, '').toLowerCase()
    let strSort = str.split('').sort().join('')

    let arrSort = []
    
    for ( let ar of arry){
        ar = ar.replace(/[^\w]/g, '').toLowerCase()
        arrSort.push(ar.split('').sort().join(''))
    }
    let readyList = []
    for ( i=0; i < arrSort.length; i++){
        if ( strSort === arrSort[i]){
            readyList.push(arry[i])
        }
    }
    console.log(readyList)
}

sublists('listen',["enlists", "google", "inlets", "banana"])
/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
    console.log("\n <== palindrome ==>")

function palindrome (str) {
    let strg = str.split('')
    let string = []
    for ( let wrd of strg){
        string.unshift(wrd)
    }
    string = string.join('')
    if (string === str) {
        console.log(`${str} is a palindrome`)
    } else {
        console.log(`${str} Not a palindrome`)
    }
}

palindrome("abba") 
palindrome("abcdefg")

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
    console.log("\n <== REVERSE INT ==>")

function reverseInt(a){
    let string = a.toString()
    let finStr = string.split('')
    finStr = finStr.reverse()
    finStr = finStr.join('')
    finStr = parseFloat(finStr)
    finStr = finStr * Math.sign(a)
    console.log(finStr)
}
    reverseInt(15)
    reverseInt(981)
    reverseInt(500)
    reverseInt(-15)
    reverseInt(-90) 
/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --&gt; [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --&gt; [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --&gt; [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --&gt; [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --&gt; [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
