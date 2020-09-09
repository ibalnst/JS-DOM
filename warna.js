const x = document.getElementById('tombol');
x.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
};

const tRandomColor = document.createElement('Button');
const tText = document.createTextNode('Acak Warna');
tRandomColor.appendChild(tText);
tRandomColor.setAttribute('type', 'button');
x.after(tRandomColor);

tRandomColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const t = Math.round(Math.random() * 255 + 1);
    const y = Math.round(Math.random() * 255 + 1);
    console.log(r);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + t + ',' + y + ')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const t = sHijau.value;
    const y = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + t + ',' + y + ')';
});
sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const t = sHijau.value;
    const y = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + t + ',' + y + ')';
});
sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const t = sHijau.value;
    const y = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + t + ',' + y + ')';
});

document.body.addEventListener('mousemove', function(e) {
    // posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});