// import { test, expect } from '@playwright/test';
// const { expect } = require('@playwright/test');

exports.PointComparisonPage = class PointComparisonPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageMainSectionTitle = page.getByRole("heading", {
      name: "QA Engineer Exercise",
    });
    this.pageSecondarySectionTitle = page.getByText("Point Comparison");
    this.mainDescriptionText = page.getByText(
      "In the input box below, fill in the points that you would like to be analyzed."
    );
    this.characteristicsTitle = page.getByRole("cell", {
      name: "Characteristics",
    });
    this.pointBTitle = page.getByRole("cell", { name: "Point A" });
    this.pointBTitle = page.getByRole("cell", { name: "Point B" });
    this.distanceText = page.getByRole("cell", {
      name: "Distance",
      exact: true,
    });
    this.closestText = page.getByRole("cell", { name: "Closest" });
    this.furthestText = page.getByRole("cell", { name: "Furthest" });
    this.averageDistanceText = page.getByRole("cell", {
      name: "Average distance between all points",
    });
    this.characteristicsText = page.getByText(
      "Characteristics for given input: 0,0,1,-3,8,7"
    );

    // page.getByText('Coordinate List').click();
    // page.getByPlaceholder('x,y x,y x,y').click();
    // page.getByText('Input is required.').click();
    // page.getByText('Coordinate ListInput is required.AnalyzeCharacteristics for given input: Charact').click();
  }
  async goto() {
    await this.page.goto(
      "http://qa-technical-exercise.s3-website-ap-southeast-2.amazonaws.com/"
    );
  }
};
