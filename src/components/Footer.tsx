import React, { useContext } from 'react'
import { Wrapper } from '../styles/Footer.styles';

import CircleIcon from '../assets/circle.svg';
import { AppContext } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const {
    menuListHandler,
    menuRegisterHandler,
  } = useContext(AppContext);

    return (
    <Wrapper>  
      <div className="footerContainer">
        <div className="navigationContainer">
          <button onClick={menuListHandler}>Lista</button>
          <button onClick={menuRegisterHandler}>Cadastro</button>
        </div>
        <div className="sideContainer">
          <img src={CircleIcon} alt="logo"/>
          <p>Copyright © 2021.</p>
          <p>Todos os direitos reservados à</p>
          <p>Vinícius Alves</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer