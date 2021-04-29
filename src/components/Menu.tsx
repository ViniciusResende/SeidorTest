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
        {isListInDisplay ? (
          <div className="outCircle" style={{opacity: 1}}><div className="inCircle"></div></div>
        ): (
          <div className="outCircle" style={{opacity: 0}}><div className="inCircle"></div></div>
        )}
        <p onClick={menuListHandler}>Lista</p>
        {isRegisterInDisplay ? (
          <div className="outCircle" style={{opacity: 1}}><div className="inCircle"></div></div>
        ): (
          <div className="outCircle" style={{opacity: 0}}><div className="inCircle"></div></div>
        )}
        <p onClick={menuRegisterHandler}>Cadastro</p>
      </div>
    </Wrapper>
  )
}

export default Menu
