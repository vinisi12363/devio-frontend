import { InputContainer, Input, InputButton } from "./SearchInput";

export const SearchArea: React.FC = () => {
    return(
        <InputContainer>
           
            <Input type="text" placeholder="Oque você gostaria de comer hoje ?"></Input>
            <InputButton title="buscar"></InputButton>
        </InputContainer>
    );
}