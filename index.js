
const topC = document.getElementById('top-c')
const middleB = document.getElementById('middle-b')
const bottomA = document.getElementById('bottom-a')

let stone = null
let startRow = null
let endRowElement = null
let moveCount = 0

// const startGame = () => {
//   let startStuff = document.getElementById('instructions')
//   startStuff.style.display = "none"
// }
function startGame() {
  let x = document.getElementById("instructions");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const selectRow = (row) => {
  const currentRow = row.getAttribute("id")
  if (!stone) {
    pickUpStone(row.id)
} else {dropStone(row.id)
}}

const isPossible = (row) => {
  if (row.childElementCount == 0){
    return false
  } else {
    return true
  }
}

function pickUpStone(row) {
let currentRow =  document.getElementById(row)
if (isPossible(currentRow)) {
  startRow = row
  stone = currentRow.lastElementChild
 currentRow.removeChild(stone);
} else {
  alert('Oops! That row is empty.  Choose a row containing at least one block.')
}
}

const isLegal = (endRow) => {
  endRowElement = document.getElementById(endRow)

  if (endRowElement.firstElementChild) {
    let endPiece = endRowElement.lastElementChild
    let idOfStone = stone.getAttribute('id')
    let idOfEndPiece = endPiece.getAttribute('id')
    if (Number(idOfStone) < Number(idOfEndPiece)) {
      return true
    } else {
      return false
  }}
  else {
    return true
  }
} 

const reset = () => {
  let rowToClear = document.getElementById('top-row-c')
  let rowToBuild = document.getElementById('bottom-row-a')
  moveCount = 0
  while (rowToClear.childElementCount !== 0) {
    let stoneToReset = rowToClear.firstElementChild
    rowToBuild.appendChild(stoneToReset)
    stoneToReset = rowToBuild.lastElementChild
}
}


const checkForWin = () => {
  let topRow = document.getElementById('top-row-c')
  if (topRow.childElementCount === 4) {
    // setTimeout(function() { alert(`Player ${currentMarker} won!`); }, 1);
    setTimeout(function() { alert('Congratulations! You won in only ' + moveCount + ' moves! Click OK to play again.'); }, 1);
    reset()
    return true
  }
   else {
    return false
}}

const dropStone = (endRow) => {
  if (isLegal(endRow)) {
  let currentRow =  document.getElementById(endRow)
  currentRow.appendChild(stone)
  } else {
    let previousRow = document.getElementById(startRow)
    previousRow.appendChild(stone)
    alert('Illegal Move! Try again.')
  }
  moveCount++
  console.log(moveCount)
  stone = null
  checkForWin()
}