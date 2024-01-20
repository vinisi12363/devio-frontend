
import { MainContainer } from "../../Components/MainContainer";
import Header from "../../Components/Header";
import { SearchArea } from "../../Components/SearchArea";
import { CategoriesSection } from "../../Components/CategoriesSection/index";
import { Title } from "../../Components/Title";
import { Subtitle } from "../../Components/Subtitle";
import { CardContainerArea } from "../../Components/CardContainer";

export default function HomePage(){
    return(
        <>
        
        <MainContainer>
                <Header></Header>
                
                <SearchArea></SearchArea>
               
                <CategoriesSection>
                    <Title text = {"Categorias"} textSize="30"></Title>
                    <Subtitle text = {"Navegue por categoria"}></Subtitle>
                    <CardContainerArea></CardContainerArea>
                </CategoriesSection>
         
            </MainContainer>
        
        
        </>
        
    );

}