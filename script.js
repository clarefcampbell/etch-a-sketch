const container = document.getElementById('container');
let gridSize = 64;

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

    squares.forEach(square => square.addEventListener('mouseout', (e) => {
        e.target.classList.remove('mouseover');
        e.target.style.backgroundColor = null;
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
    return 'black';
}