import { StyledH2 } from "./CustomTitle";

export type TextType = {
  text: string | undefined;
  textSize: string;
  textColor: string;
};

export const CustomTitle = (data: TextType) => {
  return <StyledH2  textColor={data.textColor} textSize={data.textSize}>{data.text}</StyledH2>;
};
