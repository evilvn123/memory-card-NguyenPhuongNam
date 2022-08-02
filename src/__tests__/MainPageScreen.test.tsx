import { render, screen } from "@testing-library/react";
import { MainPageScreen } from "../modules/main";
import { initGameBoard } from "../modules/main/helpers";

it("Render MainPage", () => {
  render(<MainPageScreen />);
  expect(initGameBoard().length).toBeGreaterThan(0);
  expect(initGameBoard().length % 2).toEqual(0);
  expect(screen.queryAllByTestId("memoryCard").length).toEqual(
    initGameBoard().length
  );
});
