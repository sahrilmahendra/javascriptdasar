var nomorAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
for(nomorAngkot = 1; nomorAngkot <= jumlahAngkot; nomorAngkot++){
    if(nomorAngkot <= angkotBeroperasi)
    {
        console.log("Angkot No. " + nomorAngkot + " beroperasi dengan baik.")
    }
    else{
        console.log("Angkot No. " + nomorAngkot + " sedang tidak beroperasi.")
    }
}