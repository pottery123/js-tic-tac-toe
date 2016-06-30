#what constitutes a turn?


-determine player turn
-select a space
-space available
-space advantageous
-claim space using player identifier
-check win/loss/draw state
  -what is a win
  -what is a draw
  -what is a loss
  -communicate outcome
  -continue play



1: get board working
    -HTML
    -CSS
    -JavaScritp
    -JQ



  2: every time a player presses the button the turn  increments by one
      if counter is a even number that is one turn
      if counter is a odd number that is a different turn

      var player_1_score if counter is even, player 1 score starts at zero
      var player_2_score if counter is odd, player 2 score starts at zero


  3: chart key value pairs correspond to buttons
      var chart = {
        button1 : 1
        button2 : 2
        button3 : 3
        button4 : 4
      }

  4: when player clicks the number they picked is pushed into an array
      when counter == 9 turns are over
      the player who wins has the combination of numbers in the right order
        ex. player one has won their array looks like this [1,2,3]
        player two has not one their array looks like this [4,7,8]
