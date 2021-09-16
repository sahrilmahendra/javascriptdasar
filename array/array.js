// membuat array & menampilkan seluruh isi array 
// var arr = [true, 7, "syahryil"];
// console.log(arr);

// menampilkan 1 elemen dari array
// var arr = [true, 7, "syahryil"];
// console.log(arr[2]);

// menambahkan isi array
// var arr = [];
// arr [0] = true;
// arr [1] = 7;
// arr [2] = "syahryil";
// console.log(arr);

// menghapus isi array
// var arr = [true, 7, "syahryil"];
// arr[1] = undefined;
// console.log(arr);

// menampilkan isi array dengan benar (tidak dalam bentuk object)
// var arr = ["Moch", "Mahendra", "Syahryil"];
// for( var i = 0; i < arr.length; i++ ){
//     console.log("Mahasiswa ke - " + (i + 1) + " adalah : " + arr[i]);
// }




// Method pada array
// 1. join (untuk mengubah dan menggabung elemen array menjadi string)
// var arr = ["Moch", "Mahendra", "Syahryil", "Valenti", "Pou"];
// console.log(arr.join(" | "));

// 2. push (untuk menambah elemen array ke indeks terakhir)
// arr.push("Violet", "Thonar");

// 3. pop (untuk menghapus elemen array pada indeks terakhir)
// arr.pop();

// 4. unshift (untuk menambah elemen array ke indeks pertama)
// arr.unshift("Violet", "Thanos");

// 5. shift (untuk menghapus elemen array pada indeks pertama)
// arr.shift();
// arr.shift();

// 6. splice untuk menyisipkan elemen pada array
// rumus ; splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, "Violet", "Elaine");
// berbeda
// arr.splice(0, 2, "Violet", "Lilia");

// 7. slice(awal, akhir)
// var arr2 = arr.slice(1, 3);
// console.log(arr.join(" - "));
// console.log(arr2.join(" - "));



// 8. foreach
// var angka = [1,2,3,4,5,6,7,8];
// for( var i = 0; i < angka.length; i++ ){
//     console.log(angka[i]);
// }
// angka.forEach(function(e){
//     console.log(e);
// });

// var nama = ["Moch", "Syahryil", "Mahendra"];
// nama.forEach(function(e, i){
//     console.log("Mahasiswa ke - " + (i + 1) + " adalah " + e);
// });


// 9. map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka.join(" - "));
// console.log(angka2.join(" - "));


// 10. sort
// var angka = [2,8,9,6,7,1,4];
// console.log(angka.join((" | ")));
// angka.sort();
// console.log(angka.join((" | ")));

// var angka = [2,13,20,12,8,6,24,18];
// angka.sort(function(a, b){
//     return a-b;
// });
// console.log(angka.join(" | "));

// 11. filter
// var angka = [2,8,9,6,7,1,4];
// var angka2 = angka.filter(function(x){
//     return x == 4;
// });
// console.log(angka2.join(" - "));

// var angka = [2,8,9,6,7,1,4];
// var angka2 = angka.filter(function(x){
//     return x > 4;
//     });
// angka2.sort();
// console.log(angka2.join(" - "));

// 12. find
// var angka = [2,8,9,6,7,1,4];
// var angka2 = angka.find(function(x){
//     return x > 4;
// });
// console.log(angka2);