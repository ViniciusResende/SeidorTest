import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #EFF4F9 8rem, #fff 10%);
  padding-top: 2rem;
  
  div.FormUserData{    
    font-family: 'Nunito', sans-serif;
  }

  div.FormUserData div.titleArea {
    width: 100%;
    padding: 1rem 0;
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  div.FormUserData div.titleArea h1{
    color: #445566;
    font-size: 3.5rem;
    margin: 0;
  }

  div.FormUserData div.formUserArea {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.25rem;
  }


  div.FormUserData div.formUserArea div.inputArea:nth-child(1){
    grid-column: span 2;
  }

  @media(max-width: 767px){
    div.FormUserData div.formUserArea div.inputArea {
      grid-column: span 2;
    }
  }

  div.FormUserData div.formUserArea div.inputArea{
    display: flex;
    flex-direction: column;
  }

  div.FormUserData div.formUserArea div.inputArea span{
    color: #445566;
    font-weight: 700;
  }

  div.FormUserData div.formUserArea div.inputArea input{
    background: #EFF4F9;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  }

  div.FormUserData div.formUserArea div.inputArea input::placeholder{
    font-weight: 900;
    color: rgba(68,85,102,0.25)
  }

  div.FormUserData h3{
    color: #1188EE;
  }

  div.FormUserData div.line{
    background: #EFF4F9;
    width: 100%;
    height: 0.13rem;
  }

  div.FormUserData div.radioArea{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div.FormUserData div.radioArea label.container{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }

  div.FormUserData div.radioArea label.container p{
    color: #445566;
    font-weight: 700;
    margin: 1.5rem 1rem;
  }

  div.FormUserData div.radioArea label.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }


  div.FormUserData div.radioArea label.container span.checkmark {
    height: 1.125rem;
    width: 1.125rem;
    background-color: #eee;
    border-radius: 50%;
    border: 0.5px solid #2196F3;

    display: flex;
    align-items: center;
    justify-content: center;
  }


  div.FormUserData div.radioArea label.container:hover input ~ .checkmark {
    background-color: #ccc;
  }


  div.FormUserData div.radioArea label.container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  div.FormUserData div.radioArea label.container span.checkmark:after {
    content: "";
    display: none;
  }

  div.FormUserData div.radioArea label.container input:checked ~ .checkmark:after {
    display: block;
  }

  div.FormUserData div.radioArea label.container .checkmark:after {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background: white;
  }

  div.FormUserData div.FormUserPayment div.formPaymentArea{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.25rem;
  }

  @media(max-width: 767px){
    div.FormUserData div.FormUserPayment div.formPaymentArea{
      grid-template-columns: 1fr;
    }
  }

  div.FormUserData div.FormUserPayment div.formPaymentArea div.inputArea{
    display: flex;
    flex-direction: column;
  }

  div.FormUserData div.FormUserPayment div.formPaymentArea div.inputArea span{
    color: #445566;
    font-weight: 700;
  }

  div.FormUserData div.FormUserPayment div.formPaymentArea div.inputArea input{
    background: #EFF4F9;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  }

  div.FormUserData div.FormUserPayment div.formPaymentArea div.inputArea input::placeholder{
    font-weight: 900;
    color: rgba(68,85,102,0.25)
  }

  div.FormUserData div.FormUserPayment div.formPaymentArea div.inputArea div.dateArea {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  div.FormUserData div.submitArea {
    display: flex;
    flex-direction: column;

    margin-top: 4rem;
  }

  div.FormUserData div.submitArea button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    max-width: 15rem;
    width: 100%;

    color: #fff;
    font-weight: 600;
    text-transform: uppercase;

    background: #1188EE;
    border: 1px solid #969696;
    border-radius: 5px;

    cursor: pointer;
    transition: all 0.4s ease;
  }

  div.FormUserData div.submitArea button:hover{
    filter: brightness(0.9);
  }

  div.FormUserData div.submitArea small {
    color: #ababab;

    margin: 0.5rem 0 2rem 0;
  }
  
`