class Victory {

    constructor(players) { //i konstruktorn så tar vi in alla beroenden som vi har till resten av spelet: Vi behöver spelarna för att kunna förtydliga förlorarens nederlag, och fira vinnaren.
        this.players = players;  //Den här klassen (refereras via "this") har nu en variabel som heter "players",
    }


    victoryToPlayer(playerNo) {
        let playerThatWon;
        let playerThatSucked;
        if (playerNumber === 1) {
            playerThatWon = players[0]; //array nollindexerad, så spelare 1 är på plats 0.
            playerThatSucked = players[1];
        } else {
            playerThatWon = players[1];
            playerThatSucked = players[0];
        }

        $('body').text('');
        $('body').css('background-color', playerThatWon.color);
        $('body').append('<h1>VINNARE: '+ playerThatWon.name +'</h1>');

        $('body').append('<h1>FÖLJANDE SPELARE SÖG: '+ playerThatSucked.name +'</h1>');


    }
}