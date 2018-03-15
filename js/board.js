$(start);
function start() {

  class Board(){  

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
    for(let row of data){
      html += 'start row';
      for(let col of row){
        html += 'one slot'; // different css classes depending on slot 0, 1 or 2
      }
      html += 'end row';
    }
    $('.board').html(html)
  }


}
  
}