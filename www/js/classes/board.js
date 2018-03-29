class Board {  

  constructor(game){
    this.game = game;
    this.currentPlayerNo = 0;
    this.antalDrag = 1;
    this.gameFinished = false;
   //Skapar en array för spelplanen
    this.data = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];
   //Skapar en array med tomma samt förgade brickor
    this.slotImages = [
      "col.png",
      "col-red.png",
      "col-yellow.png"
    ];
    // Scrolls on top of the page (fixes mobile version)
    window.scrollTo(0, 0);
    
    // Removes scrolling when the game is on (helps with scaling)
    $('body').addClass('hiddenScroll');
    this.render();
    this.makeNewTurn();
  }
 
 //Kollar alla horisontella led efter vinst
   checkWinHorizontal(playerNo) {
    var winningSquares=[];
    let rows = this.data.length;
    let cols = this.data[0].length;

    for (let y = 0; y < rows; y++) {
      var playerLength = 0;
          
      for (let x = 0; x < cols; x++) {
        var square = this.data[y][x];
        
        if (square === playerNo){
          var winningSquare = {x:x,y:y};
          winningSquares[playerLength]=winningSquare;
          playerLength++;
        }if (square != playerNo) {
            playerLength = 0;

        }
        if (playerLength == 4){
          this.gameFinished = true;
          let victory = new Victory(this.game.players, this.antalDrag);
          victory.victoryToPlayer(playerNo);
          return winningSquares;
        }
        
      }
    }
    return null;
  }
  //Kollar alla vertikala led efter vinst
  checkWinVertical(playerNo) {
    let rows = this.data.length;
    let cols = this.data[0].length;

    for (let x = 0; x < cols; x++) {
    var playerLength = 0;
          
     for (let y = 0; y < rows; y++) {
        var square = this.data[y][x];

        if (square === playerNo){
          playerLength++;
          
        } if (square != playerNo) {
            playerLength = 0;

        }
        if (playerLength == 4){
          this.gameFinished = true;
          let victory = new Victory(this.game.players, this.antalDrag);
          victory.victoryToPlayer(playerNo);
         
          return;
        }
        
      }
    }
  }

  //Kollar efter vinster på alla möjliga diagonala led
  checkWinDiagonal(playerNo){
    let rows = this.data.length;
    let cols = this.data[0].length;

    //Kollar leden 3-6 i x-led från vänster till höger
    for (let x = 0; x<cols; x++) {
      var playerLength = 0;
      for(let y = 0; y<rows; y++) {
        if (x-y < 0) {
          break;
        }
        var square = this.data[y][x-y];
        if (square === playerNo){
          playerLength++;
          
        } if (square != playerNo) {
            playerLength = 0;

        }
        if (playerLength == 4){
          this.gameFinished = true;
          let victory = new Victory(this.game.players, this.antalDrag);
          victory.victoryToPlayer(playerNo);
          
          return;
        }
      }
    }
   //Kollar de 2 resterande möjliga leden från vänster till höger
    for(let y = 1; y<rows; y++) {
      var playerLength = 0;

      for(let x = 0; x<cols; x++) {
        if (y+x >= rows){
          break;
        }
        var square = this.data[y+x][cols-x-1];

        if (square === playerNo){
          playerLength++;
          
        } if (square != playerNo) {
            playerLength = 0;

        }
        if (playerLength == 4){
          this.gameFinished = true;
          let victory = new Victory(this.game.players, this.antalDrag);
          victory.victoryToPlayer(playerNo);
          
          return;
        }

      }

    }
    //Kollar leden från vänster till höger på diagonalen
    for(let x = 0; x<cols; x++){
      var playerLength = 0;
      for(let y = 0; y<rows; y++){
        if (x+y > cols-1){
          break;
        }
        var square = this.data[y][x+y];
        
        if (square === playerNo){
          playerLength++;
          
        } if (square != playerNo) {
            playerLength = 0;

        }
        if (playerLength == 4){
          this.gameFinished = true;
          let victory = new Victory(this.game.players, this.antalDrag);
          victory.victoryToPlayer(playerNo);
          
          return;
        }

      }    
    }
    for (let y = 1; y<rows; y++){
      var playerLength = 0;
      for(let x = 0; x<cols; x++){
        if (y+x >= rows) {
          break;
        }
        var square = this.data[y+x][x];
        if (square === playerNo){
          playerLength++;
          
        } if (square != playerNo) {
            playerLength = 0;

        }
        if (playerLength == 4){
          this.gameFinished = true;
          let victory = new Victory(this.game.players, this.antalDrag);
          victory.victoryToPlayer(playerNo);
          
          return;
        }

      }

    }
  }
  //Kollar om platsen på spelplanen är ledig för att lägga ut en bricka 
  makeMove(col){
    let moveOk = false;
    for(let row = 5; row >= 0; row--){
      if(this.data[row][col] == 0){
        this.data[row][col] = this.currentPlayerNo + 1;
        moveOk = true;
        this.antalDrag += 0.5;
        $('.antaldrag').text("Drag:"+ Math.floor(this.antalDrag));
        break;

      }
    }
    return moveOk;
   
   
  }
  //Byter mellan spelare 1 och 2
  switchPlayer(){
    this.currentPlayerNo = this.currentPlayerNo == 0 ? 1 : 0;
    
    // Add underline for player names
    $('h1').toggleClass('p1');
  }
  //
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
      let draw = new Victory();
      draw.draw();

    }
  }

  addEventHandlers(){
  
    let that = this;
    var winningSquares=[];
  
    $('.xcol').click(function(){
      if (that.gameFinished || Board.disableAllClicks) {
        return;
      }

      let col = $(this).attr('data-xcol') / 1;
      let moveWasOk = that.makeMove(col);

      if (moveWasOk) {
         //Kollar vilka platser de vinnande brickorna låg på och kallar på funktionen för horisontella vinster
         winningSquares = that.checkWinHorizontal(that.currentPlayerNo+1);
         if (winningSquares != null){
           for (let s = 0; s<4; s++){
             let square = winningSquares[s]          
           }
         }
        //Kallar på funktionen för vertikala vinster
        that.checkWinVertical(that.currentPlayerNo+1);
        //Kallar på funktionen för diagonala vinster
        that.checkWinDiagonal(that.currentPlayerNo+1);
        //Kallar på funktionen som byter spelare vid varje nytt drag
        that.switchPlayer();
        //Kallar på funktionen som renderar spelplanen
        that.render();
        //Kallar på funktionen som kollar om spelet är över
        that.checkIfGameFinished();
          
      }

      if (!that.gameFinished) {
        that.makeNewTurn();
      } else {
      }

    });
 
  // Remove all old click-functions from the restart-button
   $('#Restart').off();
   // then add One new click-function to the button
   $('#Restart').click(function(){
    // Cancel the current timer
    $('#victory-audio').trigger('pause');
    clearTimeout(that.botTimeout);
    that.game.board = new Board(that.game);
    this.antalDrag = 1;
    $('.antaldrag').text("Drag:1");
    });

  }
//Renderar spelplanen
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
  
  


  
