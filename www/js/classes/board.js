class Board {  

  constructor(game){
    this.game = game;
    this.currentPlayerNo = 0;
    this.gameFinished = false;
    this.data = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];
    this.slotImages = [
      "col.png",
      "col-red.png",
      "col-yellow.png"
    ];
    console.log("HEPP")
    // Removes scrolling when the game is on
    $('body').addClass('hiddenScroll');
    this.render();
    this.makeNewTurn();
  }
 
  

  //identifyWinner(){
     //for (let x = 0; x < this.data.length; x++) {
   

      // for (let y = 0; y < this.data[x].length; y++) {
      // var square = this.data[x][y];
      //  if (square && square.currentPlayerNo) {
      // if (x === 0 || x === 1) {
      // if (this.data[x + 1][y].currentPlayerNo === square.currentPlayerNo &&
       //         this.data[x + 2][y].currentPlayerNo === square.currentPlayerNo &&
        //        this.data[x + 3][y].currentPlayerNo === square.currentPlayerNo) {

         //     console.log("Color" , square.currentPlayerNo , "Wins");
         //   return;
         //   }
        //  }
       //  }
    //  }
  //   }
  // }

  makeMove(col){
    let moveOk = false;
    let antalDrag = 0;
    for(let row = 5; row >= 0; row--){
      if(this.data[row][col] == 0){
        this.data[row][col] = this.currentPlayerNo + 1;
        moveOk = true;
        break;
      }
    }
    return moveOk;
   // identifyWinner();
   
  }

  switchPlayer(){
    this.currentPlayerNo = this.currentPlayerNo == 0 ? 1 : 0;


  makeNewTurn(){
    let currentPlayer = this.game.players[this.currentPlayerNo];

    if(currentPlayer instanceof Bot) {
      // Setting timer
      setTimeout(function() {
        currentPlayer.randomClick();
      }, 300);
    }
  }

  checkIfGameFinished(){
    if($('.game img[src="imgs/col.png"]').length == 0) {
      this.gameFinished = true;
    }
  }

  addEventHandlers(){
  
    let that = this;
  
    $('.xcol').click(function(){
      if (this.gameFinished) {
        return;
      }

      let col = $(this).attr('data-xcol') / 1;
      let moveWasOk = that.makeMove(col);

      if (moveWasOk) {
        that.switchPlayer();
        that.render();
        that.checkIfGameFinished();
      }

      if (!this.gameFinished) {
        that.makeNewTurn();
      } else {
        console.log('game finished');
      }

    });
  
   $('#Restart').click(function(){
      let b = new Board();
      b.render();
    });

  }

  render(){
    // in the div with the class "board" render all rows and columns from the data array
    let html = '';
    for(let row of this.data){
      html += '<div class="row"><div class="col-12 clearfix">' 
      let xcol=0;
      for(let col of row){
        html += '<img class="float-left xcol" data-xcol="'+xcol+'" src="imgs/' + this.slotImages[col] + '">';
        xcol++;
      }
      html += '</div></div>';
    }
    $('.board .game').html(html);

    this.addEventHandlers();

  }
}
  
  


  
