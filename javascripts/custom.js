class Game {
  constructor(table) {
    this.currentPlayer = "cross";
    this.state = [[NaN, NaN, NaN], [NaN, NaN, NaN], [NaN, NaN, NaN]];
    this.table = table;
  }
  changePlayer() {
    this.currentPlayer = this.currentPlayer === "cross" ? "circle" : "cross";
  }
  nextMove(element) {
    debugger;
    const columnNr = element.cellIndex;
    //Find column number of clicked element
    //find row number
    //update this.state
    // this.state[0][2]
    const allRows = this.table.rows;
    const allRowsArray = [...allRows];
    const currentRow = element.parentNode;
    const rowNr = allRowsArray.indexOf(currentRow);
    debugger;
    this.state[rowNr][columnNr] = this.currentPlayer;
    debugger;
    this.checkWinner();
    this.changePlayer();
  }
  checkWinner() {
    for (let i = 0; i < this.state.length - 2; i++) {
      for (let j = 0; j < this.state[i].length; j++) {
        if (
          this.state[j][i] === this.state[j][i + 1] &&
          this.state[j][i + 1] === this.state[j][i + 2] &&
          this.state[j][i] === this.state[j][i + 2]
        ) {
          alert("Winner");
        }
        if (
          this.state[0][0] === this.state[1][1] &&
          this.state[0][0] === this.state[2][2] &&
          this.state[1][1] === this.state[2][2]
        ) {
          alert("Winner");
        }
      }
    }
  }
}

$(document).ready(function() {
  const table = $("table")[0];
  const game = new Game(table);

  $("th").on("click", function() {
    if (game.currentPlayer === "cross") {
      $(this).append(`
        <div class="cross">
          <div></div>
          <div></div>
        </div>
    `);
    } else {
      $(this).append(`
        <div class="circle"></div>
      `);
    }
    debugger;
    game.nextMove(this);
    $(this).off();
  });
});
