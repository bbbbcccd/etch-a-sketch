const gridContainer = document.querySelector('.grid-container');
// takes no. of grid cells per side, n
// Creates a n x n sized grid
function createGrid(n) {
    let gridHTML = "";
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.classList.add("grid-row");
        for (let j = 0; j < n; j++) {
            let cell = document.createElement('div');
            cell.classList.add("grid-cell");
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

// Create 16 x 16 grid by default 
document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);

    let cells = document.querySelectorAll(".grid-cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "black");
    })
});