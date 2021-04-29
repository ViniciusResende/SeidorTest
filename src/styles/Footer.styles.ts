import styled from 'styled-components';

export const Wrapper = styled.div`
  div.footerContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    position: sticky;
    bottom: 0;

    padding: 1rem 3rem;
    background: var(--dark-purple);

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    > div.navigationContainer {
      > button {
        background: none;
        border: 0;
        outline: 0;
        font-size: .85rem;

        color: var(--gray-50);
        transition: color 0.3s ease;

        & + button {
          margin-top: 0.5rem;
        }

        &:hover {
          color: var(--gray-500)
        }
      }
    }

    > div.sideContainer{
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
    }
  }
`