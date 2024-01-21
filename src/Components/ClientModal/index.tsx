import { ModalContainer } from "../OrderModal/ModalComponent";
import { FinalizeButton, CancelButton } from "../OrderModal/ButtonModal";
import { Title } from "../Title";
import { Container } from "./ClientModal";
import {  useState } from "react";
import { useContextOrder } from "../../Contexts/OrderContext";
import { toast } from "react-toastify";


type ClientModalProps = {
  openClientModal: boolean;
  setOpenClientModal: (open: boolean) => void;
};

export const ClientModal: React.FC<ClientModalProps> = ({
  openClientModal,
  setOpenClientModal,
}) => {
  const { order } = useContextOrder();
  const [nomeCliente, setNomeCliente] = useState<string>("");
  const [formaPagamento, setFormaPagamento] = useState<string>("");
  const [troco, setTroco] = useState<string>("");
   
   
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        finalizarPedido();

    }
    const finalizarPedido = () => {
            if(nomeCliente && formaPagamento){
                if ((formaPagamento !== "dinheiro" && formaPagamento !== "pix" && formaPagamento !== "cartão") || (formaPagamento === "dinheiro" && troco === "")) {
                    alert("Preencha o campo de troco");
                    setTroco("");
                    setFormaPagamento("");
                }else{
                    if (order) {
                        order[0].nomeCliente = nomeCliente,
                        order[0].metodoPagamento = formaPagamento,
                        order[0].troco = Number(troco);
                      }
                    toast.success("Pedido realizado com sucesso!");
                    setOpenClientModal(false);
                }
        }
    }

  return (
    openClientModal && (
      <ModalContainer>
        <Container>
          <div className="body">
            <Title text="Informações do cliente" textSize="25"></Title>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
              <Title text="Nome para Retirada" textSize="20"></Title>
              <input
                placeholder="Nome do cliente"
                type="text"
                required
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
              ></input>

              <Title text="Forma de Pagamento" textSize="20"></Title>
              <input
                type="text"
                placeholder="dinheiro, cartão  ou pix"
                required
                value={formaPagamento}
                onChange={(e) => {
                  setFormaPagamento(e.target.value);
                }}
              ></input>

              {formaPagamento === "dinheiro" && (
                <>
                  <Title text="Deseja troco?" textSize="20"></Title>
                  <input
                    type="number"
                    placeholder="se não quer troco coloque 0"
                    value={troco}
                    onChange={(e) => {
                      setTroco(e.target.value);
                    }}
                  ></input>
                </>
              )}
              <div className="buttonArea">
                <CancelButton
                  className="formButton"
                  onClick={() => {
                    toast.error("Pedido cancelado!");
                    setOpenClientModal(false);
                  }}
                >
                  Cancelar
                </CancelButton>
                <FinalizeButton
                  className="formButton"
                  type="submit"
                  
                >
                  Finalizar
                </FinalizeButton>
              </div>
            </form>
          </div>
        </Container>
      </ModalContainer>
    )
  );
};
