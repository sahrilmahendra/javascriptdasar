menu = prompt("Masukkan menu : \nContoh : nasi, daging, mie, sayur, pizza");

switch(menu){
    case "nasi" :
    case "daging" :
    case "sayur" :
        alert("Makanan Sehat");
        break;
    case "mie" :
    case "pizza" :
        alert("Makanan Tidak Sehat");
        break;
    default :
        alert("Makanan yang anda masukkan Salah");
        break;
}