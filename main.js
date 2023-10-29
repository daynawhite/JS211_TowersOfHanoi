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



const isPossible = () => {
  if (stacks[startStack] == 0){
    console.log('Your chosen start stack is empty.  Try again!')
  } else {
    return true
  }
}

const isLegal = () => {
  if (stacks[!endStack].length ||
    (stacks[startStack][stacks[startStack].length-1]
  < stacks[endStack][stacks[endStack].length-1]) ){
    return true
  } else {
    console.log('illegal move. Try again!');
    return false
  }} 


const movePiece = () => {
  stacks[endStack].push(stacks[startStack].pop());
  printStacks()
}

const checkForWin = () => {
  if (stacks.b == '4,3,2,1' || stacks.c == '4,3,2,1') {
  console.log('CONGRATS!  You won in only ' +counter + ' moves!');
  return true
  } else {
    getPrompt();
    return false
}}

let counter = 0
const playGame = () => {
    counter ++   
  if (isLegal() && isPossible()) {
    isPossible()
    movePiece()
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

} else {

  getPrompt();

}
