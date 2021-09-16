// membuat object untuk pengelolaan angkot
function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            console.log("Angkot masih kosong");
            return false;
        }

        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                console.log(namaPenumpang + " sudah turun dan telah membayar " + bayar +
                "\nSaldo kas sekarang sebesar " + this.kas);
                return this.penumpang;
            }
            else if(i == this.penumpang.length - 1){
                console.log(namaPenumpang + " tidak ada didalam Angkot.");
                return this.penumpang;
            }
        }
    }
}
var angkot1 = new Angkot("Syahryil", ["Surabaya", "Malang"],
    [], 0);
var angkot2 = new Angkot("Ulin Nuha", ["Mojokerto", "Sidoarjo"],
    [], 0);
