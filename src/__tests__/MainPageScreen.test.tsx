import { render, screen } from "@testing-library/react";
import { MainPageScreen, MemoryCard } from "../modules/main";
import { initGameBoard } from "../modules/main/helpers";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("Render MainPage", () => {
  render(<MainPageScreen />);
  expect(initGameBoard().length).toBeGreaterThan(0);
  expect(initGameBoard().length % 2).toEqual(0);
  expect(screen.queryAllByTestId("memoryCard").length).toEqual(
    initGameBoard().length
  );
});

it("Render list MemoryCard", () => {
  const wrapper = enzyme.shallow(<MainPageScreen />);
  const gameBoard = initGameBoard();
  expect(wrapper.find(MemoryCard)).toHaveLength(gameBoard.length);
  const sampleCard = wrapper.find(MemoryCard).at(0);
  expect(sampleCard.prop("item").status === "close").toBeTruthy();
});
