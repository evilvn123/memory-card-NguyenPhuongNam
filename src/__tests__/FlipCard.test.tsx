import { cleanup, render, screen } from "@testing-library/react";
import { FlipCard, FlipCardBack, FlipCardFront } from "../components/FlipCard";

afterEach(cleanup);

it("Render FlipCard with open true", () => {
  render(<FlipCard open={true} />);
  expect(screen.getByTestId("flip-card")).toBeInTheDocument();
  expect(screen.getByTestId("flip-card-inner")).toBeInTheDocument();
  expect(screen.getByTestId("flip-card-inner")).toHaveClass("open");
});

it("Render FlipCard with open false", () => {
  render(<FlipCard open={false} />);
  expect(screen.getByTestId("flip-card")).toBeInTheDocument();
  expect(screen.getByTestId("flip-card-inner")).toBeInTheDocument();
  expect(screen.getByTestId("flip-card-inner")).not.toHaveClass("open");
});

it("FlipCard have customClassName", () => {
  render(<FlipCard open={false} customClassName="customClassName" />);
  expect(screen.getByTestId("flip-card")).toHaveClass("customClassName");
});

it("FlipCard have customStyle", () => {
  render(<FlipCard open={false} customStyle={{ background: "#000000" }} />);
  expect(screen.getByTestId("flip-card")).toHaveStyle({
    background: "#000000",
  });
});

it("FlipCardFront render", () => {
  render(<FlipCardFront />);
  expect(screen.getByTestId("flip-card-front")).toBeInTheDocument();
});

it("FlipCardBack render", () => {
  render(<FlipCardBack />);
  expect(screen.getByTestId("flip-card-back")).toBeInTheDocument();
});