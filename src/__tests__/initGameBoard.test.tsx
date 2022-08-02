import { initGameBoard } from "../modules/main/helpers";

it("initGameBoard work", () => {
  const board = initGameBoard();
  expect(board.length).toEqual(18);
});
