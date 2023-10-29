<!-- Set up object cosisting of arrays a, b, and c.  The arrays will "hold" the stacking stones. -->
This is already done in the existing repo for main.js but not index.js

<!-- Show title, directions for game play, and a start button upon loading.   -->
Create html elements for this.  Use onload event for this.

<!-- User cannot click anywhere else if the Start or Play Again button is visible. -->
function: buttonVisible:
    if startButton is visible || playAgainButton is visible, 
    then unable to play

<!-- When start button or playAgain button is clicked, directions and buttons disappear, and game is functional. -->
Use onclick event (startButton) to hide game directions and button
Use onclick event (playAgain button) to reset game 

<!-- create a function "playGame" that allows user to play the game IF buttons are not present; embed game-playing functions within. -->
function: playGame
    set counter to zero;
    moveStone (includes oopsCheck)
    checkForWin

<!-- moveStone function picks up a stone, then either puts it back or places it in a different array, depending on results of oopsCheck -->
moveStone function: (Add one to the counter each time this function is called.)
    if startStack is empty 
    then console.log('Your chosen start stack is empty.  Try again!');
    getPrompt()
    else 
    let stone = stack[startStack].pop();
    call oopsCheck function
   
    For GUI:
        (onclick, call pickUpStone function (Use mouse click to remove the end stone from an array/element)
        onclick, call oopsCheck (to check for and react to illegal move, or else place the stone);)       

  
<!-- If user clicks to place a stone in a location that is not allowed, give an "Oops" alert, and return the stone to where it originated.-->
oopsCheck function: 
    if oops = true
        give "Oops, illegal move" alert;
        push stone to array where it came from;
    else placeStone 
        <!-- (Use mouse click to place the stone from pickUpStone function into a new array/element.) -->
        (onclick) push stone 0nto selected array

oops function:
    <!-- NOT allowed:
        placement next to a smaller stone;
        somewhere other than one of the colored area of an array's element
    the ONLY locations allowed:
        Must be placed within the colored area of an array's element;
        Alone or next to a larger stone  -->
    if stone > stack[endStack][array.length - 1], then true
    (FOR GUI:
     or if click location !== array element a b or c, then true)

 <!-- If a win is detected (all stones arranged 4,3,2,1 in array b or c), user is alerted (and maybe: counter + 4 is displayed as number of moves), and a "Play Again" button appears, which resets the game when clicked. -->
checkForWin function:
  if stacks b = [4,3,2,1], or c = [4,3,2,1]
    alert user "You won!  It took you ___ moves.";
    unhide play again button;
   else moveStone



