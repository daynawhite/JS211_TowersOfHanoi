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

const moveStone = () => {
  if (!stacks[startStack].length) {
    console.log('Your chosen start stack is empty.  Try again!');
    getPrompt()}
  else {
    let stone = stacks[startStack].pop;
    oopsCheck(stone,endStack)
  }
  }

const oopsCheck = () => {
  if (oops(stone,endStack)) {
    console.log("That's an illegal move!  Try again.");
    stacks[startStack].push(stone)
  }
  else if (isLegal(stone,endStack)) {
    stacks[endStack].push(stone)
  }
}

const oops = (stone, endStack) => {
  if (stone > stacks[endStack][length-1]) 
  //  or  **for GUI**  (mouse click occurs outside of stack elements)
{
    return true
  }
}

// For the purpose of the tests...
const isLegal = () => {
 if (!oops()) {
  return true
 }
}

const checkForWin = () => {

}

const playGame = (startStack, endStack) => {
  moveStone(startStack, endStack)
}






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
