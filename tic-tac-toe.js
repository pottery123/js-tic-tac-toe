function TicTacToe(callback) {
  this.turn = 0
  this.player_1_score = []
  this.player_2_score = []

  this.scores = [1,2,3,4,5,6,7,8,9]
  this.winnerArray = {
    a:[1,2,3],
    b:[4,5,6],
    c:[7,8,9],
    d:[1,4,7],
    e:[2,5,8],
    f:[3,6,9],
    g:[3,5,7],
    h:[1,5,9]

    }



}

TicTacToe.prototype.play = function(score){// all thing that happen when player plays
    this.turn += 1
  if(this.turn %2 == 0){
    var player2  = this.player_2_score.push(score)
    this.won()
  }else{

    var player1 =  this.player_1_score.push(score)
    this.won()
  }
}

TicTacToe.prototype.currentPlayer = function(){
  if(this.turn %2 == 0){
    return this.player_2_score
  }else{
    return this.player_1_score
  }
}


TicTacToe.prototype.won = function(){
  for (scoreArray in this.winnerArray){
    if(this.player_2_score.toString() === this.winnerArray[scoreArray].toString()){
      this.reset()
    }else if (this.player_1_score.toString() === this.winnerArray[scoreArray].toString()) {
      this.reset()
    }

  }
}

TicTacToe.prototype.reset = function(){
  this.turn = 0
  this.player_1_score = []
  this.player_2_score = []

}









TicTacToe.prototype.score1 = function(){
  return this.scores[0]
  }

TicTacToe.prototype.score2 = function(){
  return this.scores[1]
  }

TicTacToe.prototype.score3 = function(){
  return this.scores[2]
  }

TicTacToe.prototype.score4 = function(){
  return this.scores[3]
  }

TicTacToe.prototype.score5 = function(){
  return this.scores[4]
  }

TicTacToe.prototype.score6 = function(){
  return this.scores[5]
  }

TicTacToe.prototype.score7 = function(){
  return this.scores[6]
  }

TicTacToe.prototype.score8 = function(){
  return this.scores[7]
  }

TicTacToe.prototype.score9 = function(){
  return this.scores[8]
  }











$(document).ready( function() {

var ticTactoe = new TicTacToe()

  $("button.square_1").one('click', function(event){
    $(this).addClass('red');
  ticTactoe.play(ticTactoe.score1())

    console.log(ticTactoe.currentPlayer())
  })

  $("button.square_2").one('click', function(event){
      $(this).addClass('red');

    ticTactoe.play(ticTactoe.score2())

      console.log(ticTactoe.currentPlayer())

  })

  $("button.square_3").one('click', function(event){
    $(this).addClass('red');
    ticTactoe.play(ticTactoe.score3())

    console.log(ticTactoe.currentPlayer())
  })

  $("button.square_4").one('click', function(event){
    $(this).addClass('red');
    ticTactoe.play(ticTactoe.score4())

    console.log(ticTactoe.currentPlayer())
  })

  $("button.square_5").one('click', function(event){
    $(this).addClass('red');
    ticTactoe.play(ticTactoe.score5())

    console.log(ticTactoe.currentPlayer())
  })

  $("button.square_6").one('click', function(event){
    $(this).addClass('red');
  ticTactoe.play(ticTactoe.score6())

    console.log(ticTactoe.currentPlayer())
  })

  $("button.square_7").one('click', function(event){
    $(this).addClass('red');
    ticTactoe.play(ticTactoe.score7())

    console.log(ticTactoe.currentPlayer())
  })

  $("button.square_8").one('click', function(event){
    $(this).addClass('red');
    ticTactoe.play(ticTactoe.score8())

    console.log(ticTactoe.currentPlayer())
  })

  $("button.square_9").one('click', function(event){
    $(this).addClass('red');
    ticTactoe.play(ticTactoe.score9())

    console.log(ticTactoe.currentPlayer())

  })


})
