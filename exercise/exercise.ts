



// SOAL 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

const sorFunction = (arr: number[]) => {
    arr.sort((a,b) => a- b);
    const lowest: number = arr[0];
    const higest: number = arr[arr.length - 1];
    const sum: number = arr.reduce((a,b) => a +b);
    const average: number = sum / arr.length;

    return{lowest,higest,average};
}
 console.log(sorFunction([3,2,7,4,1]));

 //Atau
const sortFunction2 = (arr: number[]) => {
    let lowest: number = arr[0];
    let higest: number = arr[0];
    let sum: number = 0;

    for(const num of arr) {
        if (num < lowest) lowest = num;
        if (num > higest) higest = num;
        sum += num;
    }
    const average = sum / arr.length;
    return {lowest, higest, average};
};
console.log(sortFunction2([3,2,7,4,1]));


// SOAL 2
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const concatWords = (words: string[]) => {
    if (words.length === 1) {
        return words[0];
    } else {
        const lastWord = words.pop();
        return words.join (", ") + " and" + lastWord;
    }
};

console.log(concatWords(["apple", "banana", "cherry", "date"]));


// SOAL 3
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

const secondSmallest = (arr: number[]) => {
    if (arr.length <2){
        return "minimum array length harus 2";
    }
    const sortedArr = arr.sort((a,b) => a - b);
    return sortedArr[1]
}
console.log(secondSmallest([5,9,2,3,1]))


//SOAL 4 
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const calculateArr = (arr1: number[], arr2: number[]) =>{
    const result: number[] = [];

    for (let i= 0; i<=arr1.length; i++) {
        const sum = arr1[i] + arr2[i];
        result.push(sum);
    }
    return result;
};
console.log(calculateArr([1,2,3], [3,2,1]));

// SOAL 5
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

const addNewElement =(arr: number[],newElement:number) => {
    if (!arr.includes(newElement)) {
        arr.push(newElement);
    }
    return arr;
};

console.log(addNewElement([1,2,3,4],7));


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

// atau

const sumNumberDataType = (arr: any[]) => {
    let total: number =0;

    arr.forEach((value) => {
        if (typeof value === "number") {
            total += value;
        }
    });
    return total;
};
console.log(sumNumberDataType(["3", 1, "string" ,null, false, undefined, 2]));


// SOAL 2
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

const limitData = (maxSize : number, ...integers: number[]) => {
    const result: number[] = [];

    integers.forEach((integr) =>{
        if(result.length === maxSize) return;
        result.push(integr);
    });
    return result;
}
console.log(limitData(5,2,3,4,5,6,7,8,9,10))
// SOAL 3
// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

const combineArray = (arr1: number[], arr2: number[])=> {
    return [...arr1,...arr2];
};
console.log(combineArray([1,2,3],[4,5,6]));

//atau

    let arr1: number[] = [1,2,3];
    let arr2 : number[]= [4,5,6];

 const hasil : number[] = [...arr1,...arr2];
console.log(hasil);


// SOAL 4
// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

const showDuplicateValue =(arr: number[])=> {
    const seen = new Set();

    const duplicate: number[] = [];

    for (const value of arr){
        if (seen.has(value) && !duplicate.includes(value)){
            duplicate.push(value);
        } else {
            seen.add(value);
        }
    }
    return duplicate;
};

console.log(showDuplicateValue([1,2,2,2,3,3,4,5,5]))


// SOAL 5
// // Write a function to find the difference in 2 given array
// // a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

const findDifference = (arr1: number[], arr2: number[]) => {
    const difference: number[] = [];

    for (const item of arr1) {
        if (!arr2.includes(item) && !difference.includes(item)) {
            difference.push(item);
        }
    }
    for (const item of arr2) {
        if (!arr1.includes(item) && !difference.includes(item)){
            difference.push(item)
        }
    }
    return difference;
}

 console.log(findDifference([1,2,3,4,5],[3,4,5,6,7]));

//====================================================================

// SOAL 1
// Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

const filterPrimitiveDataTypes = (arr: any[]) => {
    return arr.filter((value) => {
        return (
            typeof value === "number" ||
            typeof value === "string" ||
            typeof value === "boolean" ||
            typeof value === "undefined" ||
            value === null
        );
    });
};

console.log(filterPrimitiveDataTypes([1,[], undefined, {}, "string", {},[]]));

// SOAL 2
// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

const sumDuplicateValue = (arr : number[]) => {
    const seen = new Set();
    const duplicate = new Set()
    for (const value of arr) {
        if (seen.has(value)){
            duplicate.add(value);
        } else {
            seen.add(value);
        }
    }
    let result : number = 0;
    for (const value of arr) {
        if (duplicate.has(value)){
            result += value
        }
    }
    return result;
};
console.log(sumDuplicateValue([10,10,10,10,20,30,40,20]));


// SOAL 3
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'


const rockPaperScissor = (player: "rock" | "paper" | "scissor") => {
    const choices: ("rock" | "paper" | "scissor")[] = [
        "rock",
        "paper",
        "scissor"
    ];
    const computer  = choices[Math.floor(Math.random() *2.9)]; //random index antara 0-2

    if (player === computer){
        return { result: "draw", computer,player};
    }
    if (
        (player === "rock" && computer === "scissor")||
        (player === "scissor" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return {result: "win", computer, player};
    }
    return {result: "lose", computer, player};
};

console.log(rockPaperScissor("rock"))