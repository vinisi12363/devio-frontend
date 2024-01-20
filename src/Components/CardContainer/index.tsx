import { CardContainer } from "./CardContainer";
import { ProductCard } from "../ProductCard";
import { Title } from "../Title";
import HambuguerImg from "../../assets/hamburguer.png";
import RefrigeranteImg from "../../assets/latinhas.png";
import BatataImg from "../../assets/batata-frita.png";
import PizzaImg from "../../assets/pizza1.png";


export const CardContainerArea = () => {

    return(
        <CardContainer>
            <div>   
                <ProductCard  href={HambuguerImg}></ProductCard>
                 <div className="productTitle">
                    <Title text="Hamburger" textSize ={"25"}></Title>
                 </div>
                </div>
               
            <div>
                <ProductCard  href={BatataImg}></ProductCard>
                <Title text="Batata frita" textSize ={"25"}></Title>
            </div>
         

            <div>
                <ProductCard  href= {PizzaImg}></ProductCard>
                <Title text="Pizza" textSize ={"25"}></Title>
            </div>
         

            <div>
                <ProductCard  href={RefrigeranteImg}></ProductCard>
                <Title text="Refrigerante" textSize ={"25"}></Title>
            </div>
         
        </CardContainer>
    );
}