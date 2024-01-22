import { MainContainer } from "../../Components/MainContainer";
import { PageBody } from "../../Components/MainContainer/Body";
import { Title } from "../../Components/Title";
import Header from "../../Components/Header";
import { KitchenContainer } from "../../Components/KitchenComponents/KitchenContainer";
import {
  KitchenPreparingBox,
  KitchenReadyBox,
} from "../../Components/KitchenComponents/KitchenContainer/KitchenBody";
import KitchenOrderCard from "../../Components/KitchenComponents/KitchenOrderCard";

export default function KitchenPage() {
  return (
    <MainContainer>
      <PageBody>
        <Header></Header>
        <KitchenContainer>
          <KitchenPreparingBox>
            <Title text="Preparando:" textSize="35"></Title>
            <KitchenOrderCard></KitchenOrderCard>
          </KitchenPreparingBox>
          <KitchenReadyBox>
            <Title text="Pronto:" textSize="35"></Title>
          </KitchenReadyBox>
        </KitchenContainer>
      </PageBody>
    </MainContainer>
  );
}
