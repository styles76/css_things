function generateBoard(size) {
  const board = document.querySelector(".board");
  board.innerHTML = ""; // Clear existing board if any

  for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < size; j++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.textContent = "*"; // Cell content
          row.appendChild(cell);
      }

      board.appendChild(row);
  }
}

// generate the board when the browser has finished loading the HTML
document.addEventListener("DOMContentLoaded", function () {
  generateBoard(10); // Generates a 10x10 board
});