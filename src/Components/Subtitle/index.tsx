import { P } from "./Title";


export type TextType = { 
    text: string
};	

export const Subtitle = (data: TextType) =>{
    return(
        <P>{data.text}</P>
    );
}