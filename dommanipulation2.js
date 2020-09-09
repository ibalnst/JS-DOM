// DOM Manipulation 2

// Buat elemen baru

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// Simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const itemBaru = document.createElement('li');
const isiItemBaru = document.createTextNode('Item Baru');

itemBaru.appendChild(isiItemBaru);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(itemBaru, li2);

// remove Node

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Replace Node

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const h2textBaru = document.createTextNode('Judul Baru !');

h2Baru.appendChild(h2textBaru);
sectionB.replaceChild(h2Baru, p4);

itemBaru.style.backgroundColor = 'lightgreen';
pBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';