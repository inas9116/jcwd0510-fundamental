//versi JS
// const message = "hello world";

//versi TS
const message: string = "hello world";


//========== string build in method

const nama: string = "siti Khodijah";
const nama2: string = " metal";

console.log(nama.toLowerCase()); // cara langsung
console.log(nama.toUpperCase()); //
console.log(nama.replace("s","o"))
console.log(nama.replaceAll("i","o"))
console.log(nama.replaceAll(/i/gi,"o")) //case sensitive
console.log(nama.split(" "))
console.log(nama.concat(nama2))
console.log(nama.slice())



const nama1: string = nama.toLowerCase();
console.log(nama1); //cara di tampung dulu di variable


//========TEMPLATE LITERALS / TEMPLATE STRING
const nama4: string = "jack";
const message1: string = `wellcome ${nama4}`;

console.log(message1);
console.log ("wellcome"+""+nama4); //cara manual


//========= NUMBER BUILD IN METHOD

const angka: string = "2000"
console.log(typeof Number(angka));
console.log(typeof angka);
console.log(typeof parseInt (angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// ========== TYPE CONVERSION

// string conversionn
const angka1: number = 20;
console.log(String(123))
console.log(angka1.toString());


//Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("false"));
//(jika ada isinya pasti 'true' kecuali isinya '0')

//=========  date data types
const now = new Date();
//get method
console.log(now);
console.log (now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getTime());

// set method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2040);

console.log(now);

// ===========  BASIC OPERATION

//  + -> tambah
//  - -> kurang
//  / -> bagi
//  * -> kali
//  % -> sisa bagi
//  ** -> pangkat



const a = 20;
const b = 10;







// ============== MODIFY IN PLACE
//n = n + 2

let n: number = 4;
n += 2; // -> shortcut
// n = n + // _> cara panjang

console.log(n);

//================= INCREMENT & DECREMENT

let counter : number = 2;

// counter++; //increment
counter--; // decrement

console.log(counter);

//=============POSTFIX & PREFIX

let counter2: number =2;

//console.log(++counter2);// prefix
console.log(counter2++);// postfix

//============= COMPARISON OPERATOR

// console.log(5 == "5"); //pengecekan di valuenya saja
// console.log(5 === "5"); //pengecekan di valuenya dan jenis datanya

console.log(5>2);
console.log(5<2);
console.log(5<=5);
console.log(5>5);

//========= MATH

//math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.2));

// math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.7));

//Math round -> membulatkan angka ke bilangan bulat yang terdekat
console.log(Math.round(4.3));
console.log(Math.round(4.6));

//Math max -> mengembalikan angka terbesar dari sekummpulan angka
console.log(Math.max(3,4,6,5,1,2));

//MAthh min -> mengembalikan angka terkecil dari suatu kumpulan angka
console.log(Math.max(3,4,6,5,1,2));

//MAth abs -> menghilangkan tanda negative
console.log(Math.abs(-11));

//Math Random menghasilkan angka acak antara 0 dan 1
console.log(Math.random());