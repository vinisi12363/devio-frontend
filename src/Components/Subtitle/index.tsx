import { P } from "./Title";


export type TextType = { 
    text: string
    textSize:string
};	

export const Subtitle = (data: TextType) =>{
    return(
        <P textSize={data.textSize}>{data.text}</P>
    );
}