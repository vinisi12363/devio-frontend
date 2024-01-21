import { StyledP } from "./Title";


export type TextType = { 
    text: string | undefined
    textSize:string
};	

export const Subtitle = (data: TextType) =>{
    return(
        <StyledP textSize={data.textSize}>{data.text}</StyledP>
    );
}