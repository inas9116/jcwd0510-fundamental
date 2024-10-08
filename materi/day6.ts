//============ OBJECT

// cara menuliskan object
// cara 1
const user = {}; // cara yang sering di gunakan

// cara 2
const user2 = new Object();


// properties & method

interface user {
    name: string;
    greet: () => void;
    greet2: () => void;
    hobby ?: string; // tanda tanya menunjukan bisa diisi atau tidak
}

const user3 = {
    name: "budi",
    greet() {
        console.log("Hello");
    },
        //atau
        greet2: () => {
            console.log;
    }
};


// Add & delete property
const person: any ={
    name: "joko",
    age: 20,
};
console.log(person);
person.hobby = "futsal"; // menambahkan property
console.log(person)
person["address"] = "jogja"; // cara lain menambahkan property
console.log(person);

//delete property
delete person.address;
console.log(person);

// accessing value
console.log(person.name); // cara pakai dot
console.log(person["hobby"]); // pakai square bracket
console.log(Object.keys(person));
console.log(Object.values(person));


// mereplace atau mengganti isi
person.hobby = "badminton"; //
console.log(person);


// ====================IMMUTABLE & MUTABLE
// MUTABLE : variable yang bisa diubah datanya
// IMMUTABLE : object yang tidak bisa diubah saat sudah dibuat (non priitive data types)


// MUTABLE
const count1 : number = 4;
let count2 : number = count1;
count2 = 10;

console.log(count1);
console.log(count2);

// IMMUTABLE
let orang1 : any = {name : "budi",};
// let orang2 : any = orang1;

// let orang2.age =20; // kalau di consol.log orang1 dan orang2 juga ikut berubah
let orang2: any = {...orang1};

orang2.age = 20;

console.log(orang1);
console.log(orang2);


// =============OPTIONAL CHAINING
// Cara yang aman untuk mengakses object yang isinya belum tahu
// caranya dengan kasih tanda ?

const user4: any = {};

console.log(user4.address);
console.log(user4.address?.city);

// ===============FOR IN
// basik looping di dalam object

const person3 = {
    name: "aceng",
    age : 90,
};

for (const   key in person3){
    console.log(key);
    console.log(person3[key]);
}

// ===============DESTRUCTURING ASSIGNMENT
// mengeluarkan property dalam object menjadi sebbuah variable


// versi destruc object
const person4 = {
    name: "aceng",
    age : 40,
    hobby: "main game",
};

console.log(person4.name);
console.log(person4.age);

const {name, age, hobby} = person4;

console.log(name);
console.log(age);

// versi destruc array

const array = [10,20];

console.log(array[0]);
console.log(array[1]);

const [a, b] = [10, 20];

console.log(a);
console.log(b);

// ============== SPREAD OPERATOR
// digunakan untuk copy isi object atau menggabungkan object

const objectOne = { name: "jacky", password: "admin123"};
const objectTwo = { email: "email@gmail.com", name: "pepeng"};

const result = {...objectOne, ...objectTwo };
console.log(result);

// ============== THIS KEYWORD
// mengakses properti lain di dalam sebuah object

const person5 = {
    firstName: "aceng",
    lastName: "racing",
    greet() {
        console.log(`hello, ${this.firstName}`);
    },
};
person5.greet();

// ============= CLASS
// template / cetakan untuk membuat sebuah object, dalam penulisan pascalface yaitu huruf besar duluan

// class declaration

class user1 {
    greeting () {
        console.log('hello world');
    }
};


// class expression

class user5 {
    greeting () {
        console.log('hello world');
    }
};


// CREAT AN OBJECT FROM CLASS
const human = new user1(); // new menandakan itu class
const human2 = new user5();

human2.greeting();
human.greeting();


// =============== CONSTRUCTOR
// method bawaan dari class yang akan di jalankan pertama kali saat
//kalian object baru menggunakan template class

// hastag # menandakan privat , hanya bisa diakses di dalam class itu saja

// class person1 {
//     constructor(){ // namanyan harus constructor
//         name: String;
//         this.name = name;
//     }
//     greeting() {
//         console.log(`hello ${this.name}`);
//         return `hello ${this.name}`;
// }
// }


// ACCES MODIFIER -> public dan privat 

class person1 {
    name: string;
    #email: string;

    constructor( name: string, email: string) {
        this.name = name;
        this.#email = email;
    }

    public greeting(){
        console.log(`Hello ${this.name}`);
        return `Hello ${this.name}`;
    }

    // method ini hanya bisa diakses di dalam class ini saja
    private showEmail (){
        console.log(this.#email);
    }

    sendReminder() {
        return this.showEmail();
    }
}

const orang4 = new person1("bidi", "budi@gmail.com");
console.log(orang4.name);

// orang4.showEmail()  //gak bakal bisa krn showEmail adl method privat
// consol.log(orang4.#email); // gk bakal bisa krn email itu di bikin privat
console.log(orang4.greeting())



// ============== GETTER & SETTER 
// get -> untuk baca data
// set -> set value di dalam object

const orang3 = {
    firstName : "ujang",
    lastName : "recing",

    get fullName (){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName (value) {
        // add more logic
        const split = value.split(" ");
        this.firstName = split[0];
        this.lastName = split[1]

    },
    fullName2(value: string) {
        const split = value.split(" ");
        this.firstName = split[0];
        this.lastName = split[1];
    }
};
console.log(orang3.fullName); // pake getter
orang3.fullName = "budi joko"; // pake setter
console.log(orang3.fullName);
orang3.fullName2('jacky siti'); // menggunakan method biasa
console.log(orang3.fullName);




// kapan menggunkan getter dan setter?

// getter bergunna ketika inginn mendaptkan nilai properti, 
//tetapi ingin menambahkan logika (misalnya, format / validasi)

//setter berguna ketika ingin memvalidasi / menambahkan logika 
//sebelum menetapkan nilai property

// gunakan method biasa jika ingin tindakan lebih eksplisit atau jika fungsi 
//tersebut melakukan lebih dari sekedar mengambil atau menetapkan nilai property


// ===============ENCAPSULATUS
//konsep di OOP untuk nge bundle data dalam satu unit.
//contohnya dalam class dan object

//=============INHERITANCE
// pewarisan dari parent class ke child class
// property dan methode dari parent class bisa di akses oleh child class

class product {
    produckName: string;
    price: number

    constructor(name: string, price: number){
        this.produckName = name;
        this.price = price;
    }
    readPrice(){
        console.log(this.price);
        return this.price;
    }
}


// tidak menggunakan konsep inherotance
// class book {
//     produckName: string;
//     price: number;
//     author: string;

//     constructor(name: string, price: number, author: string){
//         this.produckName = name;
//         this.price = price;
//         this.author = author;
//     }
// }

// menggunkan konsep inheritance

class book extends product{
    author: string;

    constructor(name: string, price: number, author: string){
        super(name, price);
        this.author = author;
    }
}

const buku = new book("Cara Jago Coding", 100_000, "aceng");
console.log(buku.produckName);
console.log(buku.price);
console.log(buku.readPrice());



// ============== INSTANCE OFF
// mengecek apakah sebuah object memiliki hubungan ke class tertentu

class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(Rabbit instanceof Animal);
console.log(Rabbit instanceof Rabbit);
console.log(Rabbit instanceof Tree);
