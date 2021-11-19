
function isimNe() {
    //prompt ile ismi alalım ve kontrol edelim
    var isim = prompt("İsminiz nedir? ")
    var isimRegex = /^[a-zA-Z0-9]+$/;
    if (isimRegex.test(isim)==true) {
        document.querySelector("#myName").innerHTML = isim;       
    } 
    while (isimRegex.test(isim)==false) {
        var isim = prompt("İsminiz nedir? ")
        var duzeldiMi = (isimRegex.test(isim)) ? document.querySelector("#myName").innerHTML = isim : alert("İsminiz nedir?") ;
        
    }
    debugger
    if (false) {
        let isim2 = prompt("İsminiz nedir? ")
        document.querySelector("#myName").innerHTML = isim2;
    }
}
//Ekranda saati ve tarihi gösterelim
function tarihiGöster() {
    var tarih = new Date();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
    var gun = tarih.getDay();
    var ayıngunu = tarih.getDate();
    var ay = tarih.getMonth();
// getMonth fonksiyonu 0 ile 11 aralığında number return ettiği için
    if (ay ==0) {
        ay = "Ocak";
    } else if (ay ==1) {
        ay = "Şubat";
    } else if (ay ==2){
        ay ="Mart";
    } else if (ay ==3){
        ay ="Nisan";
    } else if (ay ==4){
        ay ="Mayıs"; 
    } else if(ay ==5){
        ay="Haziran";
    } else if(ay==6){
        ay ="Temmuz";
    } else if(ay==7){
        ay ="Ağustos";
    } else if(ay==8){
        ay ="Eylül";
    } else if(ay==9){
        ay ="Ekim";
    } else if(ay==10){
        ay ="Kasım";
    } else if(ay==11){
        ay ="Aralık";
    }





    if (gun ==1) {
        gun = "Pazartesi";
    } else if (gun ==2) {
        gun = "Salı";
    } else if (gun ==3){
        gun ="Çarşamba";
    } else if (gun ==4){
        gun ="Perşembe";
    } else if (gun ==5){
        gun ="Cuma"; 
    } else if(gun ==6){
        gun="Cumartesi";
    } else if(gun==7){
        gun ="Pazar";
    }

    saat = saat < 10 ? "0" + saat : saat;
    dakika =dakika <10 ? "0" + dakika : dakika;
    saniye = saniye <10 ? "0" + saniye : saniye;

    //var zaman = saat + ":" + dakika + ":" +saniye + " " + gun;

   // saati ve tarihi bu şekilde formatlayalım
    var zaman = saat + ":" + dakika + ":" +saniye + ",  " + " " + ayıngunu + " " +ay + " " + gun;

    document.getElementById("myClock").innerHTML = zaman;

    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${zaman}`

    setTimeout(tarihiGöster,1000);













}









tarihiGöster()
isimNe();