class Game {

	constructor(players){
		this.players = players;
		// let each player now about the game
		for(let player of players){
			player.game = this;
		}
    $('.input-forms').hide();
    $('.game-page').show();
        console.log("CREATED game")
		this.board = new Board();
	}


}