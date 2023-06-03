# Test Cases

All test cases are run on the Point Comparison Tool webpage, found at this link:

- [Point Comparison Tool](http://qa-technical-exercise.s3-website-ap-southeast-2.amazonaws.com).

## Page Elements Tests

### Page Title section is displayed correctly

- Go to Point Comparison Tool page
- Confirm that the Page Title section is displayed
- Confirm that the Page Title section text is correct
  - Acceptance Criteria
    - Page Title section is displayed
    - Page Title section text is "QA Engineer Exercise"
  - Result: **PASS**

### Coordinate section is displayed correctly

- Go to Point Comparison Tool page
- Confirm that the Coordinate Title section is displayed
- Confirm that the Coordinate Title section text is correct
- Confirm that the Coordinate Information text is displayed
- Confirm that the Coordinate Information text is correct
  - Acceptance Criteria
    - Coordinate Title section is displayed
    - Coordinate Title section text is "Point Comparison"
    - Coordinate Information text is displayed
    - Coordinate Information text is "In the input box below, fill in the points that you would like to be analysed. The points must be separated by a space and the coordinates must be separated by a comma, e.g. 0,0 1,-3 8,7"
  - Result: **PASS**

### Coordinate input fields are displayed correctly

- Go to Point Comparison Tool page
- Confirm that Coordinate List label is displayed
- Confirm that Coordinate List label text is correct
- Confirm that Coordinate input field is displayed
- Confirm that Coordinate input field, placeholder text is correct (Additional to stated requirements - but nice to have)
- Confirm that Coordinate message is displayed
- Confirm that Coordinate message, on page load, is correct
  - Acceptance Criteria
    - Coordinate List label is displayed
    - Coordinate List label text is "Coordinate List"
    - Coordinate input field placeholder text is "x,y x,y x,y"
    - Coordinate message is "Please enter some coordinate points"
  - Result: **PASS**

### Analyze button is displayed correctly

- Go to Point Comparison Tool page
- Analyze Button is displayed
- Analyze Button text is correct
- Analyze Button is displayed but disabled until valid input is entered Coordinate input field
  - Acceptance Criteria
    - Analyze Button is displayed
    - Analyze Button text is "Analyze"
    - Analyze Button is disable on page load (no coordinate input)
  - Result: **PASS**

### Coordinate results should display after valid inputs have been analysed

- Go to Point Comparison Tool page
  - _(Run the following steps, before evaluating results)_
  - Enter the following coordinates in the Coordinate input field:
    - '0,1 1,5 5,2' (without quotes)
    - Click Analyze button
  - _Once results are successfully returned, check against Acceptance Criteria below_
  - Acceptance Criteria
    - Valid input can be successfully entered in Coordinate input field
    - Analyze button successful becomes enabled on valid input added
    - Analyze button can successful be clicked
    - Below the Analyze button the 'Results' section is displayed correctly
    - 'Results' section contains the following areas
      - Table Headers: "Characteristics", "Point A", "Point B", "Distance"
      - Table Rows: "Closest", "Furthest", "Average distance between all points"
      - Below 'Results' table contains area with inputs used for the analysing
  - Result: **PASS**

## Coordinate Input Tests

### Coordinate input field only accepts correct input

- Go to Point Comparison Tool page
  - _(Run the following steps, before evaluating results)_
  - Enter each of the following coordinates (without quotes) in the Coordinate input field and confirm related Acceptance Criteria:
    - '0,1 1,5 5,2' - 2 pair correct input
    - '0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2' - 5 pairs correct input
    - '0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2' - 10 pairs correct input
    - '0,1 A,5 B,2' - alphabet input
  - Click Analyze button
  - _Once results are successfully returned, check against Acceptance Criteria below_
  - Acceptance Criteria
    - "2 pair correct input": results are displayed correctly
    - "5 pair correct input": results are displayed correctly
    - "10 pair correct input": results are displayed correctly
  - Result: **PASS**

### Coordinate input field rejects incorrect input

- Go to Point Comparison Tool page
  - _(Run the following steps, before evaluating results)_
  - Enter each of the following coordinates (without quotes) in the Coordinate input field and confirm related Acceptance Criteria:
    - '0,1 A,5 B,2' - alphabet input
    - '0, 1 1, 5 5,2' - incorrect spaces, leading space
    - '0,1 1,5 5,2' - incorrect spaces, multiple spaces in coordinates
  - Click Analyze button
  - _Once results are successfully returned, check against Acceptance Criteria below_
  - Acceptance Criteria
    - "alphabet input": error message displayed, no results displayed
    - "incorrect spaces - leading": error message displayed, no results displayed
    - "incorrect spaces - multiple": error message displayed, no results displayed
- Result: **PASS**

### Coordinate input field only accepts minimum of 2 pairs of coordinates, correctly inputed

- Go to Point Comparison Tool page
  - _(Run the following steps, before evaluating results)_
  - Enter each of the following coordinates (without quotes) in the Coordinate input field and confirm related Acceptance Criteria:
    - '0,1 1,5 5,2': 2 pairs
    - '0,1 1,5 5,1 1,5 5,2': 3 pairs
    - '0,5': 1 pair
  - Click Analyze button
  - _Once results are successfully returned, check against Acceptance Criteria below_
  - Acceptance Criteria
    - 2 pairs: results are displayed correctly
    - 3 pairs: results are displayed correctly
    - 1 pairs: error message displayed, no results displayed
  - Result: **PASS**

### Coordinate input field only accepts maximum of 10 pairs of coordinates, correctly inputed

- Go to Point Comparison Tool page
  - _(Run the following steps, before evaluating results)_
    - Enter each of the following coordinates (without quotes) in the Coordinate input field and confirm related Acceptance Criteria:
    - '0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2': 10 pairs
    - '0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 0,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2': 20 pairs
    - '0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 0,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 0,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 0,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2 2,0 0,1 1,7 7,2 2,5 5,3 3,4 4,8 8,9 9,2': 30 pairs
    - Click Analyze button
  - Once results are successfully returned, check against Acceptance Criteria below
  - Acceptance Criteria
    - 10 pairs of valid coordinates are accepted
    - 20 pairs of valid coordinates are NOT accepted
    - 30 pairs of valid coordinates are NOT accepted
  - Result: **FAIL**

## Coordinate Results Tests

**The following test are run after valid Coordinate points have been analysed, except where noted**

### Coordinate points should be output to 1 decimal place and distances to 2 decimal places.

- Go to Point Comparison Tool page
  - _(Run the following steps, before evaluating results)_
    - Enter each of the following coordinates (without quotes) in the Coordinate input field and confirm related Acceptance Criteria:
    - '0,1 1,5 5,2': 2 pairs
    - '0,1.55 1.55,5.11 5.11,2': 2 pairs - 2 decimal places
    - '0,1.55555 1.55555,5.11111 5.11111,2': 2 pairs - 5 decimal places
    - Click Analyze button
  - Once results are successfully returned, check against Acceptance Criteria below
  - Acceptance Criteria
    - 2 pairs:
      - Result fields "Point A" and "Point B" display to 1 decimal place correctly
      - Result field "Distance" to 2 decimal place correctly
    - 2 pairs - 2 decimal places:
      - Result fields "Point A" and "Point B" display to 1 decimal place correctly
      - Result field "Distance" to 2 decimal place correctly
    - 2 pairs - 5 decimal places:
      - Result fields "Point A" and "Point B" display to 1 decimal place correctly
      - Result field "Distance" to 2 decimal place correctly
  - Result: **PASS**

### Find the closest pair of coordinate points and their distance apart.

- Go to Point Comparison Tool page
  - _(Run the following steps, before evaluating results)_
    - Enter each of the following coordinates (without quotes) in the Coordinate input field and confirm related Acceptance Criteria:
    - '0,1 1,1.5 5,5': 2 pairs
    - '0,1 1,1.5 5,5 0,0.9': 3 pairs\
    - Click Analyze button
  - Once results are successfully returned, check against Acceptance Criteria below
  - Acceptance Criteria
    - 2 pairs: Closest >> "Point A" = 0.0,1.0, "Point B" = 1.0,1.5, "Distance" = 1.12
    - 3 pairs: Closest >> "Point A" = 0.0,1.0, "Point B" = 0.0,0.9, "Distance" = 0.10
  - Result: **PASS**

### Find the pair of coordinate points which is furthest apart and their distance.

- Go to Point Comparison Tool page
  - _(Run the following steps, before evaluating results)_
    - Enter each of the following coordinates (without quotes) in the Coordinate input field and confirm related Acceptance Criteria:
    - '0,1 1,1.5 5,5': 2 pairs
    - '0,1 1,1.5 5,5 0,0.9': 3 pairs
    - Click Analyze button
  - Once results are successfully returned, check against Acceptance Criteria below
  - Acceptance Criteria
    - 2 pairs: Furthest >> "Point A" = 0.0,1.0, "Point B" = 5.0,5.0, "Distance" = 6.40
    - 3 pairs: Furthest >> "Point A" = 5.0,5.0, "Point B" = 0.0,0.9, "Distance" = 6.47
  - Result: **PASS**

### The average distance between every coordinate point pair.

- Go to Point Comparison Tool page
  - _(Run the following steps, before evaluating results)_
    - Enter each of the following coordinates (without quotes) in the Coordinate input field and confirm related Acceptance Criteria:
    - '0,1 1,1.5 5,5': 2 pairs
    - '0,1 1,1.5 5,5 0,0.9': 3 pairs
    - Click Analyze button
  - Once results are successfully returned, check against Acceptance Criteria below
  - Acceptance Criteria
    - 2 pairs: Average distance between all points = 4.28
    - 3 pairs: Average distance between all points = 3.43
  - Result: **PASS**
