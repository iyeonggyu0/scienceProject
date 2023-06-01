import styled from 'styled-components';

const ResMessage = ({ text }) => {
  return (
    <MainStyle>
      <div>
        <span>{text}</span>
      </div>
    </MainStyle>
  );
};
export default ResMessage;

export const MainStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  line-height: 140%;

  & > div {
    background-color: #10a27e;
    padding: 10px;
    font-size: 0.8rem;
    max-width: 80%;
    border-radius: 5px;
  }
`;
