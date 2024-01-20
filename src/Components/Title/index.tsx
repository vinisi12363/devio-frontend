import { H2 } from "./Title";

export type TextType = { 
    text: string
    textSize:string
};	

export const Title = (data: TextType) =>{
    return(
        <H2 textSize={data.textSize}>{data.text}</H2>
    );
}