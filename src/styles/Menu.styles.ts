import styled from 'styled-components';

export const Wrapper = styled.div`
  div.menuContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    width: 100%;

    position: fixed;

    background: #17222D;
    z-index: 5;
  }

  div.menuContainer div.outCircle{
    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;
    border-radius: 50%;

    width: 0.5rem;
    height: 0.5rem;
    transition: all 0.4s ease;
  }

  div.menuContainer div.outCircle div.inCircle{
    background: #17222D;
    border-radius: 50%;

    width: 0.25rem;
    height: 0.25rem;
    transition: all 0.4s ease;
  }

  div.menuContainer p{
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    margin-left: 1rem;
    margin-right: 2.5rem;
    font-family: 'Nunito', sans-serif;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  div.menuContainer p:hover{
    filter: brightness(0.8);
  }
`