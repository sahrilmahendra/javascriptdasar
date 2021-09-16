function jmlVolumeDuaKubus(a, b){
    var volumeA;
    var volumeB;
    var jml;
    volumeA = a * a * a;
    volumeB = b * b * b;
    jml = volumeA + volumeB;

    return jml;
}

alert(jmlVolumeDuaKubus(8, 3));
alert(jmlVolumeDuaKubus(10, 15));