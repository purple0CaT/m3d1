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
    for ( i=0; i < b; i++){
        readyCopy += " " + a.toLocaleLowerCase()
    }
    console.log(readyCopy)
}
}

copyCreate("Hello mate", 2)
copyCreate("Hello mate", 5)

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
console.log("\n <=== Display the city name ==>")

function cityName (a) {
    if( typeof a == "string"){
        if ( (a.includes("Los", 0)&& !a.includes('Los', 1)) || (a.includes("New", 0)&& !a.includes('New', 1) )){
            if ( a.includes('Los')){                
                console.log("Los Angeles")
            } else if ( a.includes('New')){                
                console.log("New Orlean")
            }
        } else {
            console.log('Empty')
        }
    }
}

cityName("Los Angeles")
cityName("New Orlean")
cityName("Not Los Angeles")
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
console.log("\n <=== Sum of three elements of a given array==>")

function arraySum (a) {
    let sum = 0
    for ( let num of a) {
        sum += num
    }
    console.log(sum)
}

arraySum([1,5,6])
arraySum([9,5,1])

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
console.log("\n <=== Test whether an array of integers of length 2 contains 1 or a 3. ==>")

function testArr (a) {
    if (a.includes(1) || a.includes(3)){
        console.log("Contains 1 or a 3")
    } else {
        console.log("Not contains 1 or a 3")

    }
}

testArr([3,5])
testArr([2,1])
testArr([2,5])
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/console.log("\n <=== Test whether an array of integers of length 2 does not contain 1 or a 3. ==>")

function notCont(a){
    if (!a.includes(1) && !a.includes(3)){
        console.log("Not Contains 1 or a 3")
    } else {
        console.log("Contains 1 or a 3")
    }
}

notCont([3,5])
notCont([2,1])
notCont([2,5])

/*
11)

Create a function to find the longest string from a given array of strings.
*/console.log("\n <=== longest string from a given array of strings. ==>")

function longString (a) {
    if (typeof a == "string"){
        let splited = a.split(' ')
        let wLeng = []

        for ( let word of splited){
            wLeng.push(word.length)
        }
        let xM = Math.max(...wLeng)
        let longest = splited[wLeng.indexOf(xM)]
        console.log (longest)
    }
}

longString("Its preatty big string should be")
longString("How you doin?")

/*

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/console.log("\n <=== types of a given angle. ==>")

function angleType(a){
    if (typeof a == 'number'){
        if( a >= 0 && a <90){
            console.log('Acute angle')
        }
        else if( a == 90){
            console.log('Right angle')
        }
        else if( a > 90 && a <180){
            console.log('btuse angle')
        }
         else if( a ==180){
            console.log('Straight angle')
        }
        else {
            console.log("More 180 or less than 0")
        }
    } else {
        console.log ('Not an angle')
    }
}

angleType(34)
angleType(90)
angleType(92)
angleType(180)
angleType(204)
angleType('asd')
/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/console.log("\n <=== greatest element of a given array ==>")

function greatestElem (a){
    let x = Math.max(...a)
    console.log('Greatest Element are: '+ x)
}
greatestElem([10,12332, 2333, 12, 44])
greatestElem([3010,12, 2333, 0912, 2044])
/*
14)

Create a function to get the largest even number from an array of integers.
*/console.log("\n <=== largest even number from an array of integers==>")

function largestEven (arr) {
    let x = arr.sort(function(a, b){return b-a})
    let xMax = []
    for(let indx of arr){
        if ( indx % 2 == 0) {
            xMax.push(indx)
        }
    }
    console.log(Math.max(...xMax))
}

largestEven([10,12332, 2333, 12, 44])
largestEven([3010,12, 2333, 0912, 2044, 3011])

/*
16)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/console.log("\n <=== one is positive and another one is negative. ==>")

function posNeg (a, b){
    if ( typeof a == 'number' && typeof b == 'number'){
        let positA
        let positb
            if (a >0){
                positA = `${a} are positive, `
            } else if ( a == 0 ) {
                positA = `${a} are null, `
            } else {
                positA = `${a} are negative, `   
            }


            if (b < 0){
                positB = `${b} are negative`
            } else if ( b == 0 ) {
                positB = `${b} are null`
            } else {
                positB = `${b} are positive`
            }
        

        console.log(positA + positB)
    }
}

posNeg ( 10, -2)
posNeg ( -10, 2)
posNeg ( 0, 0)
/*
17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/console.log("\n <=== 3 characters are in lower case==>")

function characCase (str) {
    if ( str.length <= 3) {
        console.log (str.toUpperCase())
    } else {
        let lowerC = str.substr(0, 3).toLocaleLowerCase()
        let upC = str.slice(3).toUpperCase()
        console.log(lowerC+upC)
    }
}

characCase('Hello there')
characCase('Hel')
/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/console.log("\n <=== sum is in the range 50..80 ==>")
function sumIntR(a,b){
    let sum = a+b
    if ( sum > 50 && sum < 80){
        console.log(65)
    } else {
        console.log(80)
    }
}

sumIntR(10,60)
sumIntR(10,30)
sumIntR(10,90)
/*
19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
*/console.log("\n <== convert a number to a string ==>")
    function factor (a){
        let facArr = []
        if (typeof a == 'number'){
            let xy = a
            for ( i=0; i < a; i++){
                if ( a % i == 0){
                    facArr.push(i)
                }
            }
        }
        switch (facArr.length){
            case 3:
                console.log(`${a}'s factors are ${facArr}, this would be a Diego`)
                break
            case 5:
                console.log(`${a}'s factors are ${facArr}, this would be a Riccardo`)
                break
            case 7:
                console.log(`${a}'s factors are ${facArr}, this would be a Stefano`)
                break
            default: console.log(`${a}'s factors are ${facArr}, this would be a ${a}`)
            break
            
        }
    }

factor(28)
factor(30)
factor(34)
/*
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
*/console.log("\n <== returns its acronym ==>")

function acron(a){
if ( typeof a =='string'){
    
    switch (a.toLocaleLowerCase()){
        case 'bbc':
            console.log('British Broadcasting Corporation')
        break
        case 'asap':
            console.log('As Soon As Possible')
        break
        case 'radar':
            console.log('Radio Detection and Ranging')
        break
        
        default: 
            console.log('soon library will be updated')
        break
    }
}
}

acron('BBC')
acron('ASAP')
acron('Radar')
acron('MIT')