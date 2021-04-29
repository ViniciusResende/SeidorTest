import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #EFF4F9 6rem, #fff 10%);

  header.headerArea {
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
  }


  div.listContainer{
    font-family: 'Nunito', sans-serif;
    width: 60%;
    min-height: 70vh;
    
    div.informationSection{
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
    }
  }


  div.listContainer div.titleArea h1{
    color: #445566;
    font-size: 3.5rem;
    margin: 0;
  }

  div.listContainer h3{
    color: var(--purple-300);
    margin-bottom: 0.75rem;
  }

  div.listContainer div.line{
    background: var(--purple-300);
    width: 100%;
    height: 0.13rem;

    margin-bottom: 1rem;
  }

  div.listContainer table{
    width: 100%;

    td,
    th {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--gray-100);
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
  }

  @media(max-width: 767px){
    div.listContainer table td,
    div.listContainer table th{
      font-size: 0.75rem;
    }
  }

  div.listContainer table tr.last {
    height: 15rem;
  }
`