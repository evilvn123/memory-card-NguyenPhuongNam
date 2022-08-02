import { MemoryCard, GameCard } from "../..";
import "./styles.scss";
import _ from "lodash";
import { useEffect, useState } from "react";
import { initGameBoard } from "../../helpers";

export const MainPageScreen = () => {
  const [boardData, setBoardData] = useState<GameCard[]>(initGameBoard());
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  const handleClickCard = (cardId: string) => {
    const currentOpenCards = boardData.filter(
      (card: GameCard) => card.status === "open"
    );

    if (currentOpenCards.length < 2) {
      setBoardData(
        boardData.map((card: GameCard) => {
          if (card.id === cardId && card.status === "close")
            return { ...card, status: "open" };
          return card;
        })
      );
    }
  };

  useEffect(() => {
    if (_.every(boardData, (card: GameCard) => card.status === "done")) {
      setGameFinished(true);
      return;
    }

    const [firstOpenCard, secondOpenCard] = boardData.filter(
      (card: GameCard) => card.status === "open"
    );

    if (!firstOpenCard || !secondOpenCard) return;

    const isOpenedCardsMatch =
      firstOpenCard.cardName === secondOpenCard.cardName;

    setTimeout(() => {
      setBoardData(
        boardData.map((card: GameCard) => {
          if (card.status === "open")
            return { ...card, status: isOpenedCardsMatch ? "done" : "close" };
          return card;
        })
      );
    }, 1000);
  }, [boardData]);

  const playAgain = () => {
    setBoardData(initGameBoard());
    setGameFinished(false);
  };

  return (
    <div className="main-page-screen">
      <div className="message">
        {gameFinished ? (
          <>
            You won! <button onClick={playAgain}>Play Again</button>
          </>
        ) : (
          <>MEMORY GAME</>
        )}
      </div>

      <div className="cards">
        {boardData.map((card: GameCard) => {
          return (
            <MemoryCard
              key={card.id}
              item={card}
              onClickCard={handleClickCard}
            />
          );
        })}
      </div>
    </div>
  );
};
