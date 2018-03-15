
class Board {  

  constructor(){
    this.data = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];
  }

  makeMove(col, player){
    // col 0-6


    // return true if move possible, false otherwise (column full)
  }

  render(){
    // in the div with the class "board" render all rows and columns from the data array
    let html = '';
    for(let row of this.data){
      console.log(row);
      html += '<div class="row"><div class="col-12 clearfix">' 
      for(let col of row){
        html += '<img class="float-left" src="imgs/col.png">';
      }
      html += '</div></div>';
    }
    $('.board').html(html);
  }

}

