
// function segitiga1(height : number) {
//     let currenNumber: number = 1
//     for ( let i = 1; i <= height; i++)
//         let row : string = "";

//     for ( let i = 1; 1: j <= i; j++){
//         row += (currenNumber)
//     }
// }



// EXERCISE 1

// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10

//Parameters : height → triangle height

function segitiga (height: number): void {
    let num = 1;

    for (let row = 1; row <= height; row++) {
        let line = ''; 

        for (let col = 0; col < row; col++) {
            line += `${num.toString().padStart(2, '0')} `; 
            num++;
        }

        console.log(line.trim());
    }
}

segitiga (4);




// EXERCISE 2
// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".

// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
  

function fizbuz(n: number): void {
    for (let i =1; i <= n; i++){
        let hasil1 = "";

        if (i % 3 === 0) {
            hasil1 += "fizz";
        }
        if (i % 5 === 0) {
            hasil1 += "Buzz";
        }
        console.log(hasil1 || i);
    }
}

fizbuz(6);
fizbuz(15);


//a atau
// function fizbuz1(n: number) {
//     let message : string = "";
    
//     for ( let i = 1; i <= n; i++) {
//         if ( 1 % ===)
//     }
// }

// EXERCISE 3
// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z


 function BM (weight: number, hight: number) {
    const BMI = weight / (hight **2);

    if (BMI < 18.5){
        return "less weight"
    } else if ( BMI >=18.5 && BMI<= 24.9){
        return "ideal"
    } else if (BMI >= 25.0 && BMI <= 29.9){
        return "overweight"
    } else if ( BMI >= 30.0 && BMI <= 39.9){
        return "very overweight"
    } else ( BMI > 39.9) 
        return "obesity"
 }

const weight: number = 60;  // in kg
const hight : number = 1.90;// in meter

console.log(BM(weight,hight));
 
// console.log(`${BM()}`)

// EXERCISE 4
// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]


function removeOddNumber (numbers: number[]){
    return numbers.filter((number) => number % 2 === 0);
}
 console.log(removeOddNumber([1,2,3,4,5,6,7,8,9,10]))

//salah tidak pakai function
// const nomors: number[]= [1,2,3,4,5,6,7,8,9,10];
// const angka4 = nomors.filter((nomor) => {
//     return nomor % 2 == 0;
// });
// console.log(angka4);



 // EXERCISE 5
//  Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

function words (){
    const say : string = "Hello world"
    console.log(say.split(" "))
    return say ;

}
words ()




 
