import { CardContainer } from "./CardContainer";
import { ProductCard } from "../ProductCard";
import { Title } from "../Title";
import HambuguerImg from "../../assets/hamburguer.png";
import RefrigeranteImg from "../../assets/latinhas.png";
import PizzaImg from "../../assets/pizza1.png";
import { useContextCategory } from "../../Contexts/CategoryContext";

export const CardContainerArea = () => {
  const { chooseCategory } = useContextCategory();

  return (
    <CardContainer>
      <div className="productCardContainer"
        onClick={() => {
          chooseCategory("HamburguerPng");
        }}
      >
        <ProductCard href={HambuguerImg}></ProductCard>
        <div className="productTitle">
          <Title text="Hamburguer" textSize={"25"}></Title>
        </div>
      </div>
      <div
        onClick={() => {
          chooseCategory("PizzaPng");
        }}
      >
        <ProductCard href={PizzaImg}></ProductCard>
        <div className="productTitle">
          <Title text="Pizza" textSize={"25"}></Title>
        </div>
       
      </div>

      <div
        onClick={() => {
          chooseCategory("RefrigerantePng");
        }}
      >
        <ProductCard href={RefrigeranteImg}></ProductCard>
        <div className="productTitle">
        <Title text="Refrigerante" textSize={"25"}></Title>
        </div>
        
      </div>
    </CardContainer>
  );
};
