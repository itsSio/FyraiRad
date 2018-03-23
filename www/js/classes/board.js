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
    // Removes scrolling when the game is on (helps with scaling)
    $('body').addClass('hiddenScroll');
    this.render();
    this.makeNewTurn();
  }
 
  
   checkWinHorizontal(playerNo) {
     let rows = this.data.length;
    let cols = this.data[0].length;

    for (let y = 0; y < rows; y++) {
      var playerLength = 0;
          
      for (let x = 0; x < cols; x++) {
        var square = this.data[y][x];
        

        //if (this.data[x][y] === playerNo){
        if (square === playerNo){
          playerLength++;
          console.log("spelare",square,"antal",playerLength)
        } if (square != playerNo) {
            playerLength = 0;

        }
        if (playerLength == 4){
          this.gameFinished = true;
          alert("Du har vunnit")
          return;
        }
        
      }
    }
  }
  checkWinVertical(playerNo) {
    let rows = this.data.length;
    let cols = this.data[0].length;

    for (let x = 0; x < cols; x++) {
      var playerLength = 0;
          
      for (let y = 0; y < rows; y++) {
        var square = this.data[y][x];
        //console.log(x,y,square)

        //if (this.data[x][y] === playerNo){
        if (square === playerNo){
          playerLength++;
          //console.log("spelare",square,"antal",playerLength)
        } if (square != playerNo) {
            playerLength = 0;

        }
        if (playerLength == 4){
          alert("Du har vunnit")
          return;
        }
        
      }
    }
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
        antalDrag++;
        break;
      }
    }
    return moveOk;
   // identifyWinner();
   
  }

  switchPlayer(){
    this.currentPlayerNo = this.currentPlayerNo == 0 ? 1 : 0;
    
    // Add underline for player names
    $('h1').toggleClass('p1');
  }

  makeNewTurn(){
    let currentPlayer = this.game.players[this.currentPlayerNo];

    if(currentPlayer instanceof Bot) {
      // Setting timer
      Board.disableAllClicks = true;
      this.botTimeout = setTimeout(function() {
        Board.disableAllClicks = false;
        currentPlayer.tryUntillValidClick();
      }, 400);
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
      if (that.gameFinished || Board.disableAllClicks) {
        return;
      }

      let col = $(this).attr('data-xcol') / 1;
      let moveWasOk = that.makeMove(col);

      if (moveWasOk) {
        that.checkWinHorizontal(that.currentPlayerNo+1);
        that.checkWinVertical(that.currentPlayerNo+1);
        that.switchPlayer();
        that.render();
        that.checkIfGameFinished();
          
      }

      if (!that.gameFinished) {
        that.makeNewTurn();
      } else {
        console.log('game finished');
      }

    });
  
  // Remove all old click-functions from the restart-button
   $('#Restart').off();
   // then add One new click-function to the button
   $('#Restart').click(function(){
    // Cancel the current timer
    clearTimeout(that.botTimeout);
      that.game.board = new Board(that.game);
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
  
  


  
