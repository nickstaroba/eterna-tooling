import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Button } from "./Button";

describe("Button", () => {
  test("renders", () => {
    render(<Button label={"Click!~"} />);
    expect(screen.getByText("Click!~")).toBeDefined();
  });
});
