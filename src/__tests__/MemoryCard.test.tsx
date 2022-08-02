import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { GameCard, MemoryCard } from "../modules/main";

afterEach(cleanup);

const item: GameCard = {
  image:
    "https://i.pinimg.com/originals/ae/a3/11/aea311b0b67d4ffc1cf160ad98f007e6.jpg",
  id: "1-0",
  status: "close",
  cardName: "1",
};

const onClickCard = jest.fn();

it("Render MemoryCard with sample item", () => {
  render(<MemoryCard item={item} onClickCard={onClickCard} />);
  expect(screen.getByTestId("flip-card")).toBeInTheDocument();
  expect(screen.getByTestId("flip-card-inner")).not.toHaveClass("open");
  expect(screen.getByTestId("front")).toBeInTheDocument();
  expect(screen.getByTestId("back")).toBeInTheDocument();
  expect(screen.getByTestId("back")).toHaveStyle(
    `backgroundImage: ${item.image}`
  );
  fireEvent.click(screen.getByTestId("memoryCard"));
  expect(onClickCard).toHaveBeenCalledTimes(1);
});

it("Rerender MemoryCard", () => {
  const { rerender } = render(
    <MemoryCard item={item} onClickCard={onClickCard} />
  );
  expect(screen.getByTestId("flip-card-inner")).not.toHaveClass("open");
  rerender(
    <MemoryCard item={{ ...item, status: "open" }} onClickCard={onClickCard} />
  );
  expect(screen.getByTestId("flip-card-inner")).toHaveClass("open");
  rerender(
    <MemoryCard item={{ ...item, status: "done" }} onClickCard={onClickCard} />
  );
  expect(screen.getByTestId("flip-card-inner")).toHaveClass("open");
});

it("Render MemoryCard with status open item", () => {
  render(
    <MemoryCard item={{ ...item, status: "open" }} onClickCard={onClickCard} />
  );
  expect(screen.getByTestId("flip-card-inner")).toHaveClass("open");
});

it("Render MemoryCard with status done item", () => {
  render(
    <MemoryCard item={{ ...item, status: "done" }} onClickCard={onClickCard} />
  );
  expect(screen.getByTestId("flip-card-inner")).toHaveClass("open");
});
