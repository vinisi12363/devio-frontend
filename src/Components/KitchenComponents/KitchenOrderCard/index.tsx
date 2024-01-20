import {
  CardContainer,
  StyledImgArea,
  TextArea,
  DeleteButton,
  ReadyButton,
} from "./KitchenOCard";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

import Hamburguer from "../../../assets/hamburguer.png";
export default function KitchenOrderCard() {
  return (
    <CardContainer>
      <StyledImgArea>
        <img src={Hamburguer} alt="imagem do pedido" />
      </StyledImgArea>
      <TextArea>
        <h3>201 - Ricardo</h3>
        <TextArea>
          <p>1x smash da casa</p>
        </TextArea>
      </TextArea>
      <div className="buttonContainer">
        <DeleteButton>
          <IoCloseOutline size={20} style={{ color: 'red' }}/>
        </DeleteButton>
        <ReadyButton>
          <IoCheckmark  size={20}  style={{ color: 'green' }} />
        </ReadyButton>
      </div>
    </CardContainer>
  );
}
