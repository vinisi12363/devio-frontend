import { FinalizeOrderButton, CancelOrderButton } from "./FooterButtons";
import { Title } from "../Title";
import { useContextOrder } from "../../Contexts/OrderContext";
import { toast } from "react-toastify";

type FooterProps = {
    setOpenClientModal: (open: boolean) => void;
}

export const Footer:React.FC<FooterProps> = ({ setOpenClientModal}) => {
    const { order } = useContextOrder();

    const confirmCancel = () => {  
        const result = window.confirm("Deseja cancelar o pedido?");
        if (result) {
            window.location.reload();
        }
    }
    const confirmFinalize = () => {
        
        if ( order?.length ?? 0 > 0) {
            setOpenClientModal(true);
        }else if(order?.length === 0){
            toast.error("você  tem que fazer um pedido primeiro!");
            setOpenClientModal(false);
        }else{
            setOpenClientModal(false);
        }	
    }
    return (
        <footer>
           
            <CancelOrderButton onClick={()=>{confirmCancel()}}>
                <Title text="Cancelar" textSize="30"></Title>
            </CancelOrderButton>
            <FinalizeOrderButton onClick={()=>{confirmFinalize()}}>
                <Title text="Finalizar" textSize="30"></Title>
            </FinalizeOrderButton>
        </footer>
    );
}