import { useNavigate } from 'react-router-dom';
import { MainDiv } from './style';

const MnuePageMainCP = () => {
  const navigate = useNavigate();
  return (
    <MainDiv className="flexCenter">
      <div className="flexCenter">
        <p onClick={() => navigate('/try-ChatGPT')}>Try ChatGPT</p>
        <p onClick={() => navigate('/survey')}>survey</p>
      </div>
    </MainDiv>
  );
};
export default MnuePageMainCP;
