



// SOAL 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}


//Atau

const numbers : number[]=[12,5,23,18,4,45,32];
let lowest: number = 0;
let higest : number = 0;
let average : number = 0;

for (const number of numbers) {
        lowest = Math.min(...numbers);
        for ( const number of numbers)
        higest = Math.max(...numbers);
        for ( const number of numbers);
        const total: number = numbers.reduce((a,b) => a + b)
        average = total/ numbers.length
    
    }

    console.log (`lowest : ${lowest} higest : ${higest} average : ${average}`)


// SOAL 2
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function concatWords= (words:string[]) => {
    if (words.length === 1){
        return words[0];
    } else {
        const lastWord = words.pop();
        return words.join(", ") + " and " + lastWord;
    }
};
console.log(concatWords(["apple", "banana", "cherry", "date"]));


// SOAL 3
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

// function secondMin (arr:number[]){
//     arr.sort((a,b) => a - b);
//     return arr [];
// }
// const angkas :number[] = [5,3,1,7,2,6];
// console.log(secondMin(numbers));

//SOAL 4 
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// SOAL 5
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]



//==============================================================

// SOAL 1
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function sumMixed (mixedArray: any[]): number {
    return mixedArray.reduce((sum, value) => {
        if (typeof value === 'number') {
            return sum + value;
        }
        return sum;
    }, 0);
}

const mixedArray = ["3", 1, "string", null, false, undefined, 2];
console.log(sumMixed(mixedArray)); 


// SOAL 2
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]


// SOAL 3
// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]


// function joinArray () {
    let arr1: number[] = [1,2,3];
    let arr2 : number[]= [4,5,6];
// arr1 = arr1.concat(arr2);
// return arr1
// } console.log(joinArray)


 const hasil : number[] = [...arr1,...arr2];
console.log(hasil);


// SOAL 4
// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// function duplikat (angkas1: number[]){
//     angkas1 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
//     let angkas2 = [...new Set(angkas1)];
//     console.log(angkas2)
// }

// duplikat();


// SOAL 5
// // Write a function to find the difference in 2 given array
// // a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]



//====================================================================

// SOAL 1
// Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

// SOAL 2
// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

// SOAL 3
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
