/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
console.log("\n <=== SUM ==>")

function sum (a,b){
    if( a == b){
       return a = a*3
    }
    return a + b
}
console.log(sum(3, 6))
console.log(sum(6, 6))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
console.log("\n <=== Check Numb ==>")

function checkNum (a, b){
    let x = a + b
    if ( a == 50 || b == 50 || x == 50) {
        console.log(true)
    } else {
        console.log(false) 
    }
}
checkNum(1, 6)
checkNum(25, 25)
checkNum(50, 25)
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
console.log("\n <=== Remove character ==>")
function removeChar (a, b) {
    if ( typeof a == "string" && typeof b == "number"){

        let oldSt = a.substr(b)

        let plusSt = a.slice(0, b - 1 - a.length)
        console.log(plusSt+oldSt)
    } else {
    console.log ("not a string or wrong position")
    }
}
removeChar("Lorem String", 0)
removeChar("Lorem String", 5)
/*
4)
 Create a function to find the largest of three given integers.
*/
console.log("\n <=== Find the largest ==>")

function findLarge (a,b,c) {
    console.log(Math.max(a,b,c))
}

findLarge(1, 4, 2)
findLarge(8, 4, 2)
findLarge(1, 4, 9)
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
console.log("\n <=== Check whether two numbers are in range ==>")

function checkRange (a){
    if ( a > 40 && a <60 ) {
        console.log("The number: " + a + ", are in 40-60 range")
    } else if ( a >= 70 && a <= 100) {
        console.log("The number: " + a + ", are in 70-100 range")
    } else {
        console.log(" the number are not in range")
    }
}
checkRange(50)
checkRange(80)
checkRange(20)
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
console.log("\n <=== Create a new string of specified copies ==>")

function copyCreate (a,b) {
if ( typeof a == 'string'&& typeof b == "number"){
    let readyCopy = a
    for ( i=0; i <2; i++){
        readyCopy += " " + a.toLocaleLowerCase()
    }
    console.log(readyCopy)
}
}

copyCreate("Hello mate", 2)
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
