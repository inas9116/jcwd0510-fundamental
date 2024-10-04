//========= ARRAY

const arr = []; //cara 1
const arr2 = new Array(); //cara2

const arr3 : string[] = ["A","b","c"];
const arr4 : string[] = new Array ("A","B","C");

const arr5 : number[] = [1,2,3,4];
const arr6 : number[] = new Array (1,2,3,4);

// array ofnobject

// const students : {name: string; email: string}[] = [
//     {name:"budi", email:"budi@gmail.com"},
//     {name:"budi", email:"budi@gmail.com"},
//     {name:"budi", email:"budi@gmail.com"},
// ];

// interface student {
//     name: string;
//     email: string;
// }

        // atau 

type student = {
    name: string;
    email: string;
    hobby?: string;
    address?: address; //optional (ditandai dg "?")
};

interface address{
    street: string;
    city: string;
}

const students : student [] = [
        {name:"budi", email:"budi@gmail.com", hobby: "futsal"},
        {name:"siti",email:"siti@gmail.com", address:{
            street:"hgjljsd",
            city:"khgsua",
        }},
        {name:"joko", email:"joko@gmail.com"},
    ];

    //===== FOR OF

    const fruits: string[]=["apple","banana","orange"];
    for (const fruit of fruits){
        console.log(fruit);
    }

    // Exercise for of
    //hitung jumlah semua bilangan dalam array menggunkan for of
    //ex input = [1,2,3,4,5,6] -> 21

    const numbers : number[]=[1,2,3,4,5,6];
    let total: number = 0;

    for (const number of numbers) {
        total += number;
    }
    console.log(total);


    // ==============FUNCTION
    // ada 2 cara untuk menuliskan fungsi
    // 1. function declaration
    // 2. function expression

    // 1. function declaration

    function square(number: number){
        return number * number;
    }
    const result = square(4);
    const result2 = square(10);

    console.log(result);
    console.log(result2);

    // 2. function expression
     const square1 = function (number : number){
        return number * number;
     };
     const resul3 = square1 (4);
     const result4 = square1 (10);

     console.log(resul3);
     console.log(result4);


     // =========== FUNCTION SCOPE
     // variabel yang  di define di dalam function 
     // hanya bisa di akses di dalam function tsb

    function greeting (){
        const hello = "hello";
        console.log(hello); // ini jalan karena di dalam scope
        return hello;
    }
    greeting(); // kalau gak di panggil disini , consol atas gk bisa jalan

    //console.log(hello); -----> consol disini gk jalan karena di luar scope


    // PARAMETER & ARGUMENT
    // parameter -> variable yang mewakili value
    // dari argument y dimasukkan

    //argument -> value yang dimasukkan saat pemanggilan function
    
//              PARAMETER    
//     function greeting(nama: string) {
//         const hello = "HELLO";
//         return hello + " " + nama;
//      }
// //                  ARGUMENT
//      console.log(greeting("budi"));
//      console.log(greeting("siti"));
//      console.log(greeting("joko"));


     // ======= DEFAULT PARAMETER 

     function multiply(a: number, b:number = 1){
        console.log(a);
        console.log(b);
        return a * b ;
     }
// =1 di atas sebagai value default

     console.log(multiply(5,70));
     console.log(multiply(5));


     //============ REST PARAMETER
     // mewakili sisa argument ke dalam variable parameter

     function myFunc(a:number, B:number, ...sisaArgument: number[]) {
        console.log(a);
        console.log(b);
        console.log(sisaArgument);
     }
    


     //======== NESTED FUNCTION
     // fungsi yang berada di dalam fungsi
     // inner function bisa akses parameter dari outer function
     // outer function tidak bisa akses parameter dari inner function


     // outer function
     function getMessage(firstName: string){
        //inner function 1
        function sayHello(){
            return  "Hello" + firstName + ",";
        }

        //inner function 2
        function welcomeMessage(){
            return "welcome to Purwadhika";
        }
        return sayHello( ) + " " + welcomeMessage();
     }
     console.log(getMessage("budi"));


     // =========== CLOSURE

     function greeting1(name: string){
        const defaultMessage: string = " hello";
        return function (){
            return defaultMessage + " " + name;
        };
     }

     const result6 = greeting1("budi");
     console.log(result6())



//=========== RECURSIVE
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
    console.log(number);
    let nexNumber = number - 1;
    if (nexNumber>0){
        countDown(nexNumber);
    }
}
countDown(10);

// ============ ARROW FUNCTION
// sortcut untuk menuliskan function expression

// contoh function expression
const square2 = (number: number) => {
    return number * number;
}

// contoh jka diubah ke arrow function
const square3 = (number: number) => {
    return number * number ;
};

// kalau mau di bikin satu line

const square4 = (number: number ) => number * number;


//======== ARRAY BUILD IN METHOD

// JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
const word: string[] = ["hello", "world"];
console.log(word.join(" "));

// POP -> menghilangkan isi value paling ahir dlam array
const word2: string [] = ["hello","world","hello"];
word2.pop();
console.log(word2);

// SHIFT -> menghilankan value yang paling depan dalam array
const word3: string[] = ["test","world","hello"];
word3.shift();
console.log(word3);

//PUSH -> menambahkan value ke dalam array di paling ahir
const word4: string[] = ["hello","world"];
word4.push("purwadhika");
console.log(word4);

//UNSHIFT -> menambahkan value ke urutan paling depan array
const word5: string[] = ["hello","world"];
word5.unshift("jogja");
console.log(word5);

// CONCAT --> menggabungkan 2 atau lebih menjadi 1 array
const arr7: string[] = ["hello"];
const arr8: string[] = ["hello"];
const arr9: string[] = ["hello"];

console.log(arr7.concat(arr8));
console.log(arr7.concat(arr8).concat(arr9));

//    Opsi lain 
const mergerArr = [...arr7,...arr8,...arr9]; //spread
console.log(mergerArr);

// SPLICE -> untuk menghapus, mengganti , atau menambahkan
// value pada sebuah array
// rumus -> splice(startIndex,brpYgMauDiDelete, item)

const month: string[]= ["jan","mar","apr","jun"];

month.splice(1,0,"feb"); // menambahkan pada index 1
console.log(month);

month.splice(4.1); // menghapus index 4
console.log(month);

month.splice(3,1,"mey"); // mengganti pada index 3
console.log(month);

// SLICE --> mereturn array baru dengan value yang sudah di tentukan
// index start dan index end dari array tsb
// rumus -> slice(startIndex, endIndex)

const fruit: string[] = ["apple","banana","orange","lemon","mango"];
console.log(fruit.slice(1,4)):
console.log(fruit.slice(-4,-1));

// INDEXOF -> mencari index dari value yang kita search
//kalo tidak ketemu akan mereturn -1

const fruit2: string[]= ["apple","banana","orange","lemon","mango"];
console.log(fruit2.indexOf("lemon"));

// SORT -> mengurutkan isi array berupa string atau number

// versi string
const fruit4: string[]= ["apple","banana","orange","lemon","mango"];
fruit4.sort();
console.log(fruit4);

// versi number tanpa compare function
const poin : number[]=[3,5,1,9,6,2];
poin.sort();
console.log(poin);

//versi number menggunakan compare function
const poin2: number[] = [3,5,1,9,6,2];
poin2.sort((a,b)=> a-b); // asc(kecil ke besar)



// REVERSE -->membalikan urutan element dalam array


// FOREACH -> melakukan looping pada array tapi tidak me-return apapunn
// 

// MAP -> melakukan looping sama kaya forEach tapi mereturn array baru
const fruit6: string[] = ["maggo","apple","banana","orane","lemon"];
const result7 = fruit6.map((fruit)=>{
    return fruit;
});

console.log(result7);

// FILTER -> melakukan looping juga sama kaya MAP dan menghasilkan
//arrya baru berdasarkan kondisi pada return function

const ages: number[]= [32,15,29,21,40];
const result8 = ages.filter((age) => {
    return age > 17;
});
console.log(result8);


// FIND -> mencari array yang pertama di temukan pertama kali dalam array
 const ages2: number []= [3,15,29,15,40];

 const result9 = ages2.find((age) => age >14);
 console.log(result9);

 // FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah indexnya

 const ages3: number[]=[3,15,29,15,40];
 const result10 = ages3.findIndex((age) => age > 14);
 console.log(result10);

 //REDUCE -> biasa digunakan untuk melakukan operasi aritmatika 
 //pada tiap isi array

 const numbers1: number[] = [175,50,25];
 const result11 = numbers1.reduce((a,b) => a +b);
 console.log(result11);


 // INCLUDES -> mengecek value pada array ada apa tidak
 //hasil returnya adalah boolean

 const fruit7: string []= ["manggo","apple","banana","lemon"];
 console.log(fruit7.includes("apple"));