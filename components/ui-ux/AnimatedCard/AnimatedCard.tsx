import { AnimatedCardProps } from "../types";
import "./AnimatedCard.css";

export const AnimatedCard = ({ image, color }: AnimatedCardProps) => {
  return (
    <div className="animated-card">
      <img className="animated-card-image" src={image} />
      <div className={`animated-card-box bg-${color}`} />
    </div>
  );
};

export default AnimatedCard;
