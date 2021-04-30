import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, var(--ice) 8rem, var(--white) 10%);
`;

export const HeaderArea = styled.header`
  background: var(--purple-500);
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 2.5rem;
    height: 2.5rem;
  }

  > h2 {
    margin-top: 1rem;
    color: var(--gray-100);
  }
`;

export const Form = styled.form`
  font-family: 'Nunito', sans-serif;
`;

export const FormUserArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.25rem;

  &.withEmptyInputs div input{
    background: var(--red-50)
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: var(--gray-800);
    font-weight: 700;
  }

  input {
    background: var(--ice);
    border: none;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);

    &::placeholder{
      font-weight: 900;
      color: rgba(68,85,102,0.25);
    }
  }

  &:nth-child(1){
    grid-column: span 2;
  }

  @media(max-width: 767px){
    grid-column: span 2;
  }
`;

export const SubmitArea = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 4rem;

    > small {
      color: var(--red-500);

      margin: 0.5rem 0 2rem 0;
    }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 15rem;
  width: 100%;

  color: var(--white);
  font-weight: 600;
  text-transform: uppercase;

  background: var(--purple-300);
  border: 1px solid var(--gray-500);
  border-radius: 5px;

  cursor: pointer;
  transition: filter 0.4s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;