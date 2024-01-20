import { KitchenBody } from "./KitchenBody";

type KitchenContainerProps = {
    children: React.ReactNode;
}

export const KitchenContainer:React.FC<KitchenContainerProps> = ({children}) => {
    return(
        <KitchenBody>
            {children}
        </KitchenBody>
    );
}


