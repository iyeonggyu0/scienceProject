import styled from 'styled-components';

export const MainStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.palette.LightBG};
  overflow: hidden;

  & > div:nth-child(1) {
    width: 80vw;
    margin: 0 auto;
    margin-top: 5vh;
    position: relative;
  }

  & > div:nth-child(1) > p:nth-child(1) {
    font-family: Noto Sans Kr;
    font-weight: 500;
    font-size: 1.3rem;
    padding-bottom: 12px;
  }

  & > div:nth-child(1) > input {
    width: 100%;
    height: 50px;
    outline: 1px solid ${({ theme }) => theme.palette.DarkBG};
    border-radius: 8px;

    padding: 0 45px 0 30px;
  }

  & > div:nth-child(1) > .icon {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 15px;
    top: 50px;
    color: ${({ theme }) => theme.palette.DarkBG};
  }

  & > div:nth-child(2) {
    width: 80vw;
    margin: 0 auto;
    position: relative;
    background-color: ${({ theme }) => theme.palette.CmdColor};
    color: white;
    border-radius: 8px;
    margin-top: 3vh;
  }

  & > div:nth-child(2) > div:nth-child(1) {
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.CmdStroke};
    justify-content: space-between;
  }

  & > div:nth-child(2) > div:nth-child(1) > div {
    justify-content: flex-end;
    gap: 0 8px;
  }

  & > div:nth-child(2) > div:nth-child(1) > div > div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  & > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) {
    background-color: ${({ theme }) => theme.palette.CmdPointColor1};
  }
  & > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) {
    background-color: ${({ theme }) => theme.palette.CmdPointColor2};
  }
  & > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(3) {
    background-color: ${({ theme }) => theme.palette.CmdPointColor3};
  }

  & > div:nth-child(2) > div:nth-child(2) {
    width: 100%;
    height: 53vh;
    overflow: scroll;
    border-bottom: 1px solid ${({ theme }) => theme.palette.CmdStroke};
  }

  & > div:nth-child(2) > div:nth-child(3) {
    height: 10vh;
  }

  & > div:nth-child(2) > div:nth-child(3) > p {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.palette.CmdPointColorLightGreen};
    transition: all 0.2s;
  }

  & > div:nth-child(2) > div:nth-child(3) > p:hover {
    background-color: ${({ theme }) => theme.palette.CmdPointColorGreen};
  }
`;
