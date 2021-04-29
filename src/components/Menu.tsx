import React, {useContext} from 'react'
import { AppContext } from '../contexts/AppContext';
import { Wrapper } from '../styles/Menu.styles';

const Menu: React.FC = () => {
  const {
    isListInDisplay,
    isRegisterInDisplay,
    menuListHandler,
    menuRegisterHandler,
  } = useContext(AppContext);
  return (
    <Wrapper>  
      <div className="menuContainer">
        <button onClick={menuListHandler} className={isListInDisplay ? 'selected' : ''}>Lista</button>
        <button onClick={menuRegisterHandler} className={isRegisterInDisplay ? 'selected' : ''}>Cadastro</button>
      </div>
    </Wrapper>
  )
}

export default Menu
