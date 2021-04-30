import React, { useContext } from 'react'
import { Container, SideContainer, FooterButton } from '../styles/Footer.styles';

import CircleIcon from '../assets/circle.svg';
import { AppContext } from '../contexts/AppContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const {
    menuListHandler,
    menuRegisterHandler,
    menuUpdateHandler
  } = useContext(AppContext);

    return (  
      <Container>
        <div>
          <FooterButton as={Link} to="/" onClick={menuListHandler}>Lista</FooterButton>
          <FooterButton as={Link} to="/register" onClick={menuRegisterHandler}>Cadastro</FooterButton>
          <FooterButton as={Link} to="/update" onClick={menuUpdateHandler}>Atualizar</FooterButton>
        </div>
        <SideContainer>
          <img src={CircleIcon} alt="logo"/>
          <p>Copyright © 2021.</p>
          <p>Todos os direitos reservados à</p>
          <p>Vinícius Alves</p>
        </SideContainer>
      </Container>
    )
}

export default Footer