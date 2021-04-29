import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

import { Wrapper } from '../styles/FormUserData.styles';

import Input from './Input';

const FormUserData: React.FC = () => {

  const {
    isRegisterInDisplay,
    handleChange,
    submitUser,
  } = useContext(AppContext);
  
  return (
    <Wrapper>
      {isRegisterInDisplay &&(
        <div className="FormUserData">
          <div className="titleArea">
            <h1>Cadastro</h1>
          </div>
          <div className="formUserArea">
            <div className="inputArea">
              <span>Nome</span>
              <input name="name" type="text" onChange={handleChange}/>
            </div>
            <div className="inputArea">
              <span>CPF</span>
              <Input name="cpf" mask="cpf" onChange={handleChange} placeholder="111.111.111-01"/>
            </div>       
            <div className="inputArea">
              <span>Salário Bruto</span>
              <Input name="salary" mask="currency" prefix="R$" onChange={handleChange} placeholder="9.999,99"/>
            </div>   
            <div className="inputArea">
              <span>Desconto da previdência</span>
              <Input name="tributeDiscount" mask="currency" prefix="R$" onChange={handleChange} placeholder="9.999,99"/>
            </div>
            <div className="inputArea">
              <span>Número de dependentes</span>
              <input name="dependents" type="number" onChange={handleChange} min="0"/>
            </div>   
          </div>          
          <div className="submitArea">
            <button onClick={() => submitUser()}>Cadastrar</button>
            <small>Informações seguras e criptografadas</small>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default FormUserData;