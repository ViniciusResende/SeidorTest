import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../contexts/AppContext';

import { 
  Container,
  HeaderArea,
  Form,
  FormUserArea,
  InputArea,
  SubmitArea,
  SubmitButton 
} from '../styles/FormUserData.styles';

import Input from './Input';
import CircleIcon from '../assets/circle.svg';

const FormUserData: React.FC = () => {
  const history = useHistory();

  const [hasEmptyInputs, setHasEmptyInputs] = useState(false);
  const [isUpdateInDisplay, setIsUpdateInDisplay] = useState(false);

  const {
    actualPath,
    handleChange,
    submitUser,
    updateUser,
    inputValuesVeryifier,
    menuListHandler
  } = useContext(AppContext);

  useEffect(() =>{
    if(actualPath === 'update'){
      setIsUpdateInDisplay(true)
    } else {
      setIsUpdateInDisplay(false)
    }
  },[actualPath])

  const backToList = () => {
    history.push("/");
    menuListHandler()
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if(!isUpdateInDisplay){
      if(inputValuesVeryifier()) {
          setHasEmptyInputs(false);
          submitUser();
          backToList();
        } else {
          setHasEmptyInputs(true);
        }
    } else {
      updateUser();
      backToList();
    }
  }
  
  return (
    <Container>
      <HeaderArea>
        <img src={CircleIcon} alt="logo"/>
        <h2>{!isUpdateInDisplay ? 'Cadastro' : 'Atualização'} de Funcionários - Preencha os Dados</h2>
      </HeaderArea>
        <Form onSubmit={(e) => handleSubmit(e)}>          
          <FormUserArea className={hasEmptyInputs ? 'withEmptyInputs' : ''}>
            <InputArea>
              <span>Nome</span>
              <input name="name" type="text" onChange={handleChange}/>
            </InputArea>
            <InputArea>
              <span>CPF</span>
              <Input 
                name="cpf" 
                mask="cpf" 
                onChange={handleChange} 
                placeholder="111.111.111-01" 
                style={isUpdateInDisplay ? { backgroundColor: 'var(--green-50)'} : {}}
              />
            </InputArea>       
            <InputArea>
              <span>Salário Bruto</span>
              <Input name="salary" mask="currency" prefix="R$" onChange={handleChange} placeholder="9.999,99"/>
            </InputArea>   
            <InputArea>
              <span>Desconto da previdência</span>
              <Input name="tributeDiscount" mask="currency" prefix="R$" onChange={handleChange} placeholder="9.999,99"/>
            </InputArea>
            <InputArea>
              <span>Número de dependentes</span>
              <input name="dependents" type="number" onChange={handleChange} min="0" placeholder="0"/>
            </InputArea>   
          </FormUserArea>          
          <SubmitArea>
            <SubmitButton type="submit">{isUpdateInDisplay ? 'Atualizar' : 'Cadastrar'}</SubmitButton>
            <small>{hasEmptyInputs ? 'Preencha todos os campos' : ''}</small>
          </SubmitArea>
        </Form>
    </Container>
  );
}

export default FormUserData;