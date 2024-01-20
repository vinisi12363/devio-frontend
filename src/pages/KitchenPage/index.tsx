import { MainContainer } from "../../Components/MainContainer";
import { PageBody } from "../../Components/MainContainer/Body";
import { Title } from "../../Components/Title";
import { Subtitle } from "../../Components/Subtitle";
import Header from "../../Components/Header";

export default function KitchenPage() {
  return (
    <MainContainer>
      <PageBody>
        <Header></Header>
        <Title text={"Pedidos"} textSize="30"></Title>
        <Subtitle textSize="20" text={"Aqui estão todos os pedidos"}></Subtitle>
        <Title text={"Pedidos"} textSize="30"></Title>
        <Subtitle textSize="20" text={"Aqui estão todos os pedidos"}></Subtitle>
        <Title text={"Pedidos"} textSize="30"></Title>
        <Subtitle textSize="20" text={"Aqui estão todos os pedidos"}></Subtitle>
      </PageBody>
    </MainContainer>
  );
}