import { CardBlock } from "./Card.styled";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const navigate = useNavigate();
  return (
    <CardBlock onClick={() => navigate(`/tasks/${props.id}`)}>
      <span>{props.name}</span>
    </CardBlock>
  );
};
