# QA Technical Exercise

## Customer Request Information

A customer has requested a new tool that can compare a list of coordinate points. The tool must allow the user to input a list of coordinate point pairs and find the following:

- Find the closest pair of coordinate points and their distance apart.
- Find the pair of coordinate points which is furthest apart and their distance.
- The average distance between every coordinate point pair.

### Acceptance Criteria

- An input box will accept the points as comma separated pairs with each pair of coordinate point separated by a space, e.g. 0.0,1.0 2.0,3.0 4.0,5.0.
- If two pairs of points are equally close or equally far apart, then it doesn't matter which of the pairs is shown.
- If invalid input is provided, then an error message should be displayed.
- Coordinate points should be output to 1 decimal place and distances to 2 decimal places.
- The tool should be able to handle up to 10 pairs of coordinate points.

### Production Link

A link for the tool can be found here: [Point Comparison Tool](http://qa-technical-exercise.s3-website-ap-southeast-2.amazonaws.com)

### Deliverables

- Test cases to cover the tool's usage.
- Bug reports for any bugs, if any, which are uncovered.

## Test Specific Information

### Relevant Test Documentation and Information

Documentation for this project is located in the _documentation_ folder.
Inside that folder are the following relevant items are:

- request-more-information.md : Details additional items and information that should be discussed with the customer.
- bugs > list-of-bugs.md : Details discovered bugs in the project.
- test-cases > test-cases.md : Details the current test cases created and current status of initial manual test run.

### Test Automation Specific Information

Test Automation Framework used is: **Playwright**
More information about it can be found here: [Playwright](https://playwright.dev/)

Currently the Test Automation has been setup with a base Page Object Model (POM) and initial basic page tests. As the project progresses more tests would be added to the suites.

To use run the tests, please clone this repository and install the necessary NodeJS packages with the following command:

- "npm install"

After that the following commands can be used:

- _"npm test"_ : Runs the main automated tests.
- _"npm run codegen"_ : This will load up Playwright utility to help generate Page Object Models for tests (note some additional documentation on this process would be needed).
- _"npm run report"_: Runs local server to display last results from automated tests.
