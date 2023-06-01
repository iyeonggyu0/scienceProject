import styled from 'styled-components';

const MyMessage = ({ text }) => {
  return (
    <MainStyle>
      <div>
        <span>{text}</span>
      </div>
    </MainStyle>
  );
};
export default MyMessage;

export const MainStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 15px;
  line-height: 140%;

  & > div {
    background-color: #757575;
    padding: 10px;
    font-size: 0.8rem;
    max-width: 80%;
    border-radius: 5px;
  }
`;
