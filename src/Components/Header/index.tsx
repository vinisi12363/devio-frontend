import { HeaderInfo, HeaderOptionContainer, HeaderLogo, HeaderLoginContainer} from "./Header";
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
      <HeaderLoginContainer>
        <Link className="pageLink" to={"/login"}>
          <p>Login</p>
        </Link>
        <Link className="pageLink" to={"/cadastro"}>
          <p>Cadastro</p>
        </Link>
      </HeaderLoginContainer>
    </HeaderInfo>
  );
}
