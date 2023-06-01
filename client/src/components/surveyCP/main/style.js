import styled from 'styled-components';

export const MainStyle = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #a1e2fe;

  & > div {
    width: 70%;
    flex-wrap: wrap;
    position: relative;
    gap: 1rem 0;
  }

  & > div > div:nth-child(1),
  & > div > div:nth-child(2) {
    width: 100%;
    justify-content: space-between;
  }

  & > div > div > span {
    font-size: 1.2rem;
    font-weight: 600;
  }

  & > div > div:nth-child(1) > input,
  & > div > div:nth-child(2) > input {
    width: 80%;
    height: 50px;
    border: 1px solid #6b96a9;
    border-radius: 5px;
    text-align: center;
    padding: 15px;
  }

  & > div > div:nth-child(1) > input:focus,
  & > div > div:nth-child(2) > input:focus {
    border: 2px solid #6b96a9;
    outline: 1px solid #6b96a9;
  }

  & > div > div:nth-child(3) {
    width: 100%;
    justify-content: space-between;
  }

  & > div > div:nth-child(3) > div {
    width: 80%;
    height: 50px;
    justify-content: space-between;
    position: relative;
  }

  & > div > div:nth-child(3) > div > * {
    width: 45%;
    background-color: white;
    font-size: 1rem;
    padding: 15px 0;
    font-weight: 600;
    border: 1px solid #6b96a9;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }

  & > div > div:last-child {
    width: 100%;
    height: 50px;
    background-color: #c0ebfe;
    border-radius: 5px;
    border: 1px solid #6b96a9;
    font-weight: 600;
  }
`;
