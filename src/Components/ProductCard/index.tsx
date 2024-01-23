import { CardContainer } from "./Card";

type CardProps = {
  href: string;
};

export const ProductCard = (img: CardProps) => {
  return (
    <CardContainer>
      <img src={img.href}></img>
    </CardContainer>
  );
};
