// var tanya = true;
// while (tanya) {
//     // Menangkap pilihan player
//     var p = prompt('Pilih : Gajah, Semut, Orang');

//     // Menangkap Pilihan Komputer Secara Random
//     var comp = Math.random();

//     if (comp < 0.34) {
//         comp = 'gajah';
//     } else if (comp >= 0.34 && comp < 0.67) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     // Menentulan rules
//     var hasil = '';
//     if (p == comp) {
//         hasil = 'Seri';
//     } else if (p == 'gajah') {
//         hasil = (comp == 'orang') ? 'Menang!' : 'Kalah';
//     } else if (p == 'orang') {
//         hasil = (comp == 'gajah') ? 'Menang!' : 'Kalah';
//     } else if (p == 'semut') {
//         hasil = (comp == 'orang') ? 'Menang!' : 'Kalah';
//     } else {
//         hasil = 'Memasukkan pilihan yang salah !';
//     }

//     alert('Kamu memilih: ' + p + ' dan Komputer memilih :' + comp +
//         '\nMaka hasilnya : Kamu' + hasil);


//     tanya = confirm('lagi?');
// }
// alert('Terima kasih sudah bermain');

function getpilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {

    if (player == comp) return 'Seri';
    if (player == 'gajah') return (comp == 'orang') ? 'Menang!' : 'Kalah';
    if (player == 'orang') return (comp == 'gajah') ? 'Menang!' : 'Kalah';
    if (player == 'semut') return (comp == 'orang') ? 'Menang!' : 'Kalah';

}


function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 500) {
            clearInterval();
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
}


const x = document.querySelectorAll('li img');
// variabel untuk menang atau kalah dan ditampilkan skornya.
let win = 1;
let lose = 1;
x.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getpilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        putar();
        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            // Unutk Menampilkan skor buat terlebih dahulu class Komputer dan Player di HMTL
            // Lalu buat konstantanya dan buat selector
            // lalu buat argumen fungsinya
            // jangan lupa untuk mendeklarasi terlebih dahulu variabel menang atau kalah
            const skorComp = document.querySelector('.skorKomputer');
            const skorPlayer = document.querySelector('.skorPlayer');
            if (hasil == 'Menang!') skorPlayer.innerHTML = win++;
            if (hasil == 'Kalah') skorComp.innerHTML = lose++;
        }, 500);

    });
});




// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComputer = getpilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanComputer = getpilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComputer = getpilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });