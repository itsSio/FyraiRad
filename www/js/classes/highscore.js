class HighScoreList {

  constructor(){
    // Set the list to an empty array until it has loaded
    this.list = [];
    this.load();
  }

  async load(){
    this.list = await JSON._load('savedList').catch((e) => {
      // If no file then set the list to empty...
      // catch that error (so that the script continues to run)
    });
    // If the list is not defined set it to an empty array
    this.list = this.list || []
    this.render();
  }

  async add(winner, drag){
    // add the winner to the list
    this.list.push({name: winner.name, drag: drag});
    // sort the list with least number of drag on top
    this.list.sort(function(a,b){
      //if a.drag is higher than b.drag then switch place in array
      return a.drag > b.drag ? 1 : -1;
    });
    // only keep the top 10
    this.list = this.list.slice(0,10);
    // save the list
    await JSON._save('savedList', this.list)
    // rerender
    this.render();
  }

  render(){
    // If we are not on the Highscore page then do nothing
    if(!location.href.toLowerCase().includes("highscore")){ return; }
    // Otherwise render - start with emptying the namn and drag columns
    $('.namn, .drag').empty();
    // Render each player in the list
    for(let player of this.list){
      //Appends a span containing the class display:block (Bootstrap) and name of the player.
      $('.namn').append('<span class="d-block">'+(player.name)+'</span>');
      //Appends a span containing the same display class as well as the amount of "drag" the player had
      $('.drag').append('<span class="d-block">'+(player.drag)+'</span>');
    }
  }

}

// Create an instance of HighScoreList and load the HiScore
let theHighScoreList = new HighScoreList();