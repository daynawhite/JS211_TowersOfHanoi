'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// let startStack = ''
// let endStack = ''



const isPossible = (startStack, endStack) => {
  if (stacks[startStack] == 0){
    console.log('Your chosen start stack is empty.  Try again!')
    return false
  } else {
    return true
  }
}

const isLegal = (startStack, endStack) => {
  if (!stacks[endStack].length ||
    (stacks[startStack][stacks[startStack].length-1]
  < stacks[endStack][stacks[endStack].length-1]) ){
    return true
  } else {
    console.log('illegal move. Try again!');
    return false
  }} 


const movePiece = (startStack, endStack) => {
  let piece = stacks[startStack].pop()
  // stacks[endStack].push(stacks[startStack].pop());
  stacks[endStack].push(piece)
}

const checkForWin = () => {
  if ((stacks.b.length == 4) || (stacks.c.length == 4)) {
  console.log('CONGRATS!  You won in only ' +counter + ' moves!');
  return true
  } else {
    // getPrompt();
    return false
}}

let counter = 0
const playGame = (startStack, endStack) => {
    counter ++   
  if (isLegal(startStack, endStack) && isPossible()) {
    isPossible(startStack, endStack)
    movePiece(startStack, endStack)
    checkForWin()
  }
}

// playGame(startStack,endStack)

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      playGame(startStack, endStack);
      getPrompt();
    });
  });
}


// Tests

if (typeof describe === 'function') {

  describe('#playGame()', () => {
    it('should be able to move a block', () => {
      playGame('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

  // My tests:
  describe('#isPossible()', () => {
    it('should alert user if chosen move is not possible due to empty starting array', () => {
      stacks = {
        a: [],
        b: [3, 2],
        c: [4, 1]
      };
      assert.equal(isPossible('a', 'b'), false)
      });
    it('should allow a move that is possible', () => {
      stacks = {
        a: [],
        b: [3, 2],
        c: [4, 1]
      };
      assert.equal(isPossible('b', 'a'), true)
      })
    })
    describe('#checkForWin()', () => {
      it('should detect a win', () => {
        stacks = { a: [], b: [], c: [4, 3, 2, 1] };
        assert.equal(checkForWin(), true);
        stacks = { a: [4, 3, 2], b: [], c: [1] };
        assert.equal(checkForWin(), false);
      });
    });
    

  

   } else {

  getPrompt();

}
