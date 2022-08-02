import {
  FlipCard,
  FlipCardBack,
  FlipCardFront,
} from "../../../../components/FlipCard";
import { GameCard } from "../../interfaces";
import "./styles.scss";

interface Props {
  item: GameCard;
  onClickCard: (cardId: string) => void;
}

export const MemoryCard = (props: Props) => {
  const { item, onClickCard } = props;
  return (
    <span
      onClick={() => {
        onClickCard(item.id);
      }}
      data-testid="memoryCard"
    >
      <FlipCard
        customClassName="memory-card"
        open={item.status === "open" || item.status === "done"}
      >
        <FlipCardFront>
          <div data-testid="front" className="front"></div>
        </FlipCardFront>
        <FlipCardBack>
          <div
            data-testid="back"
            className="back"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        </FlipCardBack>
      </FlipCard>
    </span>
  );
};
