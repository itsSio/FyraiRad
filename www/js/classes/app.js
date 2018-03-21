class App {


	constructor(){
		this.addEvents();
	}

	verifyPlayerNamesAndStart(p1name, p1type, p2name, p2type){
		if(p1name.length < 2 || p2name.length < 2 || p1name.length>12 || p2name.length>12){
			// alert("Ange namnen med minst två eller under 12 tecken!");
			$('p').removeClass('hidden');
			$('.invalid').text("Ange namnen med minst två eller under 12 tecken!");
			return;
		}
		let p1class = p1type == 'human' ? Player : Bot;
		let p2class = p2type == 'human' ? Player : Bot;
		let players = [
			new p1class(p1name, 'red'),
			new p2class(p2name, 'yellow')
		];

		$('.p1').text(players[0].name);
		$('.p2').text(players[1].name);
		new Game(players);
		

	}

	addEvents(){
		let that = this;
		$('.start-game-after-player-input').click(function(){
			that.verifyPlayerNamesAndStart(
				$('#player1').val(),
				$('[name="player1HumanOrBot"]:checked').val(),
				$('#player2').val(),
				$('[name="player2HumanOrBot"]:checked').val()
			);
		});
		
	}
}