// src/__tests__/IncreaseButton.test.jsx
import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import IncreaseButton from "../components/buttons/increase";
import App from "../App";

describe("IncreaseButton", () => {
  test("renders", () => {
    render(<IncreaseButton />);
    expect(screen.getByText("Increase")).toBeDefined();
  });

  test("should increase count by 1 and then by 10", () => { 
    render(<App />);

    fireEvent.click(screen.getByText("Increase"));
    expect(screen.getByText("Current count: 1")).toBeDefined();

    fireEvent.click(screen.getByTestId("click10"));
    expect(screen.getByText("Current count: 11")).toBeDefined();
});

  test("should reset count to 0", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Increase"));
    expect(screen.getByText("Current count: 1")).toBeDefined();

    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("Current count: 0")).toBeDefined();
    });

    /* If the component is async and loads something external we can wait for it with findby */
    
        

});


    

