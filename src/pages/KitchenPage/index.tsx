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
import { useContextDatabaseOrder } from "../../Contexts/DatabaseOrdersContext";
import { ordersApi } from "../../Api/OrdersApi";
import { useEffect } from "react";

export default function KitchenPage() {
  const { fetchDatabaseOrder } = useContextDatabaseOrder();
  useEffect (() => {
    const fetchOrders = async () => {
      try {
        const result = await ordersApi.getAllOrders();
        if (result) {
          fetchDatabaseOrder(result);
          
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <MainContainer>
      <PageBody>
        <Header></Header>
        <KitchenContainer>
          <KitchenPreparingBox>
            <Title text="Preparando:" textSize="35"></Title>
            <KitchenOrderCard statusType="preparando"> </KitchenOrderCard>
          </KitchenPreparingBox>
          <KitchenReadyBox>
            <Title text="Pronto:" textSize="35"></Title>
            <KitchenOrderCard statusType="pronto"></KitchenOrderCard>
          </KitchenReadyBox>
        </KitchenContainer>
      </PageBody>
    </MainContainer>
  );
}
