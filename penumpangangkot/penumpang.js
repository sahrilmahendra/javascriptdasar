var penumpang = [];
// penumpang naik
// rules tambahPenumpang():
// 1. jika angkot kosong, penumpang naik duduk di kursi pertama
// 2. penumpang berikutnya duduk di kursi selanjutnya secara berurutan
// 3. jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
// 4. asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
// 5. nama penumpang tidak boleh sama. untuk menghindari kebingungan ketika nanti penumpang turun

var tambahPenumpang = function (namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0) {
        // tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang; 
    }
    // else
    else{
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if(penumpang[i] == undefined){
                // tambah penumpang di kursi tsb
                penumpang[i] = namaPenumpang;
                // kembailkan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + " sudah ada di dalam Angkot");
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if (i == penumpang.length - 1){
                // tambah penumpag diakhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
};


// penumpang turun
// rules hapusPenumpang
// 1. jika angkot kosong, tampilkan pesan bahwa angkot kosong
// 2. jika ada penumpang yang namanya sesuai, hapus nama dengan memberi nilai undefined
// 3. jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya
var hapusPenumpang = function (namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log("Angkot masih kosong");
        return penumpang;
    }
    else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                console.log(namaPenumpang + " telah diturunkan");
                return penumpang;
            }
            else if(i == penumpang.length - 1){
                console.log(namaPenumpang + " tidak ada didalam Angkot.");
                return penumpang;
            }
        }
    }
};




