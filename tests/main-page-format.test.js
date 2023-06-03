const { test, expect } = require("@playwright/test");
const { PointComparisonPage } = require("../page-objects/point-comparison.js");

test.describe("point comparison page basic structure on page load displays correctly", () => {
  test("page link is correct", async ({ page }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(page).toHaveURL(
      "http://qa-technical-exercise.s3-website-ap-southeast-2.amazonaws.com/"
    );
  });

  test("page main section title displays 'QA Engineer Exercise' correctly", async ({
    page,
  }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(pointComparison.mainSectionTitle).toHaveText(
      /QA Engineer Exercise/
    );
  });

  test("point comparison section title displays 'Point Comparison' correctly", async ({
    page,
  }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(pointComparison.pointComparisonSectionTitle).toHaveText(
      /Point Comparison/
    );
  });

  test("point comparison section description text is correct", async ({
    page,
  }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(pointComparison.pointComparisonDescriptionText).toHaveText(
      /In the input box below, fill in the points that you would like to be analyzed. The points must be separated by a space and the coordinates must be separated by a comma, e.g. /
    );
  });

  test("coordinate input label is correct", async ({ page }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(pointComparison.coordinateListLabel).toHaveText(
      /Coordinate List/
    );
  });

  /**
   * Currently skipping test due to issues with locating "coordinateListField"
   *  with current Page Object Model.
   */
  test.skip("coordinate input field input placeholder text is correct", async ({
    page,
  }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(pointComparison.coordinateListField).toHaveText(/x,y x,y x,y/);
  });

  test("analyze button displays correctly", async ({ page }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();

    // Check to make sure Analyze button not enabled below valid input
    await expect(pointComparison.analyzeButton).not.toBeEnabled();
    await pointComparison.coordinateListField.fill("0,1 1,5 5,2");

    // Check to make sure Analyze button is now active
    await expect(pointComparison.analyzeButton).toBeEnabled();
    await expect(pointComparison.analyzeButton).toHaveText(/Analyze/);
  });
});
