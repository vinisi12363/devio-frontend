import { MainBody } from "./Body";

type MainContainerProps = {
    children: React.ReactNode;
};
  
export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {

    return(
        <MainBody>
           {children}
        </MainBody>
    );
}