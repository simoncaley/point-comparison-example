# List of Bugs

All listed bugs are on the Point Comparison Tool webpage, found at this link:

- [Point Comparison Tool](http://qa-technical-exercise.s3-website-ap-southeast-2.amazonaws.com).

# Bugs

## Test Case - 'Coordinate input field only accepts maximum of 10 pairs of coordinates, correctly inputed'

- Run the test case with more than 10 valid coordinate pairs (11 + pairs)
- The page will allow more than 10 valid coordinate pairs to be successfully analysed.

**Page should only handle up to 10 valid coordinate pairs and display a relevant error message than too many coordinate pairs have been entered, and "Analyze" button should stay disabled**

_Developer Note:_
In file: "main.6c73f7fa.js > Strategies > index.ts" there is the following note:

- "// brute force method since the number of pairs is only up to 10, so this would be o(n^2)"
  Which would suggest that there should only be 10 pairs maximum accepted.

## Test Case - 'Coordinate input field only accepts maximum of 10 pairs of coordinates, correctly inputed'

_(Only applicable, if 30 valid pairs is an accepted format)_

- Run the test case with 30 valid coordinate pairs
  - example: '0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 0,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 0,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 0,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2'
- When results display, format of results overflows the display boundaries of the results area.

**Page should handle formatting of more than 10 pairs of valid coordinates**
