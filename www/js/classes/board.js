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
   // identifyWinner();
   
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
  
  


  
