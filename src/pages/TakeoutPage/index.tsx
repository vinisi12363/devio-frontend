import { MainContainer } from "../../Components/MainContainer";
import { PageBody } from "../../Components/MainContainer/Body";
import { Title } from "../../Components/Title";
import { Subtitle } from "../../Components/Subtitle";

export default function TakeOutPage() {
  return (
    <MainContainer>
      <PageBody>
        <Title text={"Retirada"} textSize="30"></Title>
        <Subtitle textSize="20" text={"Aqui estão todos os pedidos"}></Subtitle>
      </PageBody>
    </MainContainer>
  );
}