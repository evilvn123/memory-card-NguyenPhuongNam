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
      className={`flip-card ${customClassName ? customClassName : ""}`}
      style={customStyle}
    >
      <div className={`flip-card-inner ${open ? "open" : ""}`}>{children}</div>
    </div>
  );
};

export const FlipCardFront = ({ children }: PropsWithChildren) => {
  return <div className="flip-card-front">{children}</div>;
};

export const FlipCardBack = ({ children }: PropsWithChildren) => {
  return <div className="flip-card-back">{children}</div>;
};
