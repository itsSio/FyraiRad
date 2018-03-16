
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
  }

  makeMove(col){
    let moveOk = false;
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
    }
    return moveOk;
  }


  render(){
    // in the div with the class "board" render all rows and columns from the data array
    let html = '';
    for(let row of this.data){
      console.log(row);
      html += '<div class="row"><div class="col-12 clearfix">' 
      let xcol=0;
      for(let col of row){
        html += '<img class="float-left xcol" data-xcol="'+xcol+'" src="imgs/' + this.slotImages[col] + '">';
        xcol++;
      }
      html += '</div></div>';
    }
    $('.board').html(html);

    this.addEventHandlers();

  }

  addEventHandlers(){
    let that = this;
    $('.xcol').click(function(){
      let col = $(this).attr('data-xcol') / 1;
      that.makeMove(col); 
    });
  }

}


  }
  
}