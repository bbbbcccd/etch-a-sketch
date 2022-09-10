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

// Set the hover effect on grid cells
function setHover(HTMLCollection) {
    for (let i = 0; i < HTMLCollection.length; i++) {
        HTMLCollection[i].addEventListener("mouseover", (e) => e.target.style.backgroundColor = "black");
    }
}

function updateSliderText(cellsEachSide) {
    const sliderText = document.getElementById("slider-text");
    sliderText.textContent = "Cells: " + slider.value + " x " + slider.value;
}

// Create 16 x 16 grid by default 
document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);

    let cells = document.getElementsByClassName("grid-cell");
    setHover(cells);    
   
    const slider = document.getElementById("slider");
    updateSliderText(slider.value);
    slider.addEventListener('input', () => {
        gridContainer.replaceChildren();
        createGrid(parseInt(slider.value));
        updateSliderText(slider.value);
        setHover(cells);
    });
});