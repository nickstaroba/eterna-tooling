import "@testing-library/jest-dom/extend-expect";

import { getByText } from "@testing-library/dom";

import { Button } from "./Button";

describe("Button", () => {
  test("renders", () => {
    const testButton = Button({
      label: "Click!~",
    });
    expect(getByText(testButton, "Click!~")).toBeDefined();
  });
});
