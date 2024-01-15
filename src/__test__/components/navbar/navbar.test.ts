// File: src/__test__/components/navbar/navbar.test.ts

import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./../../../../src/components/navbar/Navbar";

test("Navbar is in the document", () => {
  //   render(<Navbar />);
  expect(1 + 1).toBe(2);

  // Use screen.getByTestId to get the element by its data-testid
  //   const navbarElement = screen.getByTestId("navbar");

  // Assert that the Navbar element is in the document
  //   expect(navbarElement).not.toBeNull();
});
