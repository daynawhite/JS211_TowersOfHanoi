
const topC = document.getElementById('top-c')
const middleB = document.getElementById('middle-b')
const bottomA = document.getElementById('bottom-a')

let stone = null
let startRow = null

const checkForWin = () => {
  // if ((stacks.b.length == 4) || (stacks.c.length == 4)) {
  // console.log('CONGRATS!  You won in only ' +counter + ' moves!');
  // return true
  } else {
    // getPrompt();
    return false
}}

const selectRow = (row) => {
  const currentRow = row.getAttribute("id")
  // console.log("Yay, we clicked a row", currentRow)
  // console.log("Here is the stone's id: ", row.lastElementChild.id)
  if (!stone) {
    pickUpStone(row.id)
} else {dropStone(row.id)
}}

function pickUpStone(row) {
let currentRow =  document.getElementById(row)
startRow = currentRow.id
console.log('startRow: ', startRow)
// ADD CODE HERE: if currentRow contains no children, Alert('Try another row')
  // let stone = row.lastChild
  // console.log('the stones id', stone)
 stone = currentRow.lastElementChild
 currentRow.removeChild(stone);
}

const isLegal = (endRow) => {
  // ADD CODE to check for clicks outside the rows
  let endRowElement = document.getElementById(endRow)

  if (endRowElement.firstElementChild) {
    console.log('endRow has blocks')
    let endPiece = endRowElement.lastElementChild
    let idOfStone = stone.getAttribute('id')
    let idOfEndPiece = endPiece.getAttribute('id')
    if (Number(idOfStone) < Number(idOfEndPiece)) {
      console.log('LEGAL')
      return true
    } else {
      console.log('illegal move. Try again!');
      return false
  }}
  else {
    console.log('endRow has no blocks')
    return true
  }
} 

const dropStone = (endRow) => {
  if (isLegal(endRow)) {
  let currentRow =  document.getElementById(endRow)

  currentRow.appendChild(stone)
  } else {
    let previousRow = document.getElementById(startRow)
    previousRow.appendChild(stone)
    alert('Illegal Move! Try again.')
  }
  stone = null
  checkForWin()
}

// document.getElementById('top-c').addEventListener(click, selectRow(row))
// document.getElementById('middle-b').addEventListener(click, selectRow(row))
// document.getElementById('bottom-a').addEventListener(click, selectRow(row))

// document.getElementById('4').addEventListener(click, selectRow(yellow4))
// document.getElementById('3').addEventListener(click, selectRow(red3))
// document.getElementById('2').addEventListener(click, pickUpStone(green2))
// document.getElementById('1').addEventListener(click, pickUpStone(blue1))

let counter = 0
const playGame = () => {
    counter ++   

  // if (isLegal(startStack, endStack) && isPossible()) {
  //   isPossible(startStack, endStack)
  //   movePiece(startStack, endStack)
  //   checkForWin()
  // }
}