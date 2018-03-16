class Game {

	constructor(players){
		this.players = players;
		// let each player now about the game
		for(let player of players){
			player.game = this;
		}
		this.board = new Board();
    
	}


}