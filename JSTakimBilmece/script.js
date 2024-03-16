const icerikler = [
    { id: 1, value: 'BEŞİKTAŞ', ipucu1: 'siyah beyaz', ipucu2: 'quaresma', ipucu3: '20 sampiyonluk', ipucu4: 'türk takımı' },
    { id: 2, value: 'GALATASARAY', ipucu1: 'sarı kırmızı', ipucu2: 'icardi', ipucu3: '18 sampiyonluk', ipucu4: 'türk takımı' },
    { id: 3, value: 'FENERBAHÇE', ipucu1: 'sarı lacivert', ipucu2: 'syzmanski', ipucu3: '13 sampiyonluk', ipucu4: 'türk takımı' },
    { id: 4, value: 'BAŞAKŞEHİR', ipucu1: 'mavi siyah', ipucu2: 'basak', ipucu3: '6 sampiyonluk', ipucu4: 'türk takımı' }
];
const kapsayici = document.getElementById("kapsayici");
const girdi = document.getElementById("girdi");
let rstSayiGB
function oyunBaslat() {
    kapsayici.innerHTML = "";
    const rastgeleSayi = Math.floor(Math.random() * icerikler.length);
    rstSayiGB=rastgeleSayi;
    for (let i = 0; i < icerikler.length; i++) {
        let x = i + 1;
        const kart = document.createElement("div");
        kart.id = "kartlar";
        kart.dataset.value = x;
        kapsayici.appendChild(kart);
        kart.innerHTML = "?";
        kart.addEventListener("click", function () {
            if (kart.dataset.value == 1) {
                this.innerHTML = icerikler[rastgeleSayi].ipucu1;
            }
            else if (kart.dataset.value == 2) {
                this.innerHTML = icerikler[rastgeleSayi].ipucu2;
            }
            else if (kart.dataset.value == 3) {
                this.innerHTML = icerikler[rastgeleSayi].ipucu3;
            }
            else if (kart.dataset.value == 4) {
                this.innerHTML = icerikler[rastgeleSayi].ipucu4;
            }
            this.style.backgroundColor = "green";
        });
    }
}
function oyunKontrol() {
    if(girdi.value==icerikler[rstSayiGB].value){
        alert("KAZANDINIZ!!!");
    }
    else{
        alert("KAYBETTİNİZ!!!");
    }
}
function oyunSifirla(){
    kapsayici.innerHTML="";
}