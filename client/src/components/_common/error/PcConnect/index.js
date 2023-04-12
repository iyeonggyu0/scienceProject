import styled from 'styled-components';

const PcConnectError = () => {
  return (
    <MainDiv className="flexCenter">
      <div></div>
    </MainDiv>
  );
};
export default PcConnectError;

export const MainDiv = styled.section`
  width: 100vw;
  height: 100vh;
  background: url('/img/error/PcConnectError.png') center center;
  background-size: contain;
`;
