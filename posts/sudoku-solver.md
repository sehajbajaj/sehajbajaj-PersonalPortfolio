---
title: "Sudoku Solver"
publishedAt: "2021-12-10"
modifiedAt: "2021-12-10"
author: "Sehajpreet kaur"
summary: "A Sudoku Solver based on the idea of Backtracking - a recursive algorithm."
tags: ["html", "css", "javascript"]
---

# Introduction

The popular Japanese puzzle game Sudoku is based on the logical placement of numbers.

The goal of Sudoku is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9.

### Naive Approach

In naive approach, the algorithm fills in the empty cells without any logic and later checks whether it was a valid placement. This can be highly inefficient. An optimization to this would be using Backtracking algorithm.

### Backtracking

Backtracking is a general algorithm for finding all (or some) solutions to th eproblem that incrementally builds candidates to the solution. As soon as it determines that a candidate can not possibly be the solution to the broblem, it backtracks.

**Constraints**

- Each row has unique numbers from 1-9 or empty spaces.
- Each colums has unique numbers from 1-9 or empty spaces.
- Each sub-grid og 3x3 has the numbers 1-9 or empty spaces.

## Technologies and API Used:

- HTML
- CSS
- Javascript
- Sugoku API

#### New Board

<img
  src="/sudoku.jpeg"
  width="100%"
  height="100%"
  alt="sudoku"
  title="sudoku"
/>

#### Solved

<img
  src="/sudoku2.jpeg"
  width="100%"
  height="100%"
  alt="sudoku"
  title="sudoku"
/>

### **Initialising the Board**

```html:index.html
    <div id="container"></div>
```

Initialised the sudoku board with id **container**

### **Fetching the Data on click - 'Get New Puzzle'**

```js:main.js
function changeBoard(board) {
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            if(board[i][j] != 0) {

                arr[i][j].innerText = board[i][j]
            }
            else {

                arr[i][j].innerText = ''
            }
        }
    }
}

button.onclick = function () {
    var xhrRequest = new XMLHttpRequest()
    xhrRequest.onload = function () {
        var response = JSON.parse(xhrRequest.response)
        console.log(response)
        initializeTemp(temp)
        resetColor()

        board = response.board
        setTemp(board, temp)
        setColor(temp)
        changeBoard(board)
    }

    xhrRequest.open('get', 'https://sugoku.herokuapp.com/board?difficulty=easy')
    xhrRequest.send()
}
```

The moment the 'Get new puzzle' button is clicked, a request is made to Sugoku API for an easy level puzzle. On getting the response, a call to changeBoard() is made, which changes the board and generates a new puzzle. We also make a call to setColor() to enhance the baord.

### **Solving the puzzle on click - 'Solve'**

```js:main.js
function solveSudoku(board)
{
    solveSudokuHelper(board, 0, 0)
}

solve.onclick = function ()
{
    solveSudoku(board)
}
```

On clicking the 'Solve' button, solveSudoku() function is called. The solveSudoku function in turn calls solveSudokuHelper().
The solveSudokuHelper() function is the main function that checks for all the edge cases. It checks whether the entered number is valid for the current cell or not and fills the board accordingly.

```js:main.js
function solveSudokuHelper(board, r, c) {
    //base case
    if (r==9) {
        changeBoard(board);
        return true;
    }

    //other cases
    if (c==9) {
        return solveSudokuHelper(board, r+1, 0);
    }

    //pre-filled cell
    if (board[r][c] != 0) {
        return solveSudokuHelper(board, r, c+1);
    }

    for(var i = 1; i <= 9; i++) {

        if (isSafe(board, r, c, i)) {

            board[r][c] = i;
            var success = solveSudokuHelper(board, r, c+1);
            if (success == true) {
                return true;
            }
            board[r][c] = 0;
        }
    }
    return false;
}
```

Sudoku puzzle is solved!! 🎉

> ##### [Click here to visit the website](https://sehajbajaj.github.io/Sudoku-solve/)
>
> ##### [Click here to checkout the source code](https://github.com/sehajbajaj/Sudoku-solve)

#
