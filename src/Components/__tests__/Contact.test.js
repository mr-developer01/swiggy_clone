import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should Load Contact Us Component", () => {
    render(<Contact />)
    // const heading = screen.getByRole("heading");
    const heading = screen.getByText("Hello Contact Page!");

    expect(heading).toBeInTheDocument();
})

test("Should Load Input Enter Email Contact Us Component", () => {
    render(<Contact />)
    // const heading = screen.getByRole("heading");
    const heading = screen.getByPlaceholderText("Enter Email");

    expect(heading).toBeInTheDocument();
})