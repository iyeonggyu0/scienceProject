import styled from 'styled-components';

export const MainDiv = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.palette.BG};
  overflow: hidden;

  & > p {
    text-align: center;
  }

  & > p:first-child {
    font-family: Roboto;
    font-weight: 900;
    font-size: 3.5rem;
    margin-top: 30%;
  }

  & > p:nth-child(2) {
    font-family: Noto Sans KR;
    font-weight: 400;
    font-size: 1.2rem;
  }

  & > div:nth-child(3) {
    width: 50%;
    margin: 0 auto;
    margin-top: 35px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid black;
  }

  & > div:last-child {
    width: 100%;
    height: 65%;
    position: absolute;
    bottom: 0;

    background: url('/img/mainPage/${(props) => props.img}') center center no-repeat;
    background-size: 120%;
    transition: all 0.5s;
  }
`;
