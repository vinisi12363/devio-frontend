import { StyledH2 } from "./Title";

export type TextType = { 
    text: string
    textSize:string
};	

export const Title = (data: TextType) =>{
    return(
        <StyledH2 textSize={data.textSize}>{data.text}</StyledH2>
    );
}