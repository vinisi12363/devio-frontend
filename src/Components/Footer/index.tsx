import { FinalizeOrderButton, CancelOrderButton } from "./FooterButtons";
import { Title } from "../Title";
import { useContextOrder } from "../../Contexts/OrderContext";
import { toast } from "react-toastify";
import{FooterContainer} from './FooterButtons'

type FooterProps = {
  setOpenClientModal: (open: boolean) => void;
};

export const Footer: React.FC<FooterProps> = ({ setOpenClientModal }) => {
  const { order } = useContextOrder();

  const confirmCancel = () => {
    const result = window.confirm("Deseja cancelar o pedido?");
    if (result) {
      window.location.reload();
    }
  };
  const confirmFinalize = () => {
    if (order?.length ?? 0 > 0) {
      setOpenClientModal(true);
    } else if (order?.length === 0) {
      toast.error("você  tem que fazer um pedido primeiro!");
      setOpenClientModal(false);
    } else {
      setOpenClientModal(false);
    }
  };
  return (
    <FooterContainer>
      <CancelOrderButton buttonColor={order?.length?? 0 > 0 ? 'Crimson': '#f9f9f9'} TextButtonColor={ order?.length?? 0 > 0 ? 'white': 'black'}
        onClick={() => {
          confirmCancel();
        }}
      >
        <Title text="Cancelar" textSize="30"></Title>
      </CancelOrderButton>
      <FinalizeOrderButton buttonColor={order?.length?? 0 > 0 ? 'Crimson': '#f9f9f9'} TextButtonColor={ order?.length?? 0 > 0 ? 'white': 'black'}
        onClick={() => {
          confirmFinalize();
        }}
      >
        <Title text="Finalizar" textSize="30"></Title>
      </FinalizeOrderButton>
    </FooterContainer>
  );
};
