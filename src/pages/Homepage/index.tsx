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
import PizzaPng from "../../assets/pizza1.png";
import RefrigerantePng from "../../assets/latinhas.png";
import { Footer } from "../../Components/Footer";
import { ProductsApi } from "../../Api/ProductsApi";
import { useEffect, useState } from "react";
import { useContextCategory } from "../../Contexts/CategoryContext";


type Product = {
    produto_id: number;
    descricao: string;
    preco: number;
    codigo:string;
    nome: string;
    imagem: string;
}

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const {category} = useContextCategory();
  console.log("category" , category);
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
            {
               products.map((p:Product) => {
                return(
                    
                    <ShowCardContainer  displayType = {
                        category === "HamburguerPng" && p.imagem === "HamburgerPng" ||  
                        category === "PizzaPng" && p.imagem === "PizzaPng" ||
                        category === "RefrigerantePng" && p.imagem === "RefrigerantePng" || 
                        !category ? "flex" : "none"  
                        
                       
                    }key={p.produto_id}>
                      <div className="ProductImageArea">
                        <img src={
                            p.imagem === "HamburgerPng" ? HamburgerPng : '' ||
                            p.imagem === "PizzaPng" ? PizzaPng : '' ||
                            p.imagem === "RefrigerantePng" ? RefrigerantePng : ''
                        }></img>
                      </div>
                      <div className="ProductInfoArea">
                        <Title text={p.nome} textSize="20"></Title>
                        <Subtitle text={p.descricao} textSize="20"></Subtitle>
                        <Title text={`R$${p.preco}`} textSize="20"></Title>
                      </div>
                    </ShowCardContainer>
                  
                );
              
               })
            }
         </div>

        </ProductsAreaContainer>
        <Footer></Footer>
      </PageBody>
    </MainContainer>
  );
}
