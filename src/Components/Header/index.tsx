import { HeaderInfo, HeaderOptionContainer, HeaderLogo } from "./Header";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderInfo>
      <HeaderLogo>
      
          <p className="pMedia">VINI FAST FOOD</p>
       
      </HeaderLogo>
      <HeaderOptionContainer>
        <Link className="pageLink" to={"/"}>
          <p>Pedidos</p>
        </Link>
        <Link className="pageLink" to={"/cozinha"}>
          <p>Cozinha</p>
        </Link>
        <Link className="pageLink" to={"/retirada"}>
          <p>Retirada</p>
        </Link>
      </HeaderOptionContainer>
    </HeaderInfo>
  );
}
