import SignUpForm from "../../Components/SignUp";
import Header from "../../Components/Header";
import { MainContainer } from "../../Components/MainContainer";

export default  function SignUpPage(){
    return (
        <MainContainer>
            <Header></Header>
            <SignUpForm></SignUpForm>
        </MainContainer>
       
    );    

}