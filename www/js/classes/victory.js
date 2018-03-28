class Victory {

    constructor(players) { //i konstruktorn så tar vi in alla beroenden som vi har till resten av spelet: Vi behöver spelarna för att kunna förtydliga förlorarens nederlag, och fira vinnaren.
        this.players = players;  //Den här klassen (refereras via "this") har nu en variabel som heter "players",
    }



    victoryToPlayer(playerNumber) {
        let playerThatWon;
        let playerThatSucked;
        if (playerNumber === 1) {
            playerThatWon = this.players[0]; //array nollindexerad, så spelare 1 är på plats 0.
            playerThatSucked = this.players[1];
        } else {
            playerThatWon = this.players[1];
            playerThatSucked = this.players[0];
        }

        $('#victoryOrLoss').modal();

        $('.winner-name').text(playerThatWon.name);
        $('.sucker-name').text(playerThatSucked.name);


        $('.winner').css('background-color',playerThatWon.color);
        $('.sucker').css('background-color',playerThatSucked.color);
        $('#victory-audio').trigger('play');
    }
}