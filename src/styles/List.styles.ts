import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #EFF4F9 6rem, #fff 10%);
  padding: 0rem 1rem;

  div.listContainer{
    font-family: 'Nunito', sans-serif;
  }

  div.listContainer div.titleArea {
    width: 100%;
    padding: 1rem 0;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  div.listContainer div.titleArea h1{
    color: #445566;
    font-size: 3.5rem;
    margin: 0;
  }

  div.listContainer h3{
    color: #1188EE;
    margin-bottom: 0.75rem;
  }

  div.listContainer div.line{
    background: #EFF4F9;
    width: 100%;
    height: 0.13rem;

    margin-bottom: 1rem;
  }

  div.listContainer div.inputArea{
    display: flex;
    flex-direction: column;
  }

  div.listContainer div.inputArea span{
    color: #445566;
    font-weight: 700;
    margin: 0 0 0.25rem 1px;
  }

  div.listContainer div.inputArea input{
    background: #EFF4F9;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  }

  div.listContainer table{
    border: 2px solid rgba(187, 204, 221, 0.8);
    padding: 0;
    margin-top: 5rem;
    margin-bottom: 10rem;
    border-collapse: collapse;
  }

  div.listContainer table td,
  div.listContainer table th {
    text-align: start;
    border: 2px solid rgba(187, 204, 221, 0.8);
    font-weight: 700;
    padding: 0.5rem;
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