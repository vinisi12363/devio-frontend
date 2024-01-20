import { HeaderInfo, HeaderOptionContainer, HeaderLogo } from './Header';

export default function Header (){
    return (
        <HeaderInfo>
            <HeaderLogo>
                <p>VINI FAST FOOD</p>
            </HeaderLogo>
            <HeaderOptionContainer>
                <p>Pedidos</p>
                <p>Cozinha</p>
                <p>Retirada</p>
            </HeaderOptionContainer>
        </HeaderInfo>
    );

}