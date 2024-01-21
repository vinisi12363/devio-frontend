import {
  ModalBody,
  ModalContainer,
  ModalOrderContainer,
  ModalFooterContainer,
} from "./ModalComponent";
import { FinalizeButton, CancelButton } from "./ButtonModal";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { ShowCardContainer } from "../../Components/ProductCard/Card";
import PizzaPng from "../../assets/pizza1.png";
import HamburguerPng from "../../assets/hamburguer.png";
import RefrigerantePng from "../../assets/latinhas.png";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";
import molho from "../../assets/molho.png";
import mussarela from "../../assets/mussarela.png";
import bacon from "../../assets/bacon.png";
import { useContextProduct } from "../../Contexts/ProductContext";
import { useContextOrder } from "../../Contexts/OrderContext";

export default function ModalComponent({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { produtoSelecionado, chooseProduct } = useContextProduct();
  const { order, createOrder } = useContextOrder();
  const [valorAdicional, setValorAdicional] = useState<number>(0);
  const [valorTotal, setValorTotal] = useState<number>(0);
  const [obs,setObs] = useState<string>('');
  const adicionais = [
    {
      img: molho,
      nome: "Molho especial",
      descrição: " 90gr de Molho especial da casa",
      valor: 3.0,
    },
    {
      img: mussarela,
      nome: "Queijo Mussarela",
      descrição: " 135gr de Mussarela da melhor qualidade",
      valor: 2.0,
    },
    {
      img: bacon,
      nome: "Bacon Grelhado",
      descrição: " 100gr de Bacon da melhor qualidade",
      valor: 4.0,
    },
  ];

  useEffect(() => {
    setValorTotal(
      produtoSelecionado.reduce((acc, curr) => {
        return acc + curr.preco * curr.quantidade;
      }, 0) + valorAdicional
    );
  }, [produtoSelecionado, valorAdicional]);

  const acrescentarAdicional = (valor: number) => {
    setValorAdicional(valorAdicional + valor);
  };
  const retirarAdicional = (valor: number) => {
    if (valorAdicional === 0) {
      return;
    }
    setValorAdicional(valorAdicional - valor);
  };

  const incrementar = (id: number) => {
    chooseProduct(
      produtoSelecionado.map((productChoosen) => {
        if (productChoosen.produto_id === id) {
          return {
            ...productChoosen,
            quantidade: productChoosen.quantidade + 1,
          };
        }
        return productChoosen;
      })
    );
  };
  const decrementar = (id: number) => {
    chooseProduct(
      produtoSelecionado.map((productChoosen) => {
        if (productChoosen.produto_id === id && productChoosen.quantidade > 1) {
          return {
            ...productChoosen,
            quantidade: productChoosen.quantidade - 1,
          };
        }
        return productChoosen;
      })
    );
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  
  const deleteItem = (id: number) => {
    const confirmDelete: boolean = window.confirm(
      "Deseja realmente excluir o item?"
    );
    if (confirmDelete) {
      chooseProduct(produtoSelecionado.filter((p) => p.produto_id !== id));
    }
    if (produtoSelecionado.length-1 === 0) {
      closeModal();
    }
  };

  return (
    openModal && (
      <ModalContainer>
        <ModalBody>
          <div className="modal-header">
            <Title text="Revise seu pedido!" textSize="40"></Title>
            <IoClose
              size={60}
              style={{ color: "grey" }}
              onClick={() => {
                closeModal();
              }}
            ></IoClose>
          </div>
          <div className="modal-body">
            {produtoSelecionado?.map((productChoosen) => {
              return (
                <>
                  <ModalOrderContainer>
                    <ShowCardContainer displayType="flex" pointerEvents="auto">
                      <img
                        src={
                          productChoosen?.imagem === "RefrigerantePng"
                            ? RefrigerantePng
                            : productChoosen?.imagem === "PizzaPng"
                            ? PizzaPng
                            : productChoosen?.imagem === "HamburguerPng"
                            ? HamburguerPng
                            : ""
                        }
                        alt="Product Image"
                      />
                    </ShowCardContainer>
                    <div className="textOrderArea">
                      <Title text={productChoosen?.nome} textSize="25"></Title>
                      <Subtitle
                        text={productChoosen?.descricao}
                        textSize="20"
                      ></Subtitle>
                      <div className="quantInputArea">
                        <button
                          onClick={() => {
                            decrementar(productChoosen.produto_id);
                          }}
                        >
                          <IoRemove></IoRemove>
                        </button>

                        <Subtitle
                          text={productChoosen.quantidade.toString()}
                          textSize="15"
                        ></Subtitle>

                        <button
                          onClick={() => {
                            incrementar(productChoosen.produto_id);
                          }}
                        >
                          <IoAdd></IoAdd>
                        </button>
                      </div>
                      <div className="deleteItem">
                        <IoClose
                          size={30}
                          style={{ color: "red" }}
                          onClick={() => {
                            deleteItem(productChoosen.produto_id);
                          }}
                        />
                      </div>
                    </div>

                    <Title
                      text={`R$${(
                        (productChoosen?.preco ?? 0) * productChoosen.quantidade
                      ).toFixed(1)}0`}
                      textSize="25"
                    ></Title>
                  </ModalOrderContainer>
                </>
              );
            })}
          </div>
          <Title text="Adicionais" textSize="30"></Title>
          <Subtitle
            text="Selecione os ingredientes que você quer aidcionar a mais no seu lanche."
            textSize="20"
          ></Subtitle>
          <div className="itemArea">
            {adicionais.map((a) => {
              return (
                <>
                  <label className="item" key={a.nome}>
                    <div className="imageContainer">
                      <img src={a.img}></img>
                    </div>

                    <div className="itemInfo">
                      <Title text={a.nome} textSize="22"></Title>
                      <Subtitle text={a.descrição} textSize="20"></Subtitle>
                    </div>
                    <Title
                      text={`R$${a.valor.toFixed(2)}`}
                      textSize="20"
                    ></Title>
                    <input
                      type="checkbox"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.target.checked
                          ? acrescentarAdicional(a.valor)
                          : retirarAdicional(a.valor);
                      }}
                    />
                  </label>
                </>
              );
            })}
          </div>

          <Title text="Observações" textSize="30"></Title>
          <div className="inputObsContainer">
            <input
              className="obsInput"
              type="text"
              placeholder="Adicione uma observação ao pedido"
              value={obs}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setObs(e.target.value);
              }}
            ></input>
          </div>

          <div className="modal-footer">
            <ModalFooterContainer>
              <div className="orderDescrtipion">
                {produtoSelecionado.map((productChoosen) => {
                  return (
                    <div className="orderDescChild">
                      <Subtitle
                        text={`${productChoosen.quantidade}x ${productChoosen?.descricao} `}
                        textSize="20"
                      ></Subtitle>
                      <Subtitle
                        text={`R$ ${(
                          productChoosen?.preco * productChoosen.quantidade
                        ).toFixed(1)}0`}
                        textSize="20"
                      ></Subtitle>
                    </div>
                  );
                })}
              </div>
              <div className="orderTotal">
                <div className="totalTitle">
                  <Subtitle text="Total do pedido:" textSize="30"></Subtitle>
                  <div className="totalArea">
                    <Title
                      text={`R$${(valorTotal + valorAdicional).toFixed(1)}0`}
                      textSize="40"
                    ></Title>
                  </div>
                </div>
              </div>
            </ModalFooterContainer>

            <div className="orderBtnContainer">
              <CancelButton type="button" className="btn btn-default" onClick={()=>{closeModal()}}>
                Continuar Comprando
              </CancelButton>
              <FinalizeButton
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  createOrder({
                    ...order,
                      total: valorTotal + valorAdicional,
                      products: [...produtoSelecionado],
                      observacao: obs,
                      nomeCliente: "",
                      numeroPedido:0,
                      status:null
                  });
                  chooseProduct([]);
                  closeModal();
                }}
              >
                Adicionar ao pedido
              </FinalizeButton>
            </div>
          </div>
        </ModalBody>
      </ModalContainer>
    )
  );
}
