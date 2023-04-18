import styled from 'styled-components';

export const MainDiv = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.palette.BG};

  overflow: hidden;

  & > div {
    flex-wrap: wrap;
    gap: 30px 0;
    width: 50vw;
    height: 115px;
    position: relative;
  }

  & > div > p {
    width: 50vw;
    position: absolute;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    transition: all 0.3s;
  }

  & > div > p:nth-child(1) {
    top: 0;
  }

  & > div > p:nth-child(2) {
    bottom: 0;
  }

  & > div > p:hover {
    border: 2px solid black;
    background-color: ${({ theme }) => theme.palette.BG};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }
`;
