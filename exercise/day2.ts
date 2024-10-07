// SOAL 1
//Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

const i: number=parseInt ("") ;

if(i % 2 === 0){
    console.log("the number is even");
} else {
    console.log("the number is odd");
}


// SOAL 2
//Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

const j : number=7;
let isPrime = true;

if (j === 1){
    console.log("1 dudu bilangan prima cuk");
}

for ( let k =2 ; k <= j/2; k++) {
    if (j % k== 0){
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${j} bilangan prima`);
} else {
    console.log(`${j} bukan bilangan prima`);
}

// SOAL 3
// Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

const number: number= 5;
let sum = 0, c=1;

while (c <= number){
    sum += c;
    c++

}
console.log(sum)


//SOAL 4
// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

let num: number = 4;
let fact : number= 1;
 while (num>1){
  fact = fact*num;
  num--;
 }
 console.log(+fact);







//SOAL 5
// Write a code to print the first N fibonacci numbers
// Example: 15 → 610


let anumb: number = 0;
let bnumb: number = 1;
const cnumb: number = 1;

for (let i = 0; i < cnumb; i++) {
  let next: number = anumb + bnumb;
  anumb = bnumb;
  bnumb = next;
}

console.log(anumb);
console.log(anumb);

