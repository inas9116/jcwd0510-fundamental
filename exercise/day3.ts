// 1. git add . (pastikan folder yang mau di push ke git hub)
// 2. git commit -m "exercise day 3"
//3. git push origin main

//SOAL 1 
// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ ...
// ■ 9 x 10

const tk : number= 9;
for(let i = 1; i<=10;i++){
    console.log(`${tk} x ${i} = ${tk * i}`)
};

//SOAL 2
// Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome

const kata: string ="madan";
const word = kata.split("").reverse().join("")
if(word === kata){
    console.log ("palindrome");
} else{
    console.log("bukan palindrome");

};

// ( cara lain ) build in method 

const kata1: string = "madam";
const isPalindrome: boolean = kata1 === kata1.split("").reverse().join("");
console.log(isPalindrome);

// ( cara lainya lagi) tanpa build in method 
const kata2 : string = "car";
let reverse: string  = "";

for (let i = kata2.length - 1; i >= 0; i--){
    reverse +- kata2[i];
}
console.log(kata2 === reverse ? true : false);




// SOAL 3
// Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”

const cm: number = 100000; //bisa pakai (_) biar gampang di baca ex 100_000
console.log(`${cm/100000} km`);

// cara lain 
const cm1 : number = 100_000;
const km : number = cm / 100_000;

console.log(km + " km");

//SOAL 4
// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

const z: number = 1000;
let n: string = Intl.NumberFormat("id-ID", {
    style:"currency",
    currency:"IDR"
}).format(z);
console.log(n);

const harga : number = 10_000;
const hasil: string = Intl.NumberFormat ("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
}).format(harga);

console.log(hasil);



//SOAL 5 
// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

const kalimat : string="hello world ";
const g: string = "ell";
console.log(kalimat.replace(g,""));



//SOAL 6 (kepakai di project)
//Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”



const k: string = "hello world";
const p: string[] = k.split(" "); // tipe data string di dalam array

for (let i = 0; i < p.length; i++) {
    p[i] = p[i][0].toUpperCase() + p[i].slice(1);
  }
  console.log(p.join(" "));



//SOAL 7
// Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

const kal: string = "The QuiCk BrOwN Fox";
let swapKal: string = "";

for (let i = 0; i < kal.length; i++) {
    const kal2: string = kal[i];

    if ( kal2 === kal[i].toUpperCase()){
        swapKal += kal2.toLowerCase(); 
    } else {
        swapKal += kal2.toUpperCase();
    }
    
}

console.log(swapKal);



//SOAL 8
// Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42

let num1: number = 42;
let num2: number = 27;

if(num1 > num2){
    console.log (num1)
}else if(num1<num2){
    console.log(num2)
}


// cara lain

console.log(num1 > num2 ? num1 : num1 )




//SOAL 9
// Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42


const numb1 : number = 42;
const numb2 : number = 27;
const numb3 : number = 18;

const kecil : number = Math.min(numb1,numb2,numb3);
const besar : number = Math.max(numb1,numb2,numb3);
const middle: number = numb1 + numb2 + numb3 - kecil - besar;

console.log (`${kecil} ${middle} ${besar}`);

// cara lainya

const urut : number[] = [numb1, numb2, numb3];
const urutan : number[] = urut.sort((a, b) => a - b );
console.log(urutan.join(" "));



//SOAL 10

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1

const input : any = "" ;//(any bisa diisi type data apa)

if (typeof input === "string") {
    console.log("string");
} else if (typeof input === "number") {
    console.log("number");
} else {
    console.log("any");
}


//SOAL 11
// Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

const f: string = "An Apple a day keeps the doctor away"
console.log(f.replaceAll(/a/gi,"*"));

// cara lain

const input1 : string = "An apple a day keeps the doctor away".toLowerCase();

let modifInput : string = "";

for (let i = 0 ; i < input1.length; i++){
    if (input1[i] === "A".toLowerCase() ){
        modifInput += "*";
    } else {
        modifInput += input1[i]
    }
}
console.log(modifInput);
