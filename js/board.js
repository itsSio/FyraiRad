
class Board {  

  constructor(){
    this.data = [
      [1,0,0,0,0,0,0],
      [1,0,0,0,0,0,0],
      [1,0,0,0,0,0,0],
      [1,0,0,0,0,0,0],
      [1,0,0,0,0,0,0],
      [1,2,0,0,0,0,0]
    ];
    this.slotImages = [
      "col.png",
      "col-red.png",
      "col-yellow.png"
    ];
  }

//  makeMove(col){
//   for(let i=0;i<6;i++){
//     if(data[col][i] == 0);{
//       return console.log('You can make a move');
//     }
//   }
//   return false;
//     // return true if move possible, false otherwise (column full)
// }

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
    $('.xcol').click(function(){
      let col = $(this).attr('data-xcol') / 1;
      console.log(col); 
    });
  }

}


  }
  
}