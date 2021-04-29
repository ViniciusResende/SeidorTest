import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

import { Wrapper } from '../styles/FormUserData.styles';

import Input from './Input';
import CircleIcon from '../assets/circle.svg';

const FormUserData: React.FC = () => {
  const [hasEmptyInputs, setHasEmptyInputs] = useState(false);

  const {
    isRegisterInDisplay,
    isUpdateInDisplay,
    handleChange,
    submitUser,
    updateUser,
    inputValuesVeryifier
  } = useContext(AppContext);

  

  const handleSubmit = () => {
    if(isRegisterInDisplay){
      if(inputValuesVeryifier()) {
          setHasEmptyInputs(false);
          submitUser()
        } else {
          setHasEmptyInputs(true);
        }
    } else {
      updateUser();
    }
  }
  
  return (
    <Wrapper>
      {(isRegisterInDisplay || isUpdateInDisplay) &&(
        <>
          <header className="headerArea">
            <img src={CircleIcon} alt="logo"/>
            <h2>{!isUpdateInDisplay ? 'Cadastro' : 'Atualização'} de Funcionários - Preencha os Dados</h2>
          </header>
            <div className="FormUserData">          
              <div className={hasEmptyInputs ? 'formUserArea withEmptyInputs' : 'formUserArea'}>
                <div className="inputArea">
                  <span>Nome</span>
                  <input name="name" type="text" onChange={handleChange}/>
                </div>
                <div className="inputArea">
                  <span>CPF</span>
                  <Input 
                    name="cpf" 
                    mask="cpf" 
                    onChange={handleChange} 
                    placeholder="111.111.111-01" 
                    style={isUpdateInDisplay ? { backgroundColor: 'var(--green-50)'} : {}}
                  />
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
                  <input name="dependents" type="number" onChange={handleChange} min="0" placeholder="0"/>
                </div>   
              </div>          
              <div className="submitArea">
                <button type="submit" onClick={() => handleSubmit()}>{isUpdateInDisplay ? 'Atualizar' : 'Cadastrar'}</button>
                <small>{hasEmptyInputs ? 'Preencha todos os campos' : ''}</small>
              </div>
            </div>
        </>
      )}
    </Wrapper>
  );
}

export default FormUserData;