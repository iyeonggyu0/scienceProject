import { useState } from 'react';
import { MainStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

const TryChatGptMain = () => {
  const [searchWord, setSearchWord] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 엔터 키 감지
      onClickHandler(); // 실행할 함수 호출
    }
  };

  const onClickHandler = () => {
    setSearchWord('');
  };

  return (
    <MainStyle>
      <div>
        <p>검색어를 입력하세요</p>
        <input
          type="text"
          value={searchWord || ''}
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <FontAwesomeIcon icon={regular('paper-plane')} className="icon" onClick={onClickHandler} />
      </div>
      <div>
        {/* 인터페이스 디자인 */}
        <div className="flexHeightCenter">
          <span>ChatGPT</span>
          <div className="flexHeightCenter">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>{/* 답변 결과 */}</div>
        <div className="flexCenter">
          <p>포털 검색</p>
        </div>
      </div>
    </MainStyle>
  );
};
export default TryChatGptMain;
