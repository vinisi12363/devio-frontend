import { StyledP } from "./Title";


export type TextType = { 
    text: string
    textSize:string
};	

export const Subtitle = (data: TextType) =>{
    return(
        <StyledP textSize={data.textSize}>{data.text}</StyledP>
    );
}