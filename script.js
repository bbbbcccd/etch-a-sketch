// takes no. of grid cells per side, n
// returns HTML of n x n sized grid 
function createGrid(n) {
    let gridHTML = "";
    for (let i = 0; i < n; i++) {
        gridHTML += '<div class="grid-row">'
        for (let j = 0; j < n; j++) {
            gridHTML += '<div class="grid-cell"></div>'; 
        }
        gridHTML += '</div>';
    }
    return gridHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".grid-container").innerHTML = createGrid(16);
});