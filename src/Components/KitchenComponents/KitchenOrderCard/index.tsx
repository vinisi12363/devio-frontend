import {
  CardContainer,
  StyledImgArea,
  TextArea,
  DeleteButton,
  ReadyButton,
} from "./KitchenOCard";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { useContextDatabaseOrder } from "../../../Contexts/DatabaseOrdersContext";
import HamburguerPng from "../../../assets/hamburguer.png";
import PizzaPng from "../../../assets/pizza1.png";
import RefrigerantePng from "../../../assets/latinhas.png";
import { ordersApi } from "../../../Api/OrdersApi";
import { Subtitle } from "../../Subtitle";
import { toast } from "react-toastify";
import { UseCapitalizeFirstLetter } from "../../../Hooks/useCapitalize";


type kitchenProps= {
  statusType: "preparando" |  "pronto";
}


export default function KitchenOrderCard( {statusType} : React.PropsWithChildren<kitchenProps>) {
  const { databaseOrder } = useContextDatabaseOrder();


  const deleteOrder = async (id: number) => {
    if(statusType === "preparando"){
    const result = window.confirm("Deseja deletar o pedido?");
    if (result) {
      try {
        await ordersApi.deleteOrderById(id);
        toast.success("Pedido deletado com sucesso");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      
      } catch (error) {
        console.log(error);
      }
    }
    }else{
      const result = window.confirm("O pedido Foi retirado?");
      if (result) {
        try {
          await ordersApi.updateOrderById(id, "entregue");
          toast.success("Pedido entregue com sucesso!");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        
        } catch (error) {
          console.log(error);
          toast.error("Erro ao processar solicitação tente novamente mais tarde");
        }
      }

    }
  };
  const finalizeOrder = async (id: number) => {
    
      const result = window.confirm("Deseja concluir o pedido?");
      if (result) {
        try {
          await ordersApi.updateOrderById(id , "pronto" );
          toast.success("Pedido enviado para retirada!");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        
        } catch (error) {
          console.log(error);
        }
      }
    
   
  };
   const capitalize =  (str:string) => {
     const result = UseCapitalizeFirstLetter(str);
     return result;
   }

  return (
    <>
      {databaseOrder?.map((order) => {
        if (order.status === statusType) {
          return (
            <CardContainer bordaVerde ={statusType==='pronto' ?  "green" : "transparent"}>
              <div className="infosContainer">
                {order.products.map((product) => {
                  return (
                    <>
                      <div className="imgOrderContainer">
                        <StyledImgArea>
                          <img
                            src={
                              product.imagem === "HamburguerPng"
                                ? HamburguerPng
                                : product.imagem === "PizzaPng"
                                ? PizzaPng
                                : product.imagem === "RefrigerantePng"
                                ? RefrigerantePng
                                : ""
                            }
                            alt="imagem do pedido"
                          />
                        </StyledImgArea>
                        <TextArea>
                          <p>{product.nome}</p>
                        </TextArea>
                      </div>
                    </>
                  );
                })}
                <TextArea>
                  <div className="nameArea">
                   <h3>{`${order.numeropedido} - ${capitalize(order.nomecliente)}`}</h3>
                  </div>
              
                </TextArea>

                <div className="buttonContainer">
                  <DeleteButton onClick={()=>{deleteOrder(order.numeropedido)}}>
                    <IoCloseOutline size={20} style={{ color: "red" }} />
                  </DeleteButton>
                  <ReadyButton  display={statusType==='pronto'? "none" : "flex"}onClick={()=>{finalizeOrder(order.numeropedido)}}>
                    <IoCheckmark size={20} style={{ color: "green" }} />
                  </ReadyButton>
                </div>
              </div>

              {order.observacao && (
                <div className="observacoes">
                  <Subtitle
                    text={`${order.observacao}`}
                    textSize="20"
                  ></Subtitle>
                </div>
              )}
            </CardContainer>
          );
        }
      })}
    </>
  );
}
