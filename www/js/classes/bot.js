class Bot extends Player{
  constructor(name, color){
    super(name, color);
  }

  randomClick() {
  	let randomNumber = Math.floor(Math.random() * 7); // 0-6
  	$('.game [data-xcol=' + randomNumber + ']').first().click();
  }

  // tryUntillValidClick() {
  // 	let isDone = false;
  // 	while(isDone == false) {
  // 		botClick();
  // 		if(playerTurnChanged) {
  // 			isDone = true;
  // 		}
  // 	}
  // }


}