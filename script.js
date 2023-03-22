const container = document.getElementById('container');
let gridSize = 16;

for (let i = 0; i < gridSize ; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < gridSize ; j++) {
        let square = document.createElement('div');
        square.className = 'square';
        row.appendChild(square);
    }
    container.appendChild(row);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => square.addEventListener('mouseover', (e) => {
    e.target.classList.add('mouseover');
}));

squares.forEach(square => square.addEventListener('mouseout', (e) => {
    e.target.classList.remove('mouseover');
}));