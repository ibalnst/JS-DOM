// Event Handling
// const xHapus = document.querySelector('.close');
// const card = document.querySelector('.card');

// xHapus.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// Dom Traversal
// const xHapus = document.querySelectorAll('.close');

// for (let i = 0; i < xHapus.length; i++) {
//     xHapus[i].addEventListener('click', function(e) {
//         // xHapus[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';

//     });
// }

// xHapus.forEach(function(x) {
//     x.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     });
// });


// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);

const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});