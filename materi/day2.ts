// ================> IF STATMENT
//  syntax
// if(condition){
// code block
//}

const age: number = 20;

if (age > 17) {
  //condition harus boolean (true or false)

  console.log("anda bisa buat TKP");
}

//====================>ELSE STATEMENT
// backup plan dari if statement

const age1: number = 10;
if (age1 >= 17) {
  console.log("anda bisa buat TKP");
} else {
  console.log("durung basa broo");
}

//============ > ELSE IF STATEMENT
const input: string = "b";
const grade: string = input.toLowerCase();

if (grade === "a") {
  console.log("nilai bagus");
} else if (grade === "b") {
  console.log("nilai lumayan");
} else if (grade === "c") {
  console.log("nilai buruk");
} else {
  console.log("nilai tidak di ketahui");
}

//================> SWITCH CASE

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("hari tidak ditemukan");
    break;
}

//shift + alt + F --> menjalankan preetier

//=============== LOGICAL OPERATOR

// && -> and  ( kedua nilai harus true = true)
// || -> or  (true + false = true)
// ! -> not

// OR (kalau salah satu nilainya true akan menghasilkan nilai true)
const car: string = "mercy";

if (car === "bmw" || car === "mercy") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

// AND (harus keduanya bernilai true agar hasil true)

const umur: number = 19;
const punyaSIM: boolean = true;

if (umur >= 18 && punyaSIM === true) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

// NOT (untuk membalikkan nilai boolean)

const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

//========= TERNARY OPERATOR
//shoertcut untuk if else condition
//condition ? true : false

const str: string = "javascript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

console.log(
  str === "javascript"
    ? " javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);


//============== LOOP STATEMENT (perulangan)

// rangkaian instruksi yang dilakukan berulang kali hingga kondisinya tidak terpenuhi

// type loo : for loop, while loop dan do while loop

// FOR LOOP
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di eksekusi di akhir setiap literasi

// syntax : for (statment1 ; statment2;statement3){
// code block yang akan di ulang
//}

for (let i = 0; i<5; i++){
    console.log("hello world");
}

// WHILE LOOP 
// (melakukan pengecekan dulu baru malakukan perulangan)

 let i: number = 1;
 while (i<10){
 console.log("hello world");
 i++
 }

 // DO WHILE LOOP
// (melakukan perulangan baru kemudian melakukan pengecekan)

let count: number = 1;
do {
    console.log("ini literasi ke:" + count);
    count++;
} while (count <=5);

// ============= BREAK

// untuk menghentikan loop
  let sum: number = 0;
  while (true){
    console.log("sum :" +sum);
    if (sum >=5) break;
    sum ++;
  }


  //============== CONTINUE
  // melakukan skip pada looping
   for (let i = 0; i <5; i++) {
    if (i=== 3) continue;

    console.log(i);
   }
