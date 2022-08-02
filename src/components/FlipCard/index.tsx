import { CSSProperties, PropsWithChildren } from "react";
import "./styles.scss";

interface Props {
  customStyle?: CSSProperties;
  customClassName?: string;
  open: boolean;
}

export const FlipCard = ({
  children,
  customStyle,
  open,
  customClassName,
}: PropsWithChildren<Props>) => {
  return (
    <div
      data-testid="flip-card"
      className={`flip-card ${customClassName ? customClassName : ""}`}
      style={customStyle}
    >
      <div
        data-testid="flip-card-inner"
        className={`flip-card-inner ${open ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export const FlipCardFront = ({ children }: PropsWithChildren) => {
  return (
    <div data-testid="flip-card-front" className="flip-card-front">
      {children}
    </div>
  );
};

export const FlipCardBack = ({ children }: PropsWithChildren) => {
  return (
    <div data-testid="flip-card-back" className="flip-card-back">
      {children}
    </div>
  );
};
