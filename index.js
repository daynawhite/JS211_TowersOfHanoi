

let stone = null

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.


const topC = document.getElementById('top-c')
const middleB = document.getElementById('middle-b')
const bottomA = document.getElementById('bottom-a')


const selectRow = (row) => {

  const currentRow = row.getAttribute("id")
  
  console.log("Yay, we clicked a row", currentRow)
  // console.log("Here is the stone's id: ", row.lastElementChild.id)

  pickUpStone(currentRow)
} 

function pickUpStone(currentRow) {
let element =  document.getElementById(currentRow)
  // let stone = row.lastChild
  // console.log('the stones id', stone)
 element.removeChild(element.lastElementChild);
}

document.getElementById('top-c').addEventListener(click, pickUpStone(topC))
document.getElementById('middle-b').addEventListener(click, pickUpStone(middleB))
document.getElementById('bottom-a').addEventListener(click, pickUpStone(bottomA))

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...


// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID, stone) => {
  document.getElementById(rowID).appendChild(stone)
  stone = null
}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

