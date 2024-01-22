import { MainContainer } from "../../Components/MainContainer";
import { PageBody } from "../../Components/MainContainer/Body";
import { Title } from "../../Components/Title";
import Header from "../../Components/Header";
import { KitchenContainer } from "../../Components/KitchenComponents/KitchenContainer";
import {
  KitchenPreparingBox,
  KitchenReadyBox,
} from "../../Components/KitchenComponents/KitchenContainer/KitchenBody";
import { CustomTitle } from "../../Components/TakeOutComponents/CustomTitle";
import { useContextDatabaseOrder } from "../../Contexts/DatabaseOrdersContext";
import { UseCapitalizeFirstLetter } from "../../Hooks/useCapitalize";

export default function TakeOutPage() {
  const {databaseOrder} = useContextDatabaseOrder();
  const capitalize =  (str:string) => {
    const result = UseCapitalizeFirstLetter(str);
    return result;
  }
  return (
    <MainContainer>
      <PageBody>
        <>
          <Header></Header>
         <KitchenContainer>
             <KitchenPreparingBox>
             <Title text="Preparando:" textSize="55"></Title>
             {databaseOrder?.map((order) => {
                if(order.status === "preparando"){
                  return <CustomTitle text={capitalize(order.nomecliente)} textSize="85" textColor="lightgrey"></CustomTitle>
                }
             })}
             </KitchenPreparingBox>
             <KitchenReadyBox>
             <Title text="Pronto:" textSize="55"></Title>
             {databaseOrder?.map((order) => {
                if(order.status === "pronto"){
                  return <CustomTitle text={capitalize(order.nomecliente)} textSize="85" textColor="green"></CustomTitle>
                }
             })}
             </KitchenReadyBox>

         </KitchenContainer>
        </>
       
      </PageBody>
    </MainContainer>
  );
}
