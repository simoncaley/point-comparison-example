/**
 * Main Page Object Model file for testing "Point Comparison Page"
 */

exports.PointComparisonPage = class PointComparisonPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.mainSectionTitle = page.getByRole("heading", {
      name: "QA Engineer Exercise",
    });
    this.pointComparisonSectionTitle = page.getByText("Point Comparison");
    this.pointComparisonDescriptionText = page.getByText(
      "In the input box below, fill in the points that you would like to be analyzed."
    );

    // Coordinate area componets
    this.coordinateListLabel = page.getByText("Coordinate List");
    this.coordinateListField = page.getByPlaceholder("x,y x,y x,y");
    this.analyzeButton = page.getByRole("button", { name: "Analyze" });

    // Results area componets
    this.characteristicsTitle = page.getByRole("cell", {
      name: "Characteristics",
    });
    this.pointBTitle = page.getByRole("cell", { name: "Point A" });
    this.pointBTitle = page.getByRole("cell", { name: "Point B" });
    this.distanceTitle = page.getByRole("cell", { name: "Distance" });
    this.closestText = page.getByRole("cell", { name: "Closest" });
    this.furthestText = page.getByRole("cell", { name: "Furthest" });
    this.averageDistanceText = page.getByRole("cell", {
      name: "Average distance between all points",
    });
    this.characteristicsText = page.getByText(
      "Characteristics for given input:"
    );
  }

  async goto() {
    await this.page.goto(
      "http://qa-technical-exercise.s3-website-ap-southeast-2.amazonaws.com/"
    );
  }
};
