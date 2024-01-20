import { InputContainer, Input, InputButton } from "./SearchInput";
import { CiSearch } from "react-icons/ci";


export const SearchArea: React.FC = () => {
    return(
        <InputContainer>
            <Input type="text" placeholder="Oque você gostaria de comer hoje ?"></Input>
            <InputButton><CiSearch></CiSearch></InputButton>
        </InputContainer>
    );
}