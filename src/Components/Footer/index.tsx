import { FinalizeOrderButton, CancelOrderButton } from "./FooterButtons";
import { Title } from "../Title";

export const Footer = () => {
    return (
        <footer>
           
            <CancelOrderButton>
                <Title text="Cancelar" textSize="30"></Title>
            </CancelOrderButton>
            <FinalizeOrderButton>
                <Title text="Finalizar" textSize="30"></Title>
            </FinalizeOrderButton>
        </footer>
    );
}