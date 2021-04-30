import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import { Container, MenuButton, MenuContent } from '../styles/Menu.styles';

const Menu: React.FC = () => {
  const {
    actualPath,
    menuListHandler,
    menuRegisterHandler,
    menuUpdateHandler,
  } = useContext(AppContext);
  return (
    <Container>  
      <MenuContent>
        <MenuButton 
          as={Link} 
          to='/' 
          onClick={menuListHandler} 
          className={actualPath === '' ? 'selected' : ''}
        >
            Lista
        </MenuButton>
        <MenuButton
          as={Link} 
          to='/register'  
          onClick={menuRegisterHandler} 
          className={actualPath === 'register' ? 'selected' : ''}
        >
          Cadastro
        </MenuButton>
        <MenuButton 
          as={Link} 
          to='/update' 
          onClick={menuUpdateHandler} 
          className={actualPath === 'update' ? 'selected' : ''}
        >
          Atualizar
        </MenuButton>
      </MenuContent>
    </Container>
  )
}

export default Menu
