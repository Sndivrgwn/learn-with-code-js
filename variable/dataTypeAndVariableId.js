// ini adalah variable
// di JavaScript ada tiga jenis variable
// var (yang lama), let (yang baru), const (yang nilainya tetap)
// mari kita mulai

// variable digunakan untuk menyimpan data, kamu bisa memberikan nilai pada sebuah variable dan menggunakannya nanti
// var adalah keyword yang digunakan untuk mendeklarasikan variable, nilainya bisa diubah kemudian
// let adalah keyword yang digunakan untuk mendeklarasikan variable, nilainya juga bisa diubah kemudian
// perbedaan antara var dan let adalah var memiliki function scope, sedangkan let memiliki block scope
// artinya variable yang dideklarasikan dengan var bisa diakses di luar blok tempat ia dideklarasikan
// misalnya, kalau kamu deklarasikan variable di dalam fungsi, variable dengan var bisa diakses di luar fungsi
// sedangkan variable dengan let hanya bisa diakses di dalam blok tempat ia dideklarasikan

// const adalah keyword yang digunakan untuk mendeklarasikan variable konstan, nilainya tidak bisa diubah lagi

var name = "jane"; // ini adalah variable string
let age = 17; // ini adalah variable number
const stillAlive = true; // ini adalah variable boolean, dan nilainya tidak bisa diubah

// tipe data di JavaScript
// string, number, boolean, null, undefined, object, array

// string adalah rangkaian karakter, bisa ditulis dengan tanda kutip tunggal atau ganda
let greeting = "Hello, " + name; // penggabungan string (concatenation)
console.log(greeting); // Output: Hello, jane 

// number adalah nilai numerik, bisa berupa integer atau float
// float adalah angka yang memiliki koma desimal, bisa mewakili pecahan atau bilangan real
let height = 5.5; // ini adalah angka float
// integer adalah bilangan bulat, bisa positif atau negatif, tapi tidak memiliki koma desimal
let weight = 60; // ini adalah angka integer
// kamu bisa melakukan operasi matematika pada number, seperti tambah, kurang, kali, dan bagi
let product = height * weight; // operasi perkalian
let difference = weight - age; // operasi pengurangan
let quotient = weight / age; // operasi pembagian
let sum = age + weight; // operasi penjumlahan

// boolean adalah nilai true atau false
let isStudent = false; // ini adalah nilai boolean
// nilai boolean sering digunakan dalam kondisi (if) untuk mengatur alur program
if (isStudent) {
    console.log("Kamu seorang siswa.");
} else {
    console.log("Kamu bukan siswa.");
}

// boolean juga bisa digunakan dalam operasi logika: AND, OR, dan NOT
// operasi logika digunakan untuk menggabungkan atau membalik nilai boolean
// operator perbandingan (==, !=, >, <, >=, <=) digunakan untuk membandingkan nilai dan menghasilkan boolean
// operator AND (&&) bernilai true jika kedua operand true
// operator OR (||) bernilai true jika salah satu operand true
// operator NOT (!) membalik nilai boolean, true jadi false, false jadi true

let isAdult = age >= 18; // ekspresi boolean untuk cek apakah umur >= 18
let canVote = isAdult && isStudent; // operasi logika AND
let canDrive = isAdult || isStudent; // operasi logika OR
let isNotStudent = !isStudent; // operasi logika NOT

// null adalah nilai khusus yang menunjukkan "tidak ada nilai"
let emptyValue = null; // ini adalah null
// kita gunakan null ketika ingin secara eksplisit menunjukkan bahwa sebuah variable kosong
// misalnya, ketika ingin mereset nilai variable agar tidak ada isinya
// null berbeda dengan undefined, karena null adalah kotak kosong yang siap diisi, sedangkan undefined adalah variable yang belum diisi sama sekali

// undefined adalah variable yang sudah dideklarasikan tapi belum diberi nilai
let notAssigned; // ini adalah undefined
console.log(typeof notAssigned); // Output: undefined
// undefined berbeda dengan null
// undefined = variable ada tapi belum ada nilainya
// null = variable diberi nilai kosong secara sengaja

// object adalah kumpulan pasangan key-value
let person = {
    name: "John",
    age: 30,
    isStudent: true
}; // ini adalah object
console.log(person.name); // Output: John
// kita bisa menambahkan pasangan key-value baru pada object
person.height = 5.9; // menambah properti baru
// object digunakan untuk mengelompokkan data terkait, bisa berisi string, number, boolean, array, atau object lain

// array adalah kumpulan nilai
let colors = ["red", "green", "blue"]; // ini adalah array
console.log(colors[0]); // Output: red
// array digunakan untuk menyimpan banyak nilai dalam satu variable
// indeks array dimulai dari 0
// misalnya: elemen pertama = index 0, elemen kedua = index 1, dst
colors.push("yellow"); // menambahkan nilai baru ke array
colors.pop(); // menghapus elemen terakhir dari array
// kita bisa mengakses nilai array dengan index
// pembahasan lebih lanjut tentang array akan ada di pelajaran berikutnya
