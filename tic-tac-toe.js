function TicTacToe(callback) {
  this.turn = 0
  this.callback = callback

  this.turn = function(){
    this.turn += 1

  }
}

TicTacToe.prototype.turn = function(){
}

exports.TicTacToe



$(document).ready( function() {
var TicTacToe = new TicTacToe()


  $("button.square_1").on('click', function(event){
    console.log(this.turn)
  })

  $("button.square_2").on('click', function(event){
    console.log(event, "yes2")
  })

  $("button.square_3").on('click', function(event){
    console.log(event, "yes3")
  })

  $("button.square_4").on('click', function(event){
    console.log(event, "yes4")
  })

  $("button.square_5").on('click', function(event){
    console.log(event, "yes5")
  })

  $("button.square_6").on('click', function(event){
    console.log(event, "yes6")
  })

  $("button.square_7").on('click', function(event){
    console.log(event, "yes7")
  })

  $("button.square_8").on('click', function(event){
    console.log(event, "yes8")
  })

  $("button.square_9").on('click', function(event){
    console.log(event, "yes9")
  })


})
