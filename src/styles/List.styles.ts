import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, var(--ice) 6rem, var(--white) 10%);
  padding-bottom: 2rem;
`

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

export const ListContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  width: 60%;
  min-height: 70vh;

  > h3 {
    color: var(--purple-300);
    margin-bottom: 0.75rem;
  }
`;

export const InformationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  > h2 {
    font-size: 1.25rem;
    color: var(--gray-800);
    margin: 1.75rem 0;
  }

  > p {
    color: var(--gray-200);
    margin-bottom: 1rem;
    text-align: justify;
  }
`

export const Table = styled.table`
  width: 100%;

  td,
  th {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--gray-100);

    @media(max-width: 767px){
      font-size: 0.75rem;
    }
  }

  th {
    color: var(--gray-200);
    text-transform: uppercase;
    font: 500 0.75rem 'Nunito', sans-serif;
    text-align: left;

    &:nth-child(5),
    &:nth-child(7){
      text-align: center;
    }
  }

  td {
    font-size: 0.875rem;
    color: var(--gray-800);
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4rem;
    font-size: 0.75rem;
    
    &:nth-child(5),
    &:nth-child(7){
      text-align: center;
    }



    button {
      width: 2rem;
      height: 2rem;
      background: var(--white);
      border: 1px solid var(--gray-100);
      border-radius: 0.5rem;
      font-size: 0;

      transition: filter 0.2s ease;

      img {
        width: 1rem;
        height: 1rem;
      }

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`

export const Line = styled.div`
  background: var(--purple-300);
  width: 100%;
  height: 0.13rem;

  margin-bottom: 1rem;
`;