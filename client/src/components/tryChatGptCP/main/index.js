import { useState } from 'react';
import { MainStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import MyMessage from '../_common/myMessage';
import axios from 'axios';
import { axiosInstance } from '../../../util/axios';
import ResMessage from '../_common/myMessage copy';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const TryChatGptMain = () => {
  const [searchWord, setSearchWord] = useState('');
  const [frwardText, setFrwardText] = useState('');
  const [resMessage, setResMessage] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 엔터 키 감지
      onClickHandler(); // 실행할 함수 호출
    }
  };

  const onClickHandler = () => {
    if (searchWord?.replace(/ /g, '').length === 0) {
      setSearchWord('');
      return alert('질문을 입력하세요');
    }
    setFrwardText(searchWord);
    setResMessage('');
    setUrl('');
    axios
      .post(`${axiosInstance}api/gpt`, JSON.stringify({ message: searchWord }), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setResMessage(res.data.message.replace(/\n\n/g, ''));
          setUrl(`https://www.google.com/search?q=${encodeURIComponent(searchWord)}`);
          setSearchWord('');
        } else {
          if (alert('Error')) {
            location.relode();
          }
        }
      })
      .catch((err) => console.error(err));
  };

  const portalSearch = () => {
    window.open(`${url}`, '_blank', 'noopener noreferrer');
  };

  return (
    <MainStyle>
      <div>
        <p>검색어 또는 질문을 입력하세요</p>
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
        <div>
          {frwardText && <MyMessage text={frwardText} />}
          {resMessage && <ResMessage text={resMessage} />}
        </div>
        <div className="flexCenter">
          <p onClick={portalSearch}>포털 검색</p>
          <p onClick={() => navigate('/survey/profile')}>설문조사</p>
        </div>
      </div>
    </MainStyle>
  );
};
export default TryChatGptMain;
