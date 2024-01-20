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
import Pizza from "../../assets/pizza1.png";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";
import molho from "../../assets/molho.png";
import mussarela from "../../assets/mussarela.png";
import bacon from "../../assets/bacon.png";

export default function ModalComponent() {
  const [count, setCount] = useState(1);
  const value:number = 35.0;
  const prodName: string = "Pizza de Calabresa";
  const [valorAdicional, setValorAdicional] = useState(0);

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

  const acrescentarAdicional = (valor: number) => {
    setValorAdicional(valorAdicional + valor);
  };
  const retirarAdicional = (valor: number) => {
    if (valorAdicional === 0) {
      return;
    }
    setValorAdicional(valorAdicional - valor);
  };

  const incrementar = () => {
    if (count + 1 >= 100) {
      return;
    }
    setCount(count + 1);
  };
  const decrementar = () => {
    if (count - 1 <= 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <ModalContainer>
      <ModalBody>
        <div className="modal-header">
          <Title text="Revise seu pedido!" textSize="40"></Title>
          <IoClose size={60} style={{ color: 'grey' }}></IoClose>
        </div>

        <div className="modal-body">
          <ModalOrderContainer>
            <ShowCardContainer displayType="flex">
              <img src={Pizza}></img>
            </ShowCardContainer>
            <div className="textOrderArea">
              <Title text="Pizza" textSize="25"></Title>
              <Subtitle
                text="pizza de calabresa com queijo mussarela"
                textSize="20"
              ></Subtitle>
              <div className="quantInputArea">
                <button
                  onClick={() => {
                    decrementar();
                  }}
                >
                  <IoRemove></IoRemove>
                </button>

                <Subtitle text={count.toString()} textSize="15"></Subtitle>

                <button
                  onClick={() => {
                    incrementar();
                  }}
                >
                  <IoAdd></IoAdd>
                </button>
              </div>
            </div>

            <Title text={`R$${value * count},00`} textSize="25"></Title>
          </ModalOrderContainer>
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
                  <Title text={`R$${a.valor},00`} textSize="20"></Title>
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
          ></input>
        </div>

        <div className="modal-footer">
          <ModalFooterContainer>
            <div className="orderDescrtipion">
              <Subtitle
                text={`${count}x ${prodName} `}
                textSize="25"
              ></Subtitle>
              <Subtitle text={`R$ ${value},00`} textSize="25"></Subtitle>
            </div>
            <div className="orderTotal">
              <div className="totalTitle">
                <Subtitle text="Total do pedido:" textSize="25"></Subtitle>
                <div className="totalArea">
                  <Title
                    text={`R$${value * count + valorAdicional},00`}
                    textSize="40"
                  ></Title>
                </div>
              </div>
            </div>
          </ModalFooterContainer>

          <div className="orderBtnContainer">
            <CancelButton type="button" className="btn btn-default">
              Continuar Comprando
            </CancelButton>
            <FinalizeButton type="button" className="btn btn-primary">
              Adicionar ao pedido
            </FinalizeButton>
          </div>
        </div>
      </ModalBody>
    </ModalContainer>
  );
}
