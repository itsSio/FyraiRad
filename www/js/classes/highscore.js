$(document).ready(async function(){

  //Console log for debugging
  console.log('Loaded');


//Temporary code until we've added a function that keeps tracks on the winning player

  // let name1 = 'Johan';
  // let player1 = new Player(name1,'Red');
  // let player2 = new Player('Joel','Yellow');
  // let player3 = new Player('Sergei','Red');
  // let player4 = new Player('Sergei','Red');
  // let player5 = new Player('Sergei','Red');
  // let player6 = new Player('Sergei','Red');
  // let player7 = new Player('Sergei','Red');
  // let player8 = new Player('Sergei','Red');
  // let player9 = new Player('Sergei','Red');
  // let player10 = new Player('Sergei','Red');
  // let player11 = new Player('Sergei','Red');
  //
  // let createHighscoreList=[
  //   {player: player1, drag: 10},
  //   {player: player2, drag: 11},
  //   {player: player3, drag: 12},
  //   {player: player4, drag: 12},
  //   {player: player5, drag: 12},
  //   {player: player6, drag: 12},
  //   {player: player7, drag: 12},
  //   {player: player8, drag: 12},
  //   {player: player9, drag: 12},
  //   {player: player10, drag: 12},
  //   {player: player11, drag: 12}
  //
  // ];
  //
  // Below is how we saved highscorelist from the start
  // JSON._save('savedList.json', createHighscoreList);


  //Create variable that gets the returned value from loadScore (In this case the highscoreList)
  let highscoreList = await loadScore();
  //Adding highscoreList as an argument to setHighscore
  setHighscore(highscoreList);

});
// Creating a function that will load the score, sort it and the splice it
async function loadScore(){
  // Creating a variable that loads savedList.json (That we saved earlier)
  let highscoreList = await JSON._load('savedList.json');
  // Console log for debugging purposes
  console.log("test" + highscoreList[0].player.name + " testarn " + highscoreList[0].drag);
  //Function that sorts the highscore list based on lowest score
  highscoreList.sort(function(a,b){
  //if a.drag is higher than b.drag then switch place in array. Repeated for the entire array
    return a.drag > b.drag ? 1 : -1;
  });
  //Cuts the list off at 10 players and saves the list again
  highscoreList.splice(10);
  JSON._save('savedList.json', highscoreList);
  //Return the list
  return highscoreList;
}

//Creating a function that will set the highscore on the page
//highscoreList becomes list
function setHighscore(list){
  //More console log for debugging
  console.log(list.length);
  //Creates a for loop that will loop x amount of times, x is the length of our highscoreList array
    for(let i=0;i<list.length;i++){
      //Appends a span containing the class display:block (Bootstrap) and name of the player.
      $('.namn').append('<span class=d-block>'+(list[i].player.name)+'</span>');
      //Appends a span containing the same display class as well as the amount of "drag" the player had
      $('.drag').append('<span class=d-block>'+(list[i].drag)+'</span>');
    }

}
