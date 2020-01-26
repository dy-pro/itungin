function luasPersegi() {
    s1 = document.getElementById("sisi1").value;
    s2 = document.getElementById("sisi2").value;
    Hasil = s1 * s2;  
    document.getElementById("hasil").value = Hasil;
}

function luasSegiPanjang() {
    s1 = document.getElementById("panjang").value;
    s2 = document.getElementById("lebar").value;
    Hasil = s1 * s2;  
    document.getElementById("hasil-segipanjang").value = Hasil;
}

function luasSegitiga() {
    s1 = document.getElementById("alas").value;
    s2 = document.getElementById("tinggi").value;
    Hasil = s1 * s2 / 2;  
    document.getElementById("hasil-segitiga").value = Hasil;
}

function luasLingkaran() {
    s1 = document.getElementById("jari1").value;
    Hasil = s1 * s1 * 3.14;  
    document.getElementById("hasil-lingkaran").value = Hasil;
}