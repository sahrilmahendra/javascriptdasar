var nomorAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
while (nomorAngkot <= angkotBeroperasi)
{
    console.log("Angkot No. " + nomorAngkot + " beroperasi dengan baik." );
    nomorAngkot++;
}
for(nomorAngkot = angkotBeroperasi + 1; nomorAngkot <= jumlahAngkot; nomorAngkot++){
    console.log("Angkot No. " + nomorAngkot + " sedang tidak beroperasi.")
}