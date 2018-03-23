$(document).ready(async function(){
  console.log('Loaded');

  let name1 = 'Matte';
  let player1 = new Player(name1,'Red');

  let createHighscoreList=[
    {player: player1, drag: 10}
  ];

  JSON._save('savedList.json', createHighscoreList);
  let highscoreList = await loadScore();
  setHighscore(highscoreList);

});

async function loadScore(){
  let highscoreList = await JSON._load('savedList.json');
  console.log("test" + highscoreList[0].player.name + " testarn " + highscoreList[0].drag);
  return highscoreList;
}

function setHighscore(a){
  
  $('.namn').append('<span>'+(a[0].player.name)+'</span>');
  $('.drag').append('<span>'+(a[0].drag)+'</span>');
}
