import { useEffect } from 'react';
import { MainDiv } from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPageCP = () => {
  const navigate = useNavigate();
  const imgs = ['001.png', '003.png', '004.png'];
  const [img, setImg] = useState(''); // img 상태값 초기화

  useEffect(() => {
    let currentIndex = 0; // 현재 이미지 배열의 인덱스
    setImg(imgs[currentIndex]); // 초기 이미지 설정

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % imgs.length; // 다음 이미지 인덱스 계산
      setImg(imgs[currentIndex]); // 다음 이미지 설정
    }, 8000); // 5초 간격으로 이미지 변경

    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
    };
    // eslint-disable-next-line
  }, []);

  return (
    <MainDiv img={img}>
      <p>AiTestHub</p>
      <p>인공지능 관련 설문조사 사이트</p>
      {/* 버튼 */}
      <div className="flexCenter" onClick={() => navigate('/menu')}>
        <span>시작하기</span>
      </div>

      {/* IMG */}
      <div></div>
    </MainDiv>
  );
};
export default MainPageCP;
