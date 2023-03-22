const container = document.getElementById('container');

for (let i = 0; i < 16*16 ; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => square.addEventListener('mouseover', (e) => {
    e.target.classList.add('mouseover');
}));

squares.forEach(square => square.addEventListener('mouseout', (e) => {
    e.target.classList.remove('mouseover');
}));