class Board {  

  constructor(){
    this.currentPlayerNo = 1;
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
  }

  makeMove(col){
    let moveOk = false;
    let antalDrag = 0;
    for(let row = 5; row >= 0; row--){
      if(this.data[row][col] == 0){
        this.data[row][col] = this.currentPlayerNo;
        moveOk = true;
        break;
      }
    }
    if(moveOk){
      this.currentPlayerNo = this.currentPlayerNo == 1 ? 2 : 1;
      this.render(); 
      antalDrag++
    }
    return moveOk;
   
  }

  // identifyWinner(){
  //   for (let x = 0; x < this.data.length; x++) {
  //     for (let y = 0; y < this.data[x].length; y++) {
  //       // console.log(this.data[x][y]);
  //       let square = this.data[x][y];
  //       // console.log(square);
        
  //         console.log(square);
  //         if ([y] === 1 &&
  //           [y + 1] === 1 &&
  //           [y + 2] === 1 &&
  //           [y + 3] === 1 &&) {
  //           console.log("red wins");
  //           return;
  //         }
        
  //     }  
  //   }
  // }

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

  addEventHandlers(){
  
    let that = this;
  
    $('.xcol').click(function(){
      let col = $(this).attr('data-xcol') / 1;
      that.makeMove(col); 
    });
  
   $('#Restart').click(function(){
      let b = new Board();
      b.render();
    });

  }
  
  
}

  
