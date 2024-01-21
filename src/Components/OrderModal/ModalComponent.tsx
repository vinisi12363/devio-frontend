import styled from "styled-components";


export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #00000080;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 20px;
    animation: modalbody 0.3s forwards;
    @keyframes modalbody {
        from{
            opacity: 0;
            transform: translateY(-100%);
        }
        to{
            opacity: 1;
            transform: translateY(0%);
        }
    }
   
`

export const ModalBody = styled.div`
    width:  60%;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    animation: modalbody 0.3s forwards;
    overflow-y: auto;
    @keyframes modalbody {
        from{
            opacity: 0;
            transform: translateY(-100%);
        }
        to{
            opacity: 1;
            transform: translateY(0%);
        }
    }
    .inputObsContainer{
        width: 100%;
        min-height: 8vw;
        background-color: lightgray;
        font-family: 'Roboto', sans-serif;
        border: 3px solid #e0e0e0;
        border-radius: 15px;
        display: flex;
        padding: 0 0.5vw;
        box-sizing: border-box;
        border-bottom: 1px solid #e0e0e0;
        position: relative; 
    }
    .obsInput{
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 25px;
        font-weight: 500;
        color: #333;
        background-color: transparent;
        &::placeholder{
            color: #999;
        }
    }
    .itemArea{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        padding-top: 20px;
        margin-top:40px;
     
       .item{
        input[type="checkbox"] {
            -moz-appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid #555;
            cursor: pointer;
          }

         background-color: white;
         display: flex;
         justify-content: space-around;
         padding: 10px;
         flex-direction: row;
         .imageContainer{
               display: flex;
                justify-content: center;
                align-items: center; 
                overflow: hidden;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 0 10px #00000080;
                border: 1px solid #00000080;
                position: relative;
                right: 1vw;
                top:0px;
            img{
                width:120px;
                height: 120px;
                iobject-fit: cover;
             }
          

         }
         
       } 
       .itemInfo{
        display: flex;
        flex-direction: column;
        position: relative;
        right: 5vw;
        top:0px;
        background-color: white;
       }
    }
    .modal-header{
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        
    }
    .modal-footer{
        background-color: white;

        .orderBtnContainer{
            height: 10vh;
            display: flex;
            background-color: white;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 1vw;
            box-sizing: border-box;
            z-index: 0;
            cursor: pointer;
            outline: none;
           
        }
    }
`
export const ModalOrderContainer = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow-y: hidden;
    border-bottom: 2px dashed #e0e0e0;

    img {
        width:240px;
        height: 240px;
        object-fit: contain;
    }
    .quantInputArea{
        background-color: white;
        border-radius: 30px;
        border: 2px solid green;
        overflow: hidden;
        max-width: 8vw;
        max-heitgh: 4vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        button {
            background-color: green;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 2rem;
            color: white;
            font-weight: 700;
            font-family: 'Roboto', sans-serif;
            z-index: 1;
        }
    }
`

export const ModalFooterContainer = styled.div`
    width: 100%;
    
    margin-top: 20px;
    background-color: white;
    border: 2px solid #e0e0e0;

    .orderDescrtipion{
        border-bottom: 2px dashed #e0e0e0;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 2vw;
        .orderDescChild{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
    .orderTotal{
       background-color: white;
      
       padding: 0 2vw;
    }
`