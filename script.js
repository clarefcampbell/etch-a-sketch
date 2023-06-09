const container = document.getElementById('container');
let gridSize = 16;

function generateGrid (gridSize) {
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
    startHover()
}
document.addEventListener("DOMContentLoaded", generateGrid(gridSize));

//Hover functionality
function startHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = getColor();
    }));
}

function clearGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());
}

//Changing grid size
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let userGridSize = prompt('Enter new grid size');
    clearGrid();
    generateGrid(userGridSize);
});

function getColor() {

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}