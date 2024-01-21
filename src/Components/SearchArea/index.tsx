import { InputContainer, Input, InputButton } from "./SearchInput";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

interface SearchAreaProps {
 
    setSearchProduct: (searchTerm: string) => void;
}

export const SearchArea: React.FC<SearchAreaProps> = ({  setSearchProduct}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
   
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchProduct(searchTerm);
        setSearchTerm('');
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    return(
        
        <InputContainer>
            < form className="styledForm"onSubmit={handleSearch}>
                <Input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Oque você quer comer hoje ?"></Input>
                <InputButton type="submit"><CiSearch size={50}></CiSearch></InputButton>
            </form>
        </InputContainer>
        
    );
}