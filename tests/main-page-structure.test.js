const { test, expect } = require("@playwright/test");
const { PointComparisonPage } = require("../page-objects/point-comparison.js");

test.describe("basic page structure tests", () => {
  test("page link is correct", async ({ page }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(page).toHaveURL(
      "http://qa-technical-exercise.s3-website-ap-southeast-2.amazonaws.com/"
    );
  });

  test("page main section title is correct", async ({ page }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(pointComparison.pageMainSectionTitle).toHaveText(
      /QA Engineer Exercise/
    );
  });

  test("page secondary section title is correct", async ({ page }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(pointComparison.pageSecondarySectionTitle).toHaveText(
      /Point Comparison/
    );
  });
  test("page main description text is correct", async ({ page }) => {
    const pointComparison = new PointComparisonPage(page);
    await pointComparison.goto();
    await expect(pointComparison.mainDescriptionText).toHaveText(
      /In the input box below, fill in the points that you would like to be analyzed. The points must be separated by a space and the coordinates must be separated by a comma, e.g. /
    );
  });
});
