import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 1rem 8rem;
  background: var(--dark-purple);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px){
    padding: 1.5rem 2rem;
  }
`;

export const SideContainer = styled.div`
  > img {
    width: 3rem;
    height: 3rem;
    margin-bottom: .5rem;
  }

  > p {
    font-family: 'Nunito', sans-serif;
    color: var(--gray-200);
    font-weight: 600;
    font-size: .5rem;
  }
`;

export const FooterButton = styled.a`
  background: none;
  border: 0;
  outline: 0;
  text-decoration: none;
  font-size: .85rem;

  color: var(--gray-50);
  transition: color 0.3s ease;
  cursor: pointer;

  & + button {
    margin-top: 0.5rem;
  }

  &:hover {
    color: var(--gray-500)
  }
`;