// SOAL 1
const lengt: number = 5;
const width: number = 3;
const area: number = length * width;

console.log(area);

//SOAL 2
// const length: number = 5;
// const width: number = 3;
const perimeter: number = 2* (lengt+width);
console.log(perimeter);

//SOAL 3
const radius: number =14;
const diameter = 2* radius;
const circumference = 2*3.13;
const areas = 3.14*radius*radius;

console.log (`diamete${diameter},circumference ${circumference}, area ${area}`)



//SOAL 4

const a : number = 80;
const b : number = 65;

const angles= 180-(a+b);
console.log(angles);

//SOAL 5

let days = 400;
//days = 366;


const year = Math.floor(days/365);
const month = Math.floor ((days%365)/30);
const day = Math.floor ((days%365)%30);
console.log( `${year} year, ${month} month, ${day} day`);

//SOAL 6

const date1 : Date = new Date("2024-01-01");
const date2 : Date = new Date ("2024-10-10");
const bedaTanggal : number = Math.abs(date1.getTime()-date2.getTime());
const bedaHari: number = bedaTanggal / (1000*365*24);

console.log(`perbedaan hari dari tanggal pertama dan kedua : ${bedaHari}`);


