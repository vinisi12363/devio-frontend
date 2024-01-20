import { MainContainer } from "../../Components/MainContainer";
import { PageBody } from "../../Components/MainContainer/Body";
import Header from "../../Components/Header";
import { SearchArea } from "../../Components/SearchArea";
import { CategoriesSection } from "../../Components/CategoriesSection/index";
import { Title } from "../../Components/Title";
import { Subtitle } from "../../Components/Subtitle";
import { CardContainerArea } from "../../Components/CardContainer";
import { ProductsAreaContainer } from "../../Components/ProductsAreaContainer";
import { ShowCardContainer } from "../../Components/ProductCard/Card";
import HamburgerPng from "../../assets/hamburguer.png";
import RefrigeranteImg from "../../assets/latinhas.png";
import { Footer } from "../../Components/Footer";
import { ProductsApi } from "../../Api/ProductsApi";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const result = await ProductsApi.getAllProducts();
                if(result)
                    setProducts(result);
            } catch (error) {
                console.log(error);
            }
           
        }
        fetchProducts();
    }, []);
 

    console.log(products);

  return (
    <MainContainer>
      <PageBody>

        <Header></Header>
        <SearchArea></SearchArea>

        <CategoriesSection>
          <Title text={"Categorias"} textSize="30"></Title>
          <Subtitle textSize="20" text={"Navegue por categoria"}></Subtitle>
          <CardContainerArea></CardContainerArea>
        </CategoriesSection>
        
        <ProductsAreaContainer>
          <div className="ProductsTextArea">
            <Title text={"Produtos"} textSize="30"></Title>
            <Subtitle
              textSize="20"
              text={"Selecione um produto para adicionar ao seu pedido"}
            ></Subtitle>
          </div>
          <div className="showCardsArea">
            <ShowCardContainer>
              <div className="ProductImageArea">
                <img src={HamburgerPng}></img>
              </div>
              <div className="ProductInfoArea">
                <Title text="Smash da casa" textSize="20"></Title>
                <Subtitle text="200gr de carne" textSize="20"></Subtitle>
                <Title text="R$35,00" textSize="20"></Title>
              </div>
            </ShowCardContainer>
            <ShowCardContainer>
              <div className="ProductImageArea">
                <img src={RefrigeranteImg}></img>
              </div>
              <div className="ProductInfoArea">
                <Title text="Smash da casa" textSize="20"></Title>
                <Subtitle text="200gr de carne" textSize="20"></Subtitle>
                <Title text="R$35,00" textSize="20"></Title>
              </div>
            </ShowCardContainer>{" "}
            <ShowCardContainer>
              <div className="ProductImageArea">
                <img src={HamburgerPng}></img>
              </div>
              <div className="ProductInfoArea">
                <Title text="Smash da casa" textSize="20"></Title>
                <Subtitle text="200gr de carne" textSize="20"></Subtitle>
                <Title text="R$35,00" textSize="20"></Title>
              </div>
            </ShowCardContainer>{" "}
            <ShowCardContainer>
              <div className="ProductImageArea">
                <img src={HamburgerPng}></img>
              </div>
              <div className="ProductInfoArea">
                <Title text="Smash da casa" textSize="20"></Title>
                <Subtitle text="200gr de carne" textSize="20"></Subtitle>
                <Title text="R$35,00" textSize="20"></Title>
              </div>
            </ShowCardContainer>{" "}
            <ShowCardContainer>
              <div className="ProductImageArea">
                <img src={HamburgerPng}></img>
              </div>
              <div className="ProductInfoArea">
                <Title text="Smash da casa" textSize="20"></Title>
                <Subtitle text="200gr de carne" textSize="20"></Subtitle>
                <Title text="R$35,00" textSize="20"></Title>
              </div>
            </ShowCardContainer>{" "}
            <ShowCardContainer>
              <div className="ProductImageArea">
                <img src={HamburgerPng}></img>
              </div>
              <div className="ProductInfoArea">
                <Title text="Smash da casa" textSize="20"></Title>
                <Subtitle text="200gr de carne" textSize="20"></Subtitle>
                <Title text="R$35,00" textSize="20"></Title>
              </div>
            </ShowCardContainer>
            <ShowCardContainer>
              <div className="ProductImageArea">
                <img src={HamburgerPng}></img>
              </div>
              <div className="ProductInfoArea">
                <Title text="Smash da casa" textSize="20"></Title>
                <Subtitle text="200gr de carne" textSize="20"></Subtitle>
                <Title text="R$35,00" textSize="20"></Title>
              </div>
            </ShowCardContainer>
            <ShowCardContainer>
              <div className="ProductImageArea">
                <img src={HamburgerPng}></img>
              </div>
              <div className="ProductInfoArea">
                <Title text="Smash da casa" textSize="20"></Title>
                <Subtitle text="200gr de carne" textSize="20"></Subtitle>
                <Title text="R$35,00" textSize="20"></Title>
              </div>
            </ShowCardContainer>
          </div>
        </ProductsAreaContainer>
        <Footer></Footer>
      </PageBody>
    </MainContainer>
  );
}
