class Bot extends Player{
  constructor(name, color){
    super(name, color);
  }

  randomClick() {
    let randomNumber = Math.floor(Math.random() * 7); // 0-6
    $('.game [data-xcol=' + randomNumber + ']').first().click();

  }


  tryUntillValidClick() {
    let that = this;
  	let isDone = false;
  	while(isDone == false) {
  		that.randomClick();
  		if(app.game.board.currentPlayer != this) {
  			isDone = true;
  		}
  	}
  }


}