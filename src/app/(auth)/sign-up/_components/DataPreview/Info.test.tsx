import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

import { Info } from "./Info";

describe("Info component", () => {
  test("renders label and value correctly", () => {
    const label = "Test Label";
    const value = "Test Value";

    render(<Info label={label} value={value} />);

    // Check if label and value are rendered correctly
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  // Add more tests as needed
});
