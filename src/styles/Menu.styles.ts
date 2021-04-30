import styled from 'styled-components';

export const Container = styled.nav`
  position: sticky;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  background-color: #343a40;
  padding: 1.5rem 6rem;

  z-index: 1030;
`

export const MenuContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  z-index: 2;
`;

export const MenuButton = styled.a`
  background: none;
  border: 0;
  outline: 0;
  text-decoration: none;

  color: var(--gray-50);

  &:before {
    bottom: 3px;
    content: ' ';
    display: block;
    height: 0.1875rem;
    line-height: 0;
    position: relative;
    transform: scaleX(0);
    transition: all 0.4s ease;

    z-index: 5;
  }

  &.selected:before {
    background-color: var(--purple-500);
    bottom: 3px;
    content: ' ';
    display: block;
    height: 0.1875rem;
    line-height: 0;
    position: relative;
    transform: scaleX(1);
    transition: all 0.4s ease;
    z-index: 5;
  }

  &:hover:before {
    background-color: var(--purple-500);
    bottom: 3px;
    content: ' ';
    display: block;
    height: 0.1875rem;
    line-height: 0;
    position: relative;
    transform: scaleX(1);
    transition: all 0.4s ease;
    z-index: 5;
  }

  & + a {
    margin-left: 1.5rem;
  }
`;